"""
jstools URL Configuration
"""
from django.conf.urls import url

from jstools import views


urlpatterns = [
    url(r'^$', views.index),
]
