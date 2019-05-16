from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages
import re
import bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-}+\.[a-zA-Z]+$')

# REGISTER/LOGIN
def index(request):
    return render(request, 'trip/index.html')

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
        return redirect('/dashboard') 
    return redirect('/')

def login_user(request):
    error = False
    if len(request.POST['email']) < 1:
        messages.error(request, "Please enter an email")
        error = True
    if len(request.POST['password']) < 1:
        messages.error(request, "Please enter a password")
        error = True
    if error:
        return redirect('/')
    users_matching = User.objects.filter(email = request.POST['email'])
    if len(users_matching) > 0:
        user = users_matching[0]
        if bcrypt.checkpw(request.POST['password'].encode(), user.password.encode()):
            request.session['user_id'] = user.id
            return redirect('/dashboard')
        else:
            messages.error(request, "Invalid") 
    return redirect('/')

def logout_user(request):
    request.session.clear()
    return redirect('/')

# DASHBOARD
def dashboard(request):
    if 'user_id' not in request.session:
        messages.error(request, "Wrong ID!")
        return redirect('/')
    context = {
        "user" : User.objects.get(id = request.session['user_id']),
        "all_trips" : Trip.objects.all()
    }
    return render(request, 'trip/dashboard.html', context)

# NEW TRIP
def new_trip(request):
    if 'user_id' not in request.session:
        messages.error(request, "Wrong ID!")
        return redirect('/')
    context = {
        "user" : User.objects.get(id = request.session['user_id']),
    }
    return render(request, 'trip/new_trip.html', context)

def process_new(request):
    error = False
    if len(request.POST['destination']) < 3:
        messages.error(request, "A trip destination must consist of at least 3 characters")
        error = True
    if len(request.POST['start_date']) < 1:
        messages.error(request, "Must enter a start date")
        error = True
    if len(request.POST['end_date']) < 1:
        messages.error(request, "Must enter an end date")
        error = True
    if len(request.POST['plan']) < 1:
        messages.error(request, "A plan must be provided!")
        error = True
    if error:
        return redirect('/trips/new')
    else:
        u = User.objects.get(id = request.session['user_id'])
        Trip.objects.create(destination = request.POST['destination'], start_date = request.POST['start_date'], end_date = request.POST['end_date'], plan = request.POST['plan'], planner = u)
        return redirect('/dashboard')

# VIEW TRIP
def view_trip(request, trip_id):
    if 'user_id' not in request.session:
        messages.error(request, "Wrong ID!")
        return redirect('/')
    context = {
        "user" : User.objects.get(id = request.session['user_id']),
        "trip" : Trip.objects.get(id = trip_id)
    }
    return render(request, 'trip/view_trip.html', context)

# UPDATE TRIP
def edit(request, trip_id):
    if 'user_id' not in request.session:
        messages.error(request, "Wrong ID!")
        return redirect('/')
    context = {
        "user" : User.objects.get(id = request.session['user_id']),
        "trip" : Trip.objects.get(id = trip_id)
    }
    return render(request, 'trip/edit.html', context)

def process_edit(request, trip_id):
    error = False
    if len(request.POST['destination']) < 3:
        messages.error(request, "A trip destination must consist of at least 3 characters")
        error = True
    if len(request.POST['start_date']) < 1:
        messages.error(request, "Must enter a date")
        error = True
    if len(request.POST['end_date']) < 1:
        messages.error(request, "Must enter a date")
        error = True
    if len(request.POST['plan']) < 1:
        messages.error(request, "A plan must be provided!")
        error = True
    if error:
        return redirect('/trips/edit/'+trip_id)
    else:
        updated_trip = Trip.objects.get(id = trip_id)
        updated_trip.destination = request.POST['destination']
        updated_trip.start_date = request.POST['start_date']
        updated_trip.end_date = request.POST['end_date']
        updated_trip.plan = request.POST['plan']
        updated_trip.save()
        return redirect('/dashboard')

# DELETE TRIP
def destroy(request, trip_id):
    delete_trip = Trip.objects.get(id = trip_id)
    delete_trip.delete()
    return redirect('/dashboard')