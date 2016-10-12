from django import forms
from events.models import Events,Profile
from django.contrib.auth.models import User

class Userform(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username','first_name','last_name','email','password']



class ProfileAndDashboardform(forms.ModelForm):

    class Meta:
        model = Profile
        fields = ['PhoneNo','Institute_Uni','events']



