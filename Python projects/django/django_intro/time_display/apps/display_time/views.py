from django.shortcuts import render, redirect
from time import gmtime, strftime

def index(request):
    context = {
        "time": strftime("%m-%d-%Y %H:%M %p", gmtime())
    }
    return render(request, 'display_time/index.html', context)

def display(request):
    return redirect ('/')