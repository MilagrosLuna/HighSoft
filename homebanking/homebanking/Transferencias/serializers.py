from rest_framework import serializers
from .models import Transferencia, Servicio

class TransferenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Transferencia
        fields = '__all__'

class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Servicio
        exclude = ['pagado']