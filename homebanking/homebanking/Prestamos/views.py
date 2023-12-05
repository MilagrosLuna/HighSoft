from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from Clientes.models import Cliente, TipoCliente
from Cuentas.models import Cuenta
from .models import Prestamo
from common.utils import format_number

# Imports for viewsets

from rest_framework import viewsets, permissions, response, status
from .serializers import PrestamoSerializer

# Create your views here.

class SolicitarPrestamo(viewsets.ModelViewSet):
    serializer_class = PrestamoSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Prestamo.objects.all()

    def create(self, request):

        user_id = request.user.id
        client = Cliente.objects.filter(user_id=user_id)
        client_id = client[0].customer_id

        client_data = request.data
        client_data['customer_id'] = client_id
        print(client_data)

        serializer = self.get_serializer(data=client_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    def list(self, request):

        user_id = request.user.id
        client = Cliente.objects.filter(user_id=user_id)
        client_id = client[0].customer_id
        
        client_data = request.data.get('user', {})
        print(client_data)

        queryset = Prestamo.objects.filter(customer_id=client_id)

        serializer = self.get_serializer(queryset, many=True)

        return response.Response(serializer.data, status=status.HTTP_200_OK)

    
