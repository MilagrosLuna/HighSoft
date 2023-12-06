from django.urls import path, include
from .views import SolicitarPrestamoViewset, PrestamosSucursalViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('loan-money', SolicitarPrestamoViewset)
router.register('loans-per-branch', PrestamosSucursalViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
