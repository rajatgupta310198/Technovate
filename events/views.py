from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import messages
# Create your views here.
from django.contrib.auth import login,logout,authenticate
from events.models import Events,Profile
def index(request):
    return render(request,'index.html')


def join(request):
    return render(request,'join.html')

def dashboard(request):
    return render(request,'dashboard.html')

def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        user = User.objects.create_user(username=username,password=password,email=email,first_name=first_name,last_name=last_name)
        user.set_password(password)
        user.save()
        U = authenticate(username=username,password=password)
        if U is not None:
            login(request,U)
            events = Events.objects.all()
            return render(request,'dashboard.html',{'events':events})




def UpdateAndCreateProfile(request):
    if request.method == 'POST':
        user = request.user
        U = User.objects.filter(pk=user.id)
        p = Profile()
        p.Institute_Uni = request.POST['institute_uni']
        p.PhoneNo = request.POST['phoneno']
        p.save()
        e = Events.objects.filter(pk=request.POST['event'])
        p.events.add()
        p.save()
        p.user.add(U)
        return render(request,'index.html')


def LOG_IN(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username,password=password)
        if user is not None:
            if user.is_active:
                login(request,user)
                e = Events.objects.all()
                return render(request,'dashboard.html',{'e':e})
        else:
            error_mgs  = "Invalid credentials"
            messages.error(request, "Error")
            return redirect('/join',{'error_msg': error_mgs})
