from django.urls import path, include
from .views import PrestamoPreaprobadosViewset, PrestamosSucursalViewSet, SolicitudPrestamoViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('loan-money', PrestamoPreaprobadosViewset)
router.register('loans-per-branch', PrestamosSucursalViewSet)
router.register('loan-application', SolicitudPrestamoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
