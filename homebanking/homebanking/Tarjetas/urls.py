from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('cards', views.TarjetaViewSet)
router.register('cards-per-client', views.TarjetasPorCliente)

urlpatterns = [
    path('', include(router.urls))
]