from django.shortcuts import render
from api.models import Profile, User, Property, Appointment
from api.serializer import UserSerializer, MyTokenObtainPairSerializer, RegisterSerializer, PropertySerializer, AppointmentSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes =[AllowAny]
    serializer_class = RegisterSerializer
    
class BuyerRegisterView(RegisterView):
    def perform_create(self, serializer):
        serializer.save(user_type ='buyer')
        
class SellerRegisterView(RegisterView):
    def perform_create(self, serializer):
        serializer.save(user_type ='seller')

class AgentRegisterView(RegisterView):
    def perform_create(self, serializer):
        serializer.save(user_type ='agent')
        
class PropertyListCreateView(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(listed_by=self.request.user)
        
class PropertyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [IsAuthenticated]
    
class PropertyListView(generics.ListAPIView):
    serializer_class = PropertySerializer
    
    def get_queryset(self):
        queryset = Property.objects.all()
        
        # Filtering price range
        min_price = self.request.query_params.get('min_price')
        max_price = self.request.query_params.get('max_price')
        if min_price and max_price:
            queryset = queryset.filter(price_range=(min_price, max_price))
            

        # Filtering property type
        property_type = self.request.query_params.get('property_type')
        if property_type:
            queryset = queryset.filter(property_type=property_type)
            
        # Filtering by location
        location = self.request.query_params.get('location')
        if location:
            queryset = queryset.filter(location_icontains=location)
            
        # Filtering by size
        min_size = self.request.query_params.get('min_size')
        max_size = self.request.query_params.get('max__size')
        if min_size and max_size:
            queryset = queryset.filter(size_range=(min_size, max_size))
            
        return queryset


class AppointmentCreateView(generics.CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(buyer=self.request.user)
        
class AppointmentDetailView(generics.RetrieveUpdateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]
    
    def update(self, request, *args, **kwargs):
        instance = self.get_objects()
        
        if instance.buyer == request.user:
            serializer = self.get_serializer(instance, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            
            return Response(serializer.data)
        return Response({"detail": "You do not have permission to perform this action"}, status=status.HTTP_403_FORBIDDEN)

        
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    
    if request.method == "GET":
        response = f"Hey {request.user}, You are seeing a Get response"
        return Response({'response': response},  status =status.HTTP_200_OK)
    elif request.method == "POST":
        text = request.data.get("text")
        response = f"Hey {request.user}, your text is {text}"
        return Response({'response': response}, status=status.HTTP_200_OK)
    
    return Response({}, status=status.HTTP_400_BAD_REQUEST)
    

