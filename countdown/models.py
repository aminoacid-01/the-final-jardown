from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Scoreboard(models.Model):
    player_name = models.CharField(max_length=100)
    initials = models.CharField(max_length=3, blank=True, null=True)
    score = models.IntegerField()
    game_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.player_name} ({self.initials}) - {self.score}"
    
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    high_score = models.IntegerField(default=0)
    bio = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=30, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.user.username