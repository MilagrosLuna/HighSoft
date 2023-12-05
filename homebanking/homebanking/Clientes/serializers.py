from rest_framework import serializers
from .models import Cliente, TipoCliente

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['customer_name', 'customer_surname', 'customer_dni', 'dob', 'branch', 'user', 'tipo_cliente']

