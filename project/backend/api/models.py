from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings

class User(AbstractUser):
    USER_TYPES = (
        ('buyer', 'Buyer'),
        ('seller', 'Seller'),
        ('agent', 'Agent'),
    )
    
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    user_type = models.CharField(max_length=20, choices=USER_TYPES, default='buyer')
    
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    def __str__(self):
        return self.username
    
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    full_name = models.CharField(max_length=500)
    bio = models.CharField(max_length=500)
    image = models.ImageField(default="default.jpg", upload_to="user_images")
    verified =models.BooleanField(default=False)
    
    def __str__(self):
        return self.full_name
    

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
    
post_save.connect(create_user_profile, sender =User)
post_save.connect(save_user_profile, sender=User)


class PropertyImage(models.Model):
    image = models.ImageField(default='default.png', upload_to='property_images/')
    property = models.ForeignKey('Property', on_delete=models.CASCADE, related_name='images')

class Property(models.Model):
    STATUS_CHOICES =[
        ('available', 'Available'),
        ('under_contract', 'Under Contract'),
        ('sold', 'Sold'),
    ]
    
    title = models.CharField(max_length=800)
    description = models.TextField()
    price = models.DecimalField(max_digits=500, decimal_places=2)
    sizes = models.DecimalField(max_digits=500, decimal_places=2)
    location = models.CharField(max_length=300)
    status = models.CharField(max_length=100, choices=STATUS_CHOICES, default='available')
    listed_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='properties')
    listed_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    
class Appointment(models.Model):
    STATUS_CHOICES = (
        ('requested', 'Requested'),
        ('confirmed', 'Confirmed'),
        ('rescheduled', 'Rescheduled'),
        ('canceled', 'Canceled'),
    )
    
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointments')
    property = models.ForeignKey(Property, on_delete=models.CASCADE, related_name='appointments')
    date_time = models.DateTimeField()
    status = models.CharField(max_length=80, choices=STATUS_CHOICES, default='requested')
    
    def __str__(self):
        return f"Appointment for {self.property.title} on {self.date_time}"
    
    