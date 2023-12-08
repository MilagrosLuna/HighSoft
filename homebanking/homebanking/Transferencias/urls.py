from rest_framework import routers
from django.urls import path, include
from .views import TransferenciaViewSet, ServicioViewSet

router = routers.DefaultRouter()
router.register('transfer-money', TransferenciaViewSet)
router.register('pay-service', ServicioViewSet)

urlpatterns = [
    path('', include(router.urls))
]