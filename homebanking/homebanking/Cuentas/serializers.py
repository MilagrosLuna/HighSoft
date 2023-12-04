from rest_framework import serializers
from .models import Cuenta, TipoCuenta
from django.contrib.auth.models import User

class CuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = '__all__'

class CrearCuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = ['client', 'tipo_cuenta']

class CrearUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password']
