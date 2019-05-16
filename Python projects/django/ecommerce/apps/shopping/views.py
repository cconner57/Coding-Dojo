from django.shortcuts import render, redirect

def index(request):
    return render(request, 'shop/index.html')

def login(request):
    return render(request, 'shop/login.html')

def pricing(request):
    return render(request, 'shop/pricing.html')

def account(request):
    return render(request, 'shop/account.html')

def buy(request):
    return render(request, 'shop/buyer.html')

def sell(request):
    return render(request, 'shop/seller.html')

def contact(request):
    return render(request, 'shop/contact.html')