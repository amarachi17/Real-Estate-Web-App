from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from api import views


urlpatterns = [
    path("token/", views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("token/refresh/", TokenRefreshView.as_view(), name='token_refresh'),
    path("register/", views.RegisterView.as_view(), name='register'),
    path("register/buyer/", views.BuyerRegisterView.as_view(), name='register_buyer'),
    path("register/seller/", views.SellerRegisterView.as_view(), name='register_seller'),
    path("register/agent/", views.AgentRegisterView.as_view(), name='register_agent'),
    path("dashboard/", views.dashboard, name='dashboard'),
    path('properties/', views.PropertyListCreateView.as_view(), name='property_list'),
    path('properties/<int:pk>/', views.PropertyDetailView.as_view(), name='property_detail'),
    path('property/', views.PropertyListView.as_view(), name='property_list'),
    path('appointments/', views.AppointmentCreateView.as_view(), name='appointment_create'),
    path('appointments/<int:pk>/', views.AppointmentDetailView.as_view(), name='appointment_detail'),
]