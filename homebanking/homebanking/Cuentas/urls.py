from django.urls import path, include
from .views import CuentaViewset, CrearCuentaViewSet, CrearUserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('accounts', CuentaViewset)
router.register('create-account', CrearCuentaViewSet)
router.register('create-user', CrearUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
