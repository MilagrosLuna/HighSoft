from django.urls import path, include
from .views import SolicitarPrestamo
from rest_framework import routers

router = routers.DefaultRouter()
router.register('loan-money', SolicitarPrestamo)

urlpatterns = [
    path('', include(router.urls)),
]
