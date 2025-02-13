from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def lettersGame(request):
    return render(request, 'lettersgame.html')

def numbersGame(request):
    return render(request, 'numbersgame.html')
