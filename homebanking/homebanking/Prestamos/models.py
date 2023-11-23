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

    class Meta:
        managed = False
        db_table = 'prestamo'