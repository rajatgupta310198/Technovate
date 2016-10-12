from django.shortcuts import render
from django.contrib.auth.models import User
# Create your views here.
from django.contrib.auth import login,logout,authenticate
from events.models import Events,Profile
def index(request):
    return render(request,'index.html')


def join(request):
    return render(request,'join.html')

def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        user = User(username=username,password=password,email=email,first_name=first_name,last_name=last_name)
        user.save()
        u = authenticate(username=username,password=password)
        login(request,u)
        full_name = user.get_full_name
        e = Events.objects.all()
        return render(request,'dashboard.html',{'full_name':full_name,'e':e})


def UpdateAndCreateProfile(request):
    if request.method == 'POST':
        p = Profile()
        p.Institute_Uni = request.POST['institute_uni']
        p.PhoneNo = request.POST['phoneno']
        p.save()
        e = Events.objects.filter(pk=request.POST['event'])
        p.events.add()
        p.save()
        return render(request,'index.html')

    


