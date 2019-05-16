from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^authors$', views.authors),
    url(r'^add_book$', views.add_book),
    url(r'^add_author$', views.add_author),
    url(r'^books/(?P<book_id>\d+$)', views.view_book),
    url(r'^authors/(?P<author_id>\d+$)', views.view_author),
]