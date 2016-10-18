from django.shortcuts import render,redirect,HttpResponseRedirect
from django.contrib.auth.models import User
from django.contrib import messages
# Create your views here.
from django.contrib.auth import login,logout,authenticate
from events.models import Events,Profile
from django.contrib.auth.decorators import login_required


def index(request):
    return render(request,'index.html')


def join(request):
    return render(request,'join.html')

@login_required(login_url='/join/')
def dashboard(request):
    return render(request,'dashboard.html')


def register(request):
    if request.method == 'POST':
        password = request.POST['password']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        user = User.objects.create_user(username=email,password=password,email=email,first_name=first_name,last_name=last_name)
        user.set_password(password)
        user.save()
        U = authenticate(username=email,password=password)
        if U is not None:
            login(request,U)
            events = Events.objects.all()
            status = 'Successfully Registered and Logged in '+ str(first_name)
            return render(request,'dashboard.html',{'events':events,'status':status})



@login_required(login_url='/join/')
def UpdateAndCreateProfile(request):
    if request.method == 'POST':
        user = request.user
        p = Profile(user=user)
        p.Institute_Uni = request.POST['institute_uni']
        p.PhoneNo = request.POST['phoneno']
        # e = Events.objects.filter(pk=request.POST['event'])
        p.save()
        return HttpResponseRedirect('/')
        #
    else:
        return render(request, 'index.html')


def events(request):
    events = Events.objects.all()
    return render(request,'events.html',{'events':events})


def LOG_IN(request):
    if request.method == "POST":
        username = request.POST['email']
        password = request.POST['password']
        user = authenticate(username=username,password=password)
        if user is not None:
            if user.is_active:
                login(request,user)
                if hasattr(user,'profile'):
                    return render(request,'dashboard.html',{
                    'full_name':user.get_full_name(),'phone_no':user.profile.get_phone_no(),
                    'institute':user.profile.get_Institute_Uni()
                    })

                else:
                    return HttpResponseRedirect('/dashboard/')


        else:
            error_mgs  = "Invalid credentials"
            messages.error(request, "Error")
            return redirect('/join',{'error_msg': error_mgs})


def LOG_OUT(request):
    logout(request)
    return redirect('/')
