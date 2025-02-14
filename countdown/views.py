from django.shortcuts import render
from django.http import HttpResponse
from .models import Scoreboard


# Create your views here.

def lettersGame(request):
    return render(request, 'lettersgame.html')

def numbersGame(request):
    return render(request, 'numbersgame.html')

    def scoreboard(request):
        scores = Scoreboard.objects.all()
        return render(request, 'scoreboard.html', {'scores': scores})
