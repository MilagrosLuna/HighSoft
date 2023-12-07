from django.db import models

# Create your models here.

class DireccionEmpleado(models.Model):
    direccion = models.ForeignKey('Direcciones', models.DO_NOTHING)
    employee = models.ForeignKey('Empleados.Empleado', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'direccion_empleado'


class DireccionCliente(models.Model):
    direccion = models.ForeignKey('Direcciones', models.DO_NOTHING)
    customer = models.ForeignKey('Clientes.Cliente', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'direccion_cliente'


class Direcciones(models.Model):
    direccion_id = models.AutoField(primary_key=True, blank=True, null=False)
    direccion_calle = models.CharField(max_length=50)
    direccion_provincia = models.CharField(max_length=50)
    direccion_pais = models.CharField(max_length=50)
    direccion_codigo_postal = models.TextField()

    class Meta:
        managed = False
        db_table = 'direcciones'