from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Events(models.Model):
    EventName = models.CharField(max_length=50)
    EventDescription = models.CharField(max_length=1000)

    def get_event_name(self):
        return self.EventName

    def get_event_description(self):
        return self.EventDescription

    def __str__(self):
        return self.EventName


class Profile(models.Model):
    user = models.OneToOneField(User)
    events = models.ManyToManyField(Events)
    PhoneNo = models.CharField(max_length=10)
    Institute_Uni = models.CharField(max_length=100)

    def get_participated_in(self):
         pass


    def get_phone_no(self):
        return self.PhoneNo

    def get_Institute_Uni(self):
        return self.Institute_Uni

    def __str__(self):
        return self.user.get_full_name()
