# Generated by Django 4.2.7 on 2023-11-22 23:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('djtriggers', '0008_alter_trigger_id_alter_triggerresult_id'),
        ('Prestamos', '0002_mytrigger'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='MyTrigger',
            new_name='LOAN_TRIGGER',
        ),
    ]
