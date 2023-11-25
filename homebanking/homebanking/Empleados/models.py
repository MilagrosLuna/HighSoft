from django.db import models

# Create your models here.


class DireccionEmpleado(models.Model):
    direccion = models.ForeignKey('Direcciones', models.DO_NOTHING)
    employee = models.ForeignKey('Empleado', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'direccion_empleado'


class Direcciones(models.Model):
    direccion_id = models.AutoField(primary_key=True, blank=True, null=False)
    direccion_calle = models.CharField(max_length=50)
    direccion_provincia = models.CharField(max_length=50)
    direccion_pais = models.CharField(max_length=50)
    direccion_codigo_postal = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'direcciones'


class Empleado(models.Model):
    employee_id = models.AutoField(primary_key=True)
    employee_name = models.TextField()
    employee_surname = models.TextField()
    employee_hire_date = models.TextField()
    employee_dni = models.TextField(db_column='employee_DNI')  # Field name made lowercase.
    branch_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'empleado'


class Sucursal(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_number = models.BinaryField()
    branch_name = models.TextField()
    branch_address_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sucursal'
