from rest_framework import viewsets, response, status, permissions
from .serializers import *

class SucursalesViewSet(viewsets.ModelViewSet):

    queryset = Sucursal.objects.all()
    serializer_class = SucursalSerializer
    permission_classes = [permissions.AllowAny]


