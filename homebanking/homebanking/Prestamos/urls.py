from django.urls import path, include
from .views import PrestamoPreaprobadosViewset, PrestamosSucursalViewSet, SolicitudPrestamoViewSet
from rest_framework import routers

router = routers.DefaultRouter()

# acceso para empleados 
router.register('loan-money', PrestamoPreaprobadosViewset)
router.register('loans-per-branch', PrestamosSucursalViewSet)

# acceso a clientes para solicitar prestamos
router.register('loan-application', SolicitudPrestamoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
