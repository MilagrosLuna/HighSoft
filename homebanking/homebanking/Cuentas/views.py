from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.models import User
from django.urls import reverse
from Cuentas.models import Cuenta, TipoCuenta
from Cuentas.utils import get_iban, get_tipo_cuenta
from common.utils import format_number, get_branch_id

# Imports for ViewSets

from rest_framework import viewsets, permissions, response, status
from .serializers import CuentaSerializer, CrearCuentaSerializer, CrearUserSerializer
from rest_framework.authentication import BasicAuthentication

# Create your views here.

# contra 684WY2mHfICk1BXLHerh3

class CuentaViewset(viewsets.ModelViewSet):
    
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer
    permission_classes = [permissions.IsAuthenticated]

class CrearCuentaViewSet(viewsets.ModelViewSet):

    queryset = Cuenta.objects.all()
    serializer_class = CrearCuentaSerializer
    permission_classes = [permissions.IsAuthenticated]

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
    
class CrearUserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = CrearUserSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request):
         # Acceder a los datos de la solicitud POST
        data = request.data

        # Crear una nueva instancia de TuModelo usando el serializador
        serializer = self.get_serializer(data  =data)
        serializer.is_valid(raise_exception = True)
        self.perform_create(serializer)

        # Devolver una respuesta indicando que el objeto se creó con éxito
        headers = self.get_success_headers(serializer.data)
        return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)