from django.shortcuts import render, redirect, HttpResponse

def index(request):
    
    return render (request, 'random_word/index.html')

def word(request):
    pass

def reset(request):
    return redirect ('/')