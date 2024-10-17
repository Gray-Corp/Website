from django.urls import path
from .views import send_cv

urlpatterns = [
    path('send-cv/', send_cv, name='send_cv'),
]