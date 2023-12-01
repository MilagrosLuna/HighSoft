from django.urls import path, include
from .views import CuentaViewset ,CrearCuentaViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('cuentas', CuentaViewset)
router.register('crear-cuenta', CrearCuentaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
