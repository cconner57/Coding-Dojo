from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages

# CREATE
def index(request):
    return render(request, 'shows/index.html')

def process(request):
    error = False

    if len(request.POST['title']) < 3:
        messages.error(request, "Title must be at least 2 characters long")
        error = True
    if len(request.POST['network']) < 4:
        messages.error(request, "Network must be at least 3 characters long")
        error = True
    if len(request.POST['description']) < 11:
        messages.error(request, "Description must be at least 10 characters long")
        error = True
    if len(request.POST['release_date']) < 1:
        messages.error(request, "Must enter a date")
        error = True
    if error:
        return redirect('/')
    else:
        Show.objects.create(title = request.POST['title'], network = request.POST['network'], release_date = request.POST['release_date'], description = request.POST['description'])
        return redirect('/shows')

# READ
def shows(request, show_id):
    context = {
        "show" : Show.objects.get(id = show_id)
    }
    return render(request, 'shows/view_show.html', context)

def all_shows(request):
    context = {
        "all_shows" : Show.objects.all()
    }
    return render(request, 'shows/all_shows.html', context)

#UPDATE
def update(request, show_id):
    context = {
        "show" : Show.objects.get(id = show_id)
    }
    return render(request, 'shows/updated.html', context)

def process_update(request, show_id):
    error = False

    if len(request.POST['title']) < 2:
        messages.error(request, "Title must be at least 2 characters long")
        error = True
    if len(request.POST['network']) < 3:
        messages.error(request, "Network must be at least 3 characters long")
        error = True
    if len(request.POST['description']) < 10:
        messages.error(request, "Description must be at least 10 characters long")
        error = True
    if error:
        return redirect('/shows/'+show_id+'/edit')
    else:
        updated_show = Show.objects.get(id = show_id)

        updated_show.title = request.POST['title']
        updated_show.network = request.POST['network']
        updated_show.release_date = request.POST['release_date']
        updated_show.description = request.POST['description']
        updated_show.save()
        return redirect('/shows')

#DESTROY
def delete(request, show_id):
    delete_show = Show.objects.get(id = show_id)
    delete_show.delete()
    return redirect('/shows')