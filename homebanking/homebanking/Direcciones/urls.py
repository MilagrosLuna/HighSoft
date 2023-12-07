from django.urls import path, include 
from rest_framework import routers
from .views import DireccionesViewSet

router = routers.DefaultRouter()
router.register('addresses', DireccionesViewSet, basename='addresses')

urlpatterns = [
    path('', include(router.urls)),
]