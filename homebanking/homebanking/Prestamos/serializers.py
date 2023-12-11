from rest_framework import serializers
from .models import Prestamo, SolicitudPrestamo

class PrestamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = '__all__'

class SolicitudPrestamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolicitudPrestamo
        fields = '__all__'