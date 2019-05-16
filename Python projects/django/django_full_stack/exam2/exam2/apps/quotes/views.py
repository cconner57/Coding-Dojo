from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages
import re
import bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-}+\.[a-zA-Z]+$')

#REGISTER/LOGIN
def index(request):
    return render(request, 'quotes/index.html')

def register(request):
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
        return redirect('/quotes') 
    return redirect('/')

def login(request):
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
            return redirect('/quotes')
        else:
            messages.error(request, "Invalid Credentials") 
    return redirect('/')

def logout_user(request):
    request.session.clear()
    return redirect('/')

#DASHBOARD
def all_quotes(request):
    if 'user_id' not in request.session:
        messages.error(request, "Wrong ID!")
        return redirect('/')
    context = {
        "user" : User.objects.get(id = request.session['user_id']),
        "all_quotes" : Quote.objects.all()
    }
    return render(request, 'quotes/all_quotes.html', context)

def add_quote(request):
    error = False
    if len(request.POST['author']) < 3:
        messages.error(request, "An Author must consist of at least 3 characters")
        error = True
    if len(request.POST['quote']) < 10:
        messages.error(request, "Must enter more than 10 characters")
        error = True
    if error:
        return redirect('/quotes')
    else:
        u = User.objects.get(id = request.session['user_id'])
        Quote.objects.create(author = request.POST['author'], quote = request.POST['quote'], quoted = u)
        return redirect('/quotes')
    
#VIEW SPECIFIC QUOTES
def user_quotes(request, user_id):
    if 'user_id' not in request.session:
        messages.error(request, "Wrong ID!")
        return redirect('/')
    context = {
        "user" : User.objects.get(id = user_id),
        "all_quotes" : Quote.objects.all(),
        "user_quotes" : Quote.objects.filter(quoted = user_id),
    }
    return render(request, 'quotes/user_quotes.html', context)

#ACCOUNT
def account(request, user_id):
    if 'user_id' not in request.session:
        messages.error(request, "Wrong ID!")
        return redirect('/')
    context = {
        "user" : User.objects.get(id = request.session['user_id']),
    }
    return render(request, 'quotes/my_account.html', context)

def update_account(request, user_id):
    error = False
    if len(request.POST['first_name']) < 1:
        messages.error(request, "Must enter first name")
        error = True
    if len(request.POST['last_name']) < 1:
        messages.error(request, "Must enter last name")
        error = True
    if len(request.POST['email']) < 1:
        messages.error(request, "Must enter email")
        error = True
    users_matching = User.objects.exclude(id = request.session['user_id']).filter(email__contains = request.POST['email'])
    if len(users_matching) > 0:
        messages.error(request, "Email is taken")
        error = True
    if error:
        return redirect('/myaccount/'+user_id)
    else:
        updated_user = User.objects.get(id = user_id)
        updated_user.first_name = request.POST['first_name']
        updated_user.last_name = request.POST['last_name']
        updated_user.email = request.POST['email']
        updated_user.save()
        return redirect('/quotes')

#DELETE QUOTE
def destroy(request, quote_id):
    delete_quote = Quote.objects.get(id = quote_id)
    delete_quote.delete()
    return redirect('/quotes')