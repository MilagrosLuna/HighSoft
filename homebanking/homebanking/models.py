# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    first_name = models.CharField(max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Cliente(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_name = models.TextField()
    customer_surname = models.TextField()  # This field type is a guess.
    customer_dni = models.TextField(db_column='customer_DNI')  # Field name made lowercase.
    dob = models.TextField(blank=True, null=True)
    branch_id = models.IntegerField()
    user_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cliente'


class Cuenta(models.Model):
    account_id = models.AutoField(primary_key=True)
    balance = models.IntegerField()
    iban = models.TextField()
    client_id = models.IntegerField(blank=True, null=True)
    tipo_cuenta_id = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'cuenta'


class DireccionCliente(models.Model):
    direccion = models.ForeignKey('Direcciones', models.DO_NOTHING)
    customer = models.ForeignKey(Cliente, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'direccion_cliente'


class DireccionEmpleado(models.Model):
    direccion = models.ForeignKey('Direcciones', models.DO_NOTHING)
    employee = models.ForeignKey('Empleado', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'direccion_empleado'


class Direcciones(models.Model):
    direccion_id = models.AutoField(primary_key=True, blank=True, null=True)
    direccion_calle = models.CharField()
    direccion_provincia = models.CharField()
    direccion_pais = models.CharField()
    direccion_codigo_postal = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'direcciones'


class DjangoAdminLog(models.Model):
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    action_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


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


class MarcaTarjeta(models.Model):
    card_brand_id = models.AutoField(primary_key=True, blank=True, null=True)
    card_brand = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'marca_tarjeta'


class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    loan_type = models.TextField()
    loan_date = models.TextField()
    loan_total = models.IntegerField()
    customer_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'prestamo'


class Sucursal(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_number = models.BinaryField()
    branch_name = models.TextField()
    branch_address_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sucursal'


class Tarjeta(models.Model):
    card_id = models.AutoField(primary_key=True, blank=True, null=True)
    card_number = models.IntegerField(unique=True)
    account = models.ForeignKey(Cuenta, models.DO_NOTHING, blank=True, null=True)
    cvv = models.IntegerField(blank=True, null=True)
    emision_date = models.DateField(blank=True, null=True)
    expiration_date = models.DateField(blank=True, null=True)
    card_brand = models.ForeignKey(MarcaTarjeta, models.DO_NOTHING, blank=True, null=True)
    active = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tarjeta'


class TipoCliente(models.Model):
    tipo_id = models.AutoField(primary_key=True, blank=True, null=True)
    tipo_cliente_nombre = models.CharField()
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
    master_disp = models.TextField(blank=True, null=True)  # This field type is a guess.
    visa_disp = models.TextField(blank=True, null=True)  # This field type is a guess.
    amex_disp = models.TextField(blank=True, null=True)  # This field type is a guess.
    tipo_limite_retiro_mensual = models.IntegerField(blank=True, null=True)
    tipo_limite_retiro_diario = models.IntegerField(blank=True, null=True)
    tipo_comision_saliente = models.IntegerField(blank=True, null=True)
    tipo_comision_entrante = models.IntegerField(blank=True, null=True)
    tipo_limite_chequeras = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tipo_cliente'


class TipoCuenta(models.Model):
    tipo_cuenta_id = models.AutoField(primary_key=True, blank=True, null=True)
    tipo_cuenta_nombre = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'tipo_cuenta'
