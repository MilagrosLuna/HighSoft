from django.db import models, transaction
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.


class Transferencia(models.Model):
    transferencia_id = models.AutoField(primary_key=True)
    cuenta_origen = models.ForeignKey(
        'Cuentas.Cuenta', models.DO_NOTHING, related_name='origen_transferencia')
    cuenta_destino = models.ForeignKey(
        'Cuentas.Cuenta', models.DO_NOTHING, related_name='destino_transferencia')
    monto = models.IntegerField()
    fecha_transferido = models.DateField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'transferencias'


def realizar_transferencia(sender, instance, created, **kwargs):
    if created:
        with transaction.atomic():

            if instance.cuenta_origen.balance >= instance.monto:

                instance.cuenta_origen.balance -= instance.monto
                instance.cuenta_origen.save()

                instance.cuenta_destino.balance += instance.monto
                instance.cuenta_destino.save()

                instance.save()
            else:

                raise ValueError('Saldo insuficiente en la cuenta de origen')


post_save.connect(realizar_transferencia, sender=Transferencia)


class Servicio(models.Model):
    servicio_id = models.AutoField(primary_key=True)
    cuenta_origen = models.ForeignKey('Cuentas.Cuenta', models.DO_NOTHING)
    monto = models.IntegerField()
    fecha_pagado = models.DateField(auto_now_add=True)
    pagado = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'pagar_servicios'


def realizar_pago(sender, instance, created, **kwargs):
    if created:
        with transaction.atomic():

            if instance.cuenta_origen.balance >= instance.monto:

                instance.cuenta_origen.balance -= instance.monto
                instance.pagado = True
                instance.cuenta_origen.save()

                instance.save()
            else:
                raise ValueError('Saldo en cuenta insuficiente')


post_save.connect(realizar_pago, sender=Servicio)
