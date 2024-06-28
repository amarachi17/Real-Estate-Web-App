from api.models import User, Profile, Property, PropertyImage, Appointment
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
 

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
        
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['full_name'] = user.profile.full_name
        token['username'] = user.username
        token['email'] = user.email
        token['bio'] = user.profile.bio
        token['image'] = str(user.profile.image)
        token['verified'] = user.profile.verified
        
        return token
    
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only= True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only= True, required=True)
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2', 'user_type']
        
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
               {"password": "Password fields does not match"}
            )
        return attrs
        
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            user_type=validated_data['user_type']
        )
        user.set_password(validated_data['password'])
        user.save()
            
        return user
    
class PropertyImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyImage
        fields = ['id', 'image']
        
class PropertySerializer(serializers.ModelSerializer):
    images = PropertyImageSerializer(many=True, read_only=True) 
    listed_by = serializers.ReadOnlyField(source='listed_by.username')
    
    class Meta:
        model = Property
        fields = ['id', 'title', 'description', 'price', 'size', 'location', 'status', 'listed_by', 'listed_at', 'images']
      
    def create(self, validated_data):
        images_data = self.context['request'].FILES
        property_instance = Property.objects.create(**validated_data)
        for image_data in images_data.getlist('images'):
            PropertyImage.objects.create(property=property_instance, image=image_data)
        return property_instance
    
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'buyer', 'property', 'date_time', 'status']