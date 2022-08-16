from . import views
from django.urls import path
# Create your tests here.
urlpatterns=[
    path('',views.index),
    path('login/log_out',views.log_out),   
    path('login/lr',views.login),
    path('login/register',views.register),
    path('models',views.models),
    path('children',views.children),
    path('events',views.events),
    path('family',views.family),
]