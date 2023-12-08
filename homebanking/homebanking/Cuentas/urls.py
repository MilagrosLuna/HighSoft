from django.urls import path, include
from .views import CuentaViewset, CrearCuentaViewSet, CrearUserViewSet, TipoCuentaViewSet, LoginViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('accounts', CuentaViewset)
router.register('create-account', CrearCuentaViewSet)
router.register('create-user', CrearUserViewSet)
router.register('account-types', TipoCuentaViewSet)
router.register('login', LoginViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
