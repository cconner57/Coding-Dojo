from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^login$', views.login),
    url(r'^pricing$', views.pricing),
    url(r'^account$', views.account),
    url(r'^buy$', views.buy),
    url(r'^sell$', views.sell),
    url(r'^contact$', views.contact),
]