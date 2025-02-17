from django.urls import path
from . import views

urlpatterns = [
    path('letters/', views.lettersGame, name='lettersGame'),
    path('numbers/', views.numbersGame, name='numbersGame'),
    path('profile/', views.profile, name='profile'),
    path('profile/edit/', views.edit_profile, name='edit_profile'),
    path('profile/delete/', views.delete_profile, name='delete_profile'),
    path('save-letters-game-result/', views.save_letters_game_result, name='save_letters_game_result'),
    path('scoreboard/', views.scoreboard, name='scoreboard'),
]
