from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Cliente, TipoCliente

# Imports for viewsets

from rest_framework import viewsets, response, permissions, status
from .models import Cliente, TipoCliente
from .serializers import ClienteSerializer

# Create your views here.

class ClienteViewSet(viewsets.ModelViewSet):
    
    serializer_class = ClienteSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Cliente.objects.all()
    
    def list(self,request):

        user_id = self.request.user.id

        # Obtener el queryset base sin aplicar ningún filtro
        queryset = Cliente.objects.all()

        # Aplicar tu filtro personalizado en la base de datos
        user = self.request.query_params.get('user')
        if user:
            queryset = queryset.filter(user=user_id)

        return response.Response(queryset)