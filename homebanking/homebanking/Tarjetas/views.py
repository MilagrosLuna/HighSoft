from django.shortcuts import render
from rest_framework import viewsets, status, response, permissions
from .serializers import TarjetaSerializer,MarcaTarjetaSerializer
from .models import Tarjeta, MarcaTarjeta
from Clientes.models import Cliente
# Create your views here.

class TarjetaViewSet(viewsets.ModelViewSet):

    serializer_class = TarjetaSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Tarjeta.objects.all()

    def create(self, request):
        
        user_id = request.user.id
        client = Cliente.objects.filter(user_id=user_id)
        client_id = client[0].customer_id

        sent_data = request.data
        sent_data['client'] = client_id
        print(sent_data)

        serializer = self.get_serializer(data=sent_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class TarjetasPorCliente(viewsets.ModelViewSet):

    serializer_class = TarjetaSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Tarjeta.objects.all()

    def list(self, request):

        account_id = request.query_params['client-id']

        queryset = Tarjeta.objects.filter(client=account_id)
        serializer = self.get_serializer(queryset, many=True)

        return response.Response(serializer.data)