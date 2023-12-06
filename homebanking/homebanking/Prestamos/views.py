from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from Clientes.models import Cliente, TipoCliente
from Cuentas.models import Cuenta
from .models import Prestamo, SolicitudPrestamo
from common.utils import format_number

# Imports for viewsets

from rest_framework import viewsets, permissions, response, status
from .serializers import PrestamoSerializer, SolicitudPrestamoSerializer

# Create your views here.

class PrestamoPreaprobadosViewset(viewsets.ModelViewSet):
    serializer_class = PrestamoSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Prestamo.objects.all()

    def create(self, request):

        user_id = request.user.id
        client = Cliente.objects.filter(user_id=user_id)
        client_id = client[0].customer_id

        client_data = request.data
        client_data['customer_id'] = client_id

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

        queryset = Prestamo.objects.filter(customer_id=client_id)

        serializer = self.get_serializer(queryset, many=True)

        return response.Response(serializer.data, status=status.HTTP_200_OK)
    
class PrestamosSucursalViewSet(viewsets.ModelViewSet):

    queryset = Prestamo.objects.all()
    serializer_class = SolicitudPrestamoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):

        branch_id = request.query_params['branch-id']

        queryset = Prestamo.objects.filter(branch_id=branch_id)
        serializer = self.get_serializer(queryset, many=True)

        return response.Response(serializer.data)

class SolicitudPrestamoViewSet(viewsets.ModelViewSet):

    queryset = SolicitudPrestamo.objects.all()
    serializer_class = SolicitudPrestamoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request):

        user_id = request.user.id
        client = Cliente.objects.filter(user_id=user_id)
        client_id = client[0].customer_id

        client_data = request.data
        client_data['client'] = client_id
        print(client_data)

        serializer = self.get_serializer(data=client_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def delete(self, request):

        application_id = request.query_params['application_id']

        if request.user.is_staff:
        
            if application_id is None or application_id is str():
                return response.Response({"error": "ID de solicitud no proporcionado"}, status=status.HTTP_400_BAD_REQUEST)
            
            queryset = SolicitudPrestamo.objects.filter(application_id=application_id)

            if not queryset.exists():
                return response.Response({"error": "No se encontraron solicitudes con ese ID"}, status=status.HTTP_400_BAD_REQUEST)

            queryset.delete()

            return response.Response({'message':'Se borro correctamente la solicitud de préstamo.'}, status=status.HTTP_204_NO_CONTENT, )
        
        return response.Response({"error": "Esta acción solo la pueden realizar los empleados del banco."}, status=status.HTTP_400_BAD_REQUEST)