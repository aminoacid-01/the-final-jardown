from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('letters/', views.lettersGame, name='lettersGame'),
    path('numbers/', views.numbersGame, name='numbersGame'),
]