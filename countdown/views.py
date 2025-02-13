from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import random 

#arrays have to be here.
vowels = ['a', 'e', 'i', 'o', 'u']
consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']


# Create your views here.

def lettersGame(request):
    return render(request, 'lettersGame.html')

#lettersgame views
def random_vowel(request):
    return JsonResponse(random.choice(vowels), safe=False)

def random_consonant(request):
    return JsonResponse(random.choice(consonants), safe=False)