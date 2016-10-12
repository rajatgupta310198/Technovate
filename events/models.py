from django.db import models
from django.contrib.auth.models import User

# Create your models here.

#Table for events in Technovate
class Events(models.Model):
    EventName = models.CharField(max_length=50)
    EventDescription = models.CharField(max_length=1000)

    #get_event_name function for retrieving event name
    def get_event_name(self):
        return self.EventName

    # get_event_description function for retrieving event description
    def get_event_description(self):
        return self.EventDescription

    def __str__(self):
        return self.EventName


#Table for participants registering for event in Technovate
class Profile(models.Model):
    user = models.OneToOneField(User)
    events = models.ManyToManyField(Events)
    PhoneNo = models.CharField(max_length=10)
    Institute_Uni = models.CharField(max_length=100)

    #get_participated_in function for retrieving list of participated events by profile
    def get_participated_in(self):
         pass

    #A method for retrieving  phone number
    def get_phone_no(self):
        return self.PhoneNo

    # A method of getting institute name
    def get_Institute_Uni(self):
        return self.Institute_Uni

    def __str__(self):
        return self.user.get_full_name()
