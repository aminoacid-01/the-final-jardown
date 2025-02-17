from django import forms
from .models import Profile

class ProfileForm(forms.ModelForm):
    birth_date = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}))

    class Meta:
        model = Profile
        fields = ['bio', 'location', 'birth_date', 'high_score']