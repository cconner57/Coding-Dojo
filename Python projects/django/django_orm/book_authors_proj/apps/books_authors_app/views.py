from django.shortcuts import render, redirect
from .models import *

def index(request):
    context = {
        "all_books" : Book.objects.all()
    }
    return render(request, "books_authors_app/index.html", context)

def authors(request):
    context = {
        "all_authors" : Author.objects.all()
    }
    return render(request, "books_authors_app/authors.html", context)

def add_book(request):
    Book.objects.create(title = request.POST['title'], description = request.POST['description'])
    return redirect('/')

def add_author(request):
    Author.objects.create(first_name = request.POST['first_name'], last_name = request.POST['last_name'], notes = request.POST['notes'])
    return redirect('/authors')

def view_book(request, book_id):
    context = {
        "book" : Book.objects.get(id = book_id)
    }
    return render(request, "books_authors_app/book.html", context)

def view_author(request, author_id):
    context = {
        "author" : Author.objects.get(id = author_id),
        "all_books" : Book.objects.all()
    }
    return render(request, "books_authors_app/author.html", context)

def add_book_to_author(request, author_id):
    author = Author.objects.get(id = author_id)
    book = Book.objects.get(id = request.POST['book_id'])
    author.books.add(book)
    return redirect('/authors/' + str(author_id))