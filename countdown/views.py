import json
import requests
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import Scoreboard
from django.conf import settings
from django.urls import path


# Create your views here.

def lettersGame(request):
    scores = Scoreboard.objects.all()
    return render(request, 'lettersgame.html', {'scores': scores})

def numbersGame(request):
    return render(request, 'numbersgame.html')

def home(request):
    return render(request, 'home.html')