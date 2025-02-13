from django.urls import path
from . import views

urlpatterns = [
    path('letters/', views.lettersGame),
]