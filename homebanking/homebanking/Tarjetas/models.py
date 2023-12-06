from django.db import models
from common.utils import get_expire_date, get_emision_date, get_cvv_number, get_card_number

# Create your models here.

class Tarjeta(models.Model):
    card_id = models.AutoField(primary_key=True, blank=True, null=False)
    card_number = models.IntegerField(default=get_card_number, unique=True)
    account = models.ForeignKey('Cuentas.Cuenta', models.DO_NOTHING)
    client = models.ForeignKey('Clientes.Cliente', models.DO_NOTHING)
    cvv = models.IntegerField(default=get_cvv_number)
    emision_date = models.CharField(default=get_emision_date, max_length=10)
    expiration_date = models.CharField(default=get_expire_date, max_length=10)
    card_brand = models.ForeignKey('MarcaTarjeta', models.DO_NOTHING)
    active = models.BooleanField(default=True, blank=False, null=False)

    class Meta:
        managed = False
        db_table = 'tarjeta'

class MarcaTarjeta(models.Model):
    card_brand_id = models.IntegerField(primary_key=True)
    card_brand = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'marca_tarjeta'