from re import X
from django.urls import path
from . import views

urlpatterns = [
    path('lr', views.index),
    path('user/create', views.user_create),
    path('user/login', views.login),
    path('log_out', views.log_out),
    path('register',views.register),
]