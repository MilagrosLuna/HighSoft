from .models import Empleado, Sucursal
from Direcciones.models import Direcciones, DireccionEmpleado
from rest_framework import serializers

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = '__all__'

class DireccionEmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DireccionEmpleado
        fields = '__all__'

class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal 
        fields = '__all__'

class DireccionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direcciones
        fields = '__all__'