from rest_framework import serializers
from .models import Cuenta, TipoCuenta
from Clientes.models import Cliente
from django.contrib.auth.models import User

class TipoCuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoCuenta
        fields = '__all__'

class CuentaSerializer(serializers.ModelSerializer):
    tipo_cuenta_nombre = serializers.SerializerMethodField()
    class Meta:
        model = Cuenta
        fields = '__all__'

    def get_tipo_cuenta_nombre(self, obj):
        nombre_cuenta = TipoCuenta.objects.filter(tipo_cuenta_id=obj.tipo_cuenta_id)
        print(nombre_cuenta[0])
        serializer = TipoCuentaSerializer(nombre_cuenta[0])
        return serializer.data
    
class CombinedCuentaTipoCuentaSerializer(serializers.Serializer):
    cuenta_data = serializers.SerializerMethodField()
    tipo_cuenta_data = serializers.SerializerMethodField()

    def get_cuenta_data(self, obj):
        user_id = self.context.get('request').user.id
        client = Cliente.objects.filter(user_id=user_id)

        client_id = client[0].customer_id

        cuentas = Cuenta.objects.filter(client_id=client_id)

        serializer = CuentaSerializer(cuentas, many=True, context={'request': self.context['request']})
        return serializer.data
    
    def get_tipo_cuenta_data(self, obj):
        user_id = self.context.get('request').user.id
        client = Cliente.objects.filter(user_id=user_id)

        if not client:
            return []

        client_id = client[0].customer_id
        tipos_cuenta = TipoCuenta.objects.filter(cuenta=client_id)

        tipo_cuenta_serializer = TipoCuentaSerializer(tipos_cuenta, many=True, context={'request': self.context['request']})
        return tipo_cuenta_serializer.data


class CrearCuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = ['client', 'tipo_cuenta']

class CrearUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password', 'is_staff']

class CheckUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']