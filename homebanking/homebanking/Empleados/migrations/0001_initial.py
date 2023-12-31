# Generated by Django 4.2.7 on 2023-11-18 00:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DireccionEmpleado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'direccion_empleado',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Direcciones',
            fields=[
                ('direccion_id', models.AutoField(primary_key=True, serialize=False)),
                ('direccion_calle', models.CharField(max_length=50)),
                ('direccion_provincia', models.CharField(max_length=50)),
                ('direccion_pais', models.CharField(max_length=50)),
                ('direccion_codigo_postal', models.IntegerField()),
            ],
            options={
                'db_table': 'direcciones',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Empleado',
            fields=[
                ('employee_id', models.AutoField(primary_key=True, serialize=False)),
                ('employee_name', models.TextField()),
                ('employee_surname', models.TextField()),
                ('employee_hire_date', models.TextField()),
                ('employee_dni', models.TextField(db_column='employee_DNI')),
                ('branch_id', models.IntegerField()),
            ],
            options={
                'db_table': 'empleado',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Sucursal',
            fields=[
                ('branch_id', models.AutoField(primary_key=True, serialize=False)),
                ('branch_number', models.BinaryField()),
                ('branch_name', models.TextField()),
                ('branch_address_id', models.IntegerField()),
            ],
            options={
                'db_table': 'sucursal',
                'managed': False,
            },
        ),
    ]
