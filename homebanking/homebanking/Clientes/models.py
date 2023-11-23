from django.db import models
from Empleados.models import Direcciones
from django.contrib.auth.models import User

# Create your models here.

class Cliente(models.Model):

    customer_id = models.IntegerField(primary_key=True)
    customer_name = models.CharField(max_length=30)
    customer_surname = models.CharField(max_length=30)
    customer_dni = models.IntegerField(db_column='customer_DNI')
    dob = models.DateField(blank=True, null=True)
    branch_id = models.IntegerField()
    user = models.ForeignKey(User, models.DO_NOTHING)
    tipo_cliente = models.ForeignKey('TipoCliente', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'cliente'


class DireccionCliente(models.Model):
    direccion = models.ForeignKey('Empleados.Direcciones', models.DO_NOTHING)
    customer = models.ForeignKey(Cliente, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'direccion_cliente'


class TipoCliente(models.Model):
    tipo_id = models.AutoField(primary_key=True, blank=True)
    tipo_cliente_nombre = models.CharField(max_length=15)
    tipo_limite_cajas_ahorro = models.IntegerField(blank=True, null=True)
    tipo_limite_cajas_ahorro_pesos = models.IntegerField(blank=True, null=True)
    tipo_limite_cajas_ahorro_dolares = models.IntegerField(blank=True, null=True)
    tipo_limite_cajas_ahorro_pesos_extra = models.IntegerField(blank=True, null=True)
    tipo_limite_cajas_ahorro_dolares_extra = models.IntegerField(blank=True, null=True)
    tipo_limite_cuenta_corriente = models.IntegerField(blank=True, null=True)
    tipo_limite_cuenta_inversion = models.IntegerField(blank=True, null=True)
    tipo_limite_brand_debito = models.IntegerField(blank=True, null=True)
    tipo_limite_brand_credito = models.IntegerField(blank=True, null=True)
    tipo_limite_extesiones = models.IntegerField(blank=True, null=True)
    tipo_limite_credito = models.IntegerField(blank=True, null=True)
    tipo_limite_cuota_credito = models.IntegerField(blank=True, null=True)
    master_disp = models.IntegerField(blank=True, null=True)
    visa_disp = models.IntegerField(blank=True, null=True)
    amex_disp = models.IntegerField(blank=True, null=True)
    tipo_limite_retiro_mensual = models.IntegerField(blank=True, null=True)
    tipo_limite_retiro_diario = models.IntegerField(blank=True, null=True)
    tipo_comision_saliente = models.IntegerField(blank=True, null=True)
    tipo_comision_entrante = models.IntegerField(blank=True, null=True)
    tipo_limite_chequeras = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tipo_cliente'