from rest_framework import serializers
from .models import DireccionEmpleado, DireccionCliente, Direcciones

class DireccionEmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DireccionEmpleado
        fields = '__all__'
    

class DireccionClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = DireccionCliente
        fields = '__all__'


class DireccionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direcciones
        fields = '__all__'