from django.db import models
from Cuentas.models import Cuenta

# Create your models here.

class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    loan_type = models.TextField(verbose_name='Tipo de préstamo')
    loan_date = models.DateField(auto_now_add=True)
    loan_total = models.IntegerField()
    customer_id = models.IntegerField()
    account = models.ForeignKey(Cuenta, models.DO_NOTHING)
    branch = models.ForeignKey('Empleados.Sucursal', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'prestamo'

class SolicitudPrestamo(models.Model):
    application_id = models.AutoField(primary_key=True)
    application_date = models.DateField(auto_now_add=True)
    loan_type = models.TextField(verbose_name='Tipo de préstamo')
    loan_total = models.IntegerField()
    client = models.ForeignKey('Clientes.Cliente', models.DO_NOTHING)
    account = models.ForeignKey('Cuentas.Cuenta', models.DO_NOTHING)
    aproved = models.BooleanField(default=False)
    branch = models.ForeignKey('Empleados.Sucursal', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'solicitud_prestamo'