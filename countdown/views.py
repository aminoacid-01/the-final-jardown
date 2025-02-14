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


#oxford api view 
def proxy_oxford_api(request, word):
    url = f"https://od-api-sandbox.oxforddictionaries.com/api/v2/entries/entries/en-us/{word}"
    headers = {
        'app_id': settings.OXFORD_APP_ID,
        'app_key': settings.OXFORD_APP_KEY,
    }
    response = requests.get(url, headers=headers)
    return JsonResponse(response.json(), safe=False)
# copilot added below line
urlpatterns = [
    path('proxy/oxford/<str:word>/', proxy_oxford_api, name='proxy_oxford_api'),
]
