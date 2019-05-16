from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages
import re
import bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-}+\.[a-zA-Z]+$')

def index(request):
    return render(request, 'registration/index.html')

def register_user(request):
    error = False

    if len(request.POST['first_name']) < 3:
        messages.error(request, "First name must be greater than 2 characters")
        error = True
    if not request.POST['first_name'].isalpha():
        messages.error(request, "First name can only contain letters")
        error = True
    if not request.POST['last_name'].isalpha():
        messages.error(request, "Last name can only contain letters")
        error = True
    if len(request.POST['last_name']) < 3:
        messages.error(request, "Last name must be greater than 2 characters")
        error = True
    if len(request.POST['password']) < 8:
        messages.error(request, "Password must be 8 or more characters")
        error = True
    if request.POST['password'] != request.POST['c_password']:
        messages.error(request, "Passwords must match")
        error = True
    if not EMAIL_REGEX.match(request.POST['email']):
        messages.error(request, "Email is invalid pattern")
        error = True
    users_matching = User.objects.filter(email = request.POST['email'])
    if len(users_matching) > 0:
        messages.error(request, "Email is taken")
        error = True
    if error:
        return redirect('/')
    else: 
        hashed = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        user = User.objects.create(first_name = request.POST['first_name'], last_name = request.POST['last_name'], email = request.POST['email'], password = hashed)

        request.session['user_id'] = user.id

        return redirect('/main')
    return redirect('/')

def login_user(request):
    users_matching = User.objects.filter(email = request.POST['email'])
    if len(users_matching) > 0:
        user = users_matching[0]

        if bcrypt.checkpw(request.POST['password'].encode(), user.password.encode()):
            return redirect('/main')
        else:
            messages.error(request, "Invalid Credentials")
            
    return redirect('/')

def main(request):
    if 'user_id' not in request.session:
        messages.error(request, "GTFO!")
        return redirect('/')
    return render( request, 'registration/success.html')

def logout_user(request):
    request.session.clear()
    return redirect('/')