from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Cliente, TipoCliente

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['customer_name', 'customer_surname', 'customer_dni', 'dob', 'branch', 'user', 'tipo_cliente']

class TipoClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoCliente
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ClienteIsStaffSerializer(serializers.ModelSerializer):
    is_staff = serializers.SerializerMethodField()

    class Meta: 
        model = Cliente
        fields = '__all__'
    
    def get_is_staff(self, obj):
        user_id = self.context.get('request').user.id
        user_data = User.objects.get(id=user_id)
        serializer = UserSerializer(user_data)
        return serializer.data['is_staff']
    
class CombinedClienteIsStaffSerializer(serializers.Serializer):

    client_data = serializers.SerializerMethodField()
    is_staff_data = serializers.SerializerMethodField()

    def get_client_data(self, obj):
        user_id = self.context.get('request').user.id
        client_data = Cliente.objects.get(user_id=user_id)
        serializer = ClienteSerializer(client_data)
        return serializer.data
    
    def get_is_staff_data(self, obj):
        user_id = self.context.get('request').user.id
        user_instance = User.objects.get(id=user_id)
        is_staff = user_instance.is_staff

        # Aquí, puedes devolver solo el campo is_staff directamente si no necesitas más datos
        return {'is_staff': is_staff}