from django.db import models

# Create your models here.
class Scoreboard(models.Model):
    player_name = models.CharField(max_length=100)
    initials = models.CharField(max_length=3, blank=True, null=True)
    score = models.IntegerField()
    game_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.player_name} ({self.initials}) - {self.score}"