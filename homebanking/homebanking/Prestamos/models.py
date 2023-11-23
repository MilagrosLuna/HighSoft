from django.db import models
from Cuentas.models import Cuenta
from djtriggers.models import Trigger

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

class LOAN_TRIGGER(Trigger):
    type = 'post_save'

    def _process(self, instance):
        if instance._meta.model_name == 'Prestamo':
            cuenta = Cuenta.objects.get(account_id=instance.account_id)
            cuenta.balance += instance.loan_total
            cuenta.save()