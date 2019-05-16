from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^login$', views.login),
    url(r'^register$', views.register),
    url(r'^quotes$', views.all_quotes),
    url(r'^logout$', views.logout_user),
    url(r'^add_quote$', views.add_quote),
    url(r'^quotes/(?P<quote_id>\d+)/destroy$', views.destroy),
    url(r'^user/(?P<user_id>\d+)$', views.user_quotes),
    url(r'^myaccount/(?P<user_id>\d+)$', views.account),
    url(r'^myaccount/(?P<user_id>\d+)/update$', views.update_account),
]