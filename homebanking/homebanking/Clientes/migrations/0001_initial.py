# Generated by Django 4.2.7 on 2023-11-18 00:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('customer_id', models.AutoField(primary_key=True, serialize=False)),
                ('customer_name', models.TextField()),
                ('customer_surname', models.TextField()),
                ('customer_dni', models.TextField(db_column='customer_DNI')),
                ('dob', models.TextField(blank=True, null=True)),
                ('branch_id', models.IntegerField()),
            ],
            options={
                'db_table': 'cliente',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DireccionCliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'direccion_cliente',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TipoCliente',
            fields=[
                ('tipo_id', models.AutoField(primary_key=True, serialize=False)),
                ('tipo_cliente_nombre', models.CharField(max_length=15)),
                ('tipo_limite_cajas_ahorro', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_cajas_ahorro_pesos', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_cajas_ahorro_dolares', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_cajas_ahorro_pesos_extra', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_cajas_ahorro_dolares_extra', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_cuenta_corriente', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_cuenta_inversion', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_brand_debito', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_brand_credito', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_extesiones', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_credito', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_cuota_credito', models.IntegerField(blank=True, null=True)),
                ('master_disp', models.TextField(blank=True, null=True)),
                ('visa_disp', models.TextField(blank=True, null=True)),
                ('amex_disp', models.TextField(blank=True, null=True)),
                ('tipo_limite_retiro_mensual', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_retiro_diario', models.IntegerField(blank=True, null=True)),
                ('tipo_comision_saliente', models.IntegerField(blank=True, null=True)),
                ('tipo_comision_entrante', models.IntegerField(blank=True, null=True)),
                ('tipo_limite_chequeras', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tipo_cliente',
                'managed': False,
            },
        ),
    ]
