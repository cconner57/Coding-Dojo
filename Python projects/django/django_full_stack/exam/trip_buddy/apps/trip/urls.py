from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process_register$', views.register_user),
    url(r'^process_login$', views.login_user),
    url(r'^logout$', views.logout_user),
    url(r'^dashboard$', views.dashboard),
    url(r'^trips/new$', views.new_trip),
    url(r'^trips/process_new$', views.process_new),
    url(r'^trips/(?P<trip_id>\d+)$', views.view_trip),
    url(r'^trips/edit/(?P<trip_id>\d+)$', views.edit),
    url(r'^trips/process_edit/(?P<trip_id>\d+)$', views.process_edit),
    url(r'^trips/(?P<trip_id>\d+)/destroy$', views.destroy),
]