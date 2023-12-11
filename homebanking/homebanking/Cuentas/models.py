from django.db import models
from Clientes.models import Cliente
from .utils import get_iban

# Create your models here.

class Cuenta(models.Model):
    account_id = models.AutoField(primary_key=True)
    balance = models.IntegerField(default=0)
    iban = models.TextField(default=get_iban)
    client = models.ForeignKey(Cliente, models.DO_NOTHING)
    tipo_cuenta = models.ForeignKey('TipoCuenta', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'cuenta'


class TipoCuenta(models.Model):
    tipo_cuenta_id = models.AutoField(primary_key=True, blank=True)
    tipo_cuenta_nombre = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'tipo_cuenta'

