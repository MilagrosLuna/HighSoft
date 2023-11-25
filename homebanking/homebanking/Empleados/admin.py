from django.contrib import admin
from Tarjetas.models import Tarjeta, MarcaTarjeta
from Clientes.models import Cliente
from Cuentas.models import Cuenta, TipoCuenta

# Register your models here.

admin.site.register(Tarjeta)
admin.site.register(MarcaTarjeta)
admin.site.register(Cliente)
admin.site.register(Cuenta)