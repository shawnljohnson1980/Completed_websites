from django.shortcuts import render, HttpResponse,redirect
import bcrypt
from login_app.models import User

def index(request):
    return render(request, 'home.html')
    
def log_out(request):
    request.session.flush()
    return redirect('/')

def login(request):
    return render(request,'login.html')

def register(request):
    return render(request,'register.html')

def models(request):
    return render(request,'models.html')
def children(request):
    return render(request,'children.html')

def family(request):
    return render(request,'family.html')

def events(request):
    return render(request,'events.html')