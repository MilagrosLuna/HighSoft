from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Cliente, TipoCliente

# Imports for viewsets

from rest_framework import viewsets, response, permissions, status
from .models import Cliente, TipoCliente
from .serializers import ClienteSerializer

# Create your views here.

class ClienteViewSet(viewsets.ModelViewSet):

    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):

        user_id = request.user.id
        queryset = Cliente.objects.all()
 
        queryset = Cliente.objects.filter(user_id = user_id)
        serializer = ClienteSerializer(queryset, many=True)

        return response.Response(serializer.data, status.HTTP_200_OK)