from django.contrib import admin
from .models import Scoreboard, Profile

# Register your models here.
@admin.register(Scoreboard)
class ScoreboardAdmin(admin.ModelAdmin):
    list_display = ('player_name', 'initials', 'score', 'game_date')
    search_fields = ('player_name', 'initials')
    list_filter = ('game_date',)
    ordering = ('-game_date',)

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'high_score', 'location', 'birth_date')
    search_fields = ('user__username', 'location')
    list_filter = ('high_score', 'location')
    ordering = ('user__username',)