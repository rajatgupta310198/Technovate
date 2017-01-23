from django.shortcuts import render,redirect,HttpResponseRedirect,render_to_response,HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
# Create your views here.
from django.contrib.auth import login,logout,authenticate
from events.models import Events,Profile,CampusRepresantative
from django.contrib.auth.decorators import login_required
from json import dump
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.core.exceptions import ObjectDoesNotExist
import hashlib
from datetime import datetime as dt
def index(request):
    user = request.user
    if user.is_authenticated:

        return render(request,'index.html',{'full_name':user.get_full_name(),
        'phone_no':user.profile.get_phone_no(),
        'institute':user.profile.get_Institute_Uni(),'payment_to_be_paid': user.profile.payment_due()}
        )
    return render(request,'index.html')




def s(request):
    user = request.user
    first_name = user.first_name
    last_name = user.last_name
    key = first_name + ' ' + last_name + str(dt.now())
    email = user.email
    p = user.profile
    secret = hashlib.md5(key.encode()).hexdigest()
    p.secret_code = secret[:5]
    p.save()
    code = secret[:5]
    html =  render_to_string('email/code_email.html',{'code':code,'first_name':first_name,'last_name':last_name})
    send_mail('Your activation code for technovate',
    ' ',
    'technovate.iiitnr@gmail.com',
    [email],
    html_message=html
    )
    return render(request,'verify.html')


def about(request):
    return render(request,'about.html')


def join(request):
    return render(request,'join.html')



@login_required(login_url='/')
def dashboard(request):
    return HttpResponseRedirect('/')


def register(request):
    if request.method == 'POST':
        password = request.POST['password']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        user = User.objects.create_user(username=email,password=password,email=email,first_name=first_name,last_name=last_name)
        user.set_password(password)
        user.save()
        p = Profile(user=user)
        p.user=user
        p.Name = user.get_full_name()
        p.Institute_Uni = request.POST['institute_uni']
        p.is_active = False
        p.PhoneNo = request.POST['phoneno']
        key = first_name + ' ' + last_name + str(dt.now())
        secret = hashlib.md5(key.encode()).hexdigest()
        p.secret_code = secret[:5]
        code = secret[:5]
        html =  render_to_string('email/code_email.html',{'code':code,'first_name':first_name,'last_name':last_name})
        send_mail('Your activation code for technovate',
        ' ',
        'technovate.iiitnr@gmail.com',
        [email],
        html_message=html
        )
        p.save()
        U = authenticate(username=email,password=password)
        if U is not None:
            login(request,U)
            tevents = Events.objects.filter(Event_Cat = 0)
            ntevents = Events.objects.filter(Event_Cat = 0)
            return render(request,'verify.html',{'email':email})

            """return render(request,'index.html',{'full_name':user.get_full_name(),
            'phone_no':user.profile.get_phone_no(),
            'institute':user.profile.get_Institute_Uni(),
            'tevents':tevents
            })"""

login_required(login_url='/')
def verify(request):
    if request.method == 'POST':
        code = request.POST['code']
        user_code = request.user.profile.secret_code
        if user_code == code:
            user = request.user
            user.profile.is_active = True
            user.save()
            first_name = user.first_name
            last_name = user.last_name
            pro = user.profile
            pro.save()
            code = 'Your account is successfully activated.'
            html =  render_to_string('email/code_email.html',{'code':code,'first_name':first_name,'last_name':last_name})
            send_mail('Account activated','','technovate.iiitnr@gmail.com',[user.email],
            html_message= html
            )
            return redirect('/')
        else:
            mes = 'Wrong Code try again'
            return render(request,'verify.html',{'mes':mes})


"""@login_required(login_url='/join/')
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

"""

def enrollTo(request):
    if request.method == 'POST':
        user = request.user
        ev = request.POST['event']
        if ev:
            event = Events.objects.get(EventName=ev)
            has = False
            for y in user.profile.events.all():
                if event.EventName == y.EventName:
                    has = True
                    break

            if has == False:
                #user.profile.payment_to_be_paid = user.profile.payment_to_be_paid + event.eventCost
                """old_payment_due = user.profile.payment_due()
                new_payment = event.eventCost
                total_due = old_payment_due + new_payment
                user.profile.payment_to_be_paid = total_due"""
                if user.profile.payment_due() >0 or user.profile.payment_pay() > 0:
                    pass

                else:
                    user.profile.payment_to_be_paid = event.eventCost

                user.profile.events.add(event)
                user.profile.save()
                code = ev
                html = render_to_string('email/email_event.html',{'code':code,'first_name':user.first_name,
                'last_name':user.last_name,
                'amount':event.eventCost
                })
                send_mail('Event Registration',
                ' ',
                'technovate.iiitnr@gmail.com',
                [user.email],
                html_message = html
                )
                """url_payment = "some url"
                return render(request,'success.html',{'url_payment':url_payment})"""
                return redirect('/')


            return redirect('/')

        request.POST['event'].remove(ev)
        logout(request)
        return redirect('/')


def tevents(request):
    events = Events.objects.all()
    user = request.user
    if user.is_authenticated:
        """return render(request,'events.html',{'full_name':user.get_full_name(),'phone_no':user.profile.get_phone_no(),
        'institute':user.profile.get_Institute_Uni()})
        """
        logout(request)
        return redirect('techevents')

    return render(request,'tevents.html',{'events':events})


def LOG_IN(request):
    if request.method == "POST":
        username = request.POST['email']
        password = request.POST['password']
        user = authenticate(username=username,password=password)
        if user is not None:
            if user.is_active:
                login(request,user)
                if hasattr(user,'profile'):
                    #tevents = Events.objects.filter(Event_Cat = 0)
                    #ntevents = Events.objects.filter(Event_Cat = 1)
                    return redirect('/')
                    """return render(request,'index.html',{
                    'full_name':user.get_full_name(),'phone_no':user.profile.get_phone_no(),
                    'institute':user.profile.get_Institute_Uni(),
                    })"""

                else:
                    return HttpResponseRedirect('/dashboard/')


        else:
            mess = "Wrong Credential or you didn't Sign Up"
            return render(request,'wrongcred.html',{"mes":mess})


def LOG_OUT(request):
    logout(request)
    return redirect('/')


def campusRe(request):
    if request.method == 'POST':
        C = CampusRepresantative()
        C.Name = request.POST['Name']
        C.Institute = request.POST['ins']
        email = request.POST['email']
        phone = request.POST['ph']
        try:
            cam = CampusRepresantative.objects.get(email=email)
        except ObjectDoesNotExist:
            C.email = request.POST['email']
            C.Phone  = request.POST['ph']
            C.save()
            html = render_to_string('email/email_campurRepre.html',{'name':C.Name,'institute':C.Institute})
            send_mail('Campus Respresentative',
            ' ',
            'technovate.iiitnr@gmail.com',
            [C.email],
            html_message = html
            )
            return HttpResponseRedirect('/')
        else:

            html = render_to_string('email/email_campurRepre.html',{'name':C.Name,'institute':C.Institute,'caution':"caution"})

            send_mail('You have already registered',
            ' ',
            'technovate.iiitnr@gmail.com',
            [C.email],
            html_message = html
            )
            return HttpResponseRedirect('/')
