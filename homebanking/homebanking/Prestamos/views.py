from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from Clientes.models import Cliente, TipoCliente
from Cuentas.models import Cuenta
from .models import Prestamo
from .forms import NewLoanRequest
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
         # Acceder a los datos de la solicitud POST
        data = request.data

        # Crear una nueva instancia de TuModelo usando el serializador
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # Devolver una respuesta indicando que el objeto se creó con éxito
        headers = self.get_success_headers(serializer.data)
        return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)