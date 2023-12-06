from django.urls import path, include
from .views import SucursalesViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('branches', SucursalesViewSet)

urlpatterns = [
    path('', include(router.urls))
]