# Generated by Django 4.2.7 on 2023-12-06 23:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Empleados', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='DireccionEmpleado',
        ),
        migrations.DeleteModel(
            name='Direcciones',
        ),
    ]