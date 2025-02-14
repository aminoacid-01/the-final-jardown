from django.shortcuts import render
from django.http import HttpResponse
from .models import Scoreboard


# Create your views here.

def lettersGame(request):
    scores = Scoreboard.objects.all()
    return render(request, 'lettersgame.html', {'scores': scores})

def numbersGame(request):
    return render(request, 'numbersgame.html')

def home(request):
    return render(request, 'home.html')

