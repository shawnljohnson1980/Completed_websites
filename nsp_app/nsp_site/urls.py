from . import views
from django.urls import path
# Create your tests here.
urlpatterns=[
    path('',views.index),
    path('log_out',views.log_out),   
    path('lr',views.login),
    path('register',views.register),
]