from django.db import models
from Cuentas.models import Cuenta

# Create your models here.

class Tarjeta(models.Model):
    card_id = models.AutoField(primary_key=True, blank=True, null=False)
    card_number = models.IntegerField(unique=True)
    account = models.ForeignKey(Cuenta, models.DO_NOTHING, blank=True, null=True, to_field='account_id')
    cvv = models.IntegerField(blank=True, null=True)
    emision_date = models.DateField(blank=True, null=True)
    expiration_date = models.DateField(blank=True, null=True)
    card_brand = models.ForeignKey('MarcaTarjeta', models.DO_NOTHING, blank=True, null=True)
    active = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tarjeta'

class MarcaTarjeta(models.Model):
    card_brand_id = models.IntegerField(primary_key=True)
    card_brand = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'marca_tarjeta'