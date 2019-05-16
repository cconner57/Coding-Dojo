from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^shows/new$', views.index),
    url(r'^process$', views.process),
    url(r'^shows$', views.all_shows),
    url(r'^shows/(?P<show_id>\d+)$', views.shows),
    url(r'^shows/(?P<show_id>\d+)/edit$', views.update),
    url(r'^shows/(?P<show_id>\d+)/update$', views.process_update),
    url(r'^shows/(?P<show_id>\d+)/destroy$', views.delete),

]