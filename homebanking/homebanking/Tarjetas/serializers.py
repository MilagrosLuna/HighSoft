from rest_framework import serializers
from .models import Tarjeta, MarcaTarjeta

class TarjetaSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Tarjeta
        fields = '__all__'

class MarcaTarjetaSerializer(serializers.ModelSerializer):
    class Meta: 
        model = MarcaTarjeta
        fields = '__all__'