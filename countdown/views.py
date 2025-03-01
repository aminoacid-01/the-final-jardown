import json
import requests
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from .models import Scoreboard, Profile
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.urls import path
from .forms import ProfileForm
from django.contrib.auth.decorators import login_required



# Create your views here.

def lettersGame(request):
    scores = Scoreboard.objects.all()
    return render(request, 'lettersgame.html', {'scores': scores})

def numbersGame(request):
    return render(request, 'numbersgame.html')

def home(request):
    return render(request, 'home.html')

#profile views 

@login_required
def profile(request):
    return render(request, 'profile.html', {'profile': request.user.profile})


@login_required
def edit_profile(request):
    if request.method == 'POST':
        form = ProfileForm(request.POST, request.FILES, instance=request.user.profile)
        if form.is_valid():
            form.save()
            return redirect('profile')
    else:
        form = ProfileForm(instance=request.user.profile)
    return render(request, 'edit_profile.html', {'form': form})

@login_required
def delete_profile(request):
    if request.method == 'POST':
        user = request.user
        logout(request)
        user.delete()
        return redirect('home')
    return render(request, 'delete_profile.html')


# added for storing scores
@login_required
def save_letters_game_result(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        score = data.get('score')

        # Update the user's high score if the new score is higher
        profile = request.user.profile
        if score > profile.high_score:
            profile.high_score = score
            profile.save()

        return JsonResponse({'status': 'success', 'high_score': profile.high_score})
    return JsonResponse({'status': 'error'}, status=400)

def scoreboard(request):
    players = Profile.objects.all().order_by('-high_score')
    return render(request, 'scoreboard.html', {'players': players})