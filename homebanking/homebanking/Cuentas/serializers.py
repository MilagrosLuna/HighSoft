from rest_framework import serializers
from .models import Cuenta, TipoCuenta

class CuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = '__all__'

class CrearCuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = ['client', 'tipo_cuenta']