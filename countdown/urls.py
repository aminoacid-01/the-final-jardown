from django.urls import path
from . import views
from .views import proxy_oxford_api

urlpatterns = [
    path('', views.home, name='home'),
    path('letters/', views.lettersGame, name='lettersGame'),
    path('numbers/', views.numbersGame, name='numbersGame'),
    #api path
    path('proxy/oxford/<str:word>/', proxy_oxford_api, name='proxy_oxford_api'),
    
]