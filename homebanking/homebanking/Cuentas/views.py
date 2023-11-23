from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout, login, authenticate
from django.urls import reverse
from .forms import CustomUserCreationForm, CreateBankAccount
from Clientes.models import Cliente, TipoCliente
from Cuentas.models import Cuenta, TipoCuenta
from Cuentas.utils import get_iban, get_tipo_cuenta
from common.utils import format_number

# Create your views here.

# contra 684WY2mHfICk1BXLHerh3

def register(request):

    data = {'form': CustomUserCreationForm()}

    if request.method == 'POST':

        user_creation_form = CustomUserCreationForm(data=request.POST)

        if user_creation_form.is_valid():
            user_creation_form.save()
            new_user = authenticate(
                username=user_creation_form.cleaned_data['username'], password=user_creation_form.cleaned_data['password1'])
            login(request, new_user)
            return redirect('home')
        else:
            print("error")
            data['user_created'] = False
            return render(request, 'registration/register.html', data)

    return render(request, 'registration/register.html', data)


def exit_account(request):
    logout(request)
    return redirect('home')


@login_required
def account(request):

    user_info = request.user.id
    cliente = Cliente.objects.all().filter(user_id=user_info)
    cliente_id = cliente[0].customer_id
    cuentas = Cuenta.objects.all().filter(client=cliente_id)

    cuentas_list = list()

    for cuenta in cuentas:
        tipo_cuenta_actual = TipoCuenta.objects.all().filter(
            tipo_cuenta_id=cuenta.tipo_cuenta_id)
        tipo_cuenta = tipo_cuenta_actual[0].tipo_cuenta_nombre
        formated_balance = format_number(cuenta.balance)

        cuenta_data = {
            'balance': formated_balance,
            'tipo': tipo_cuenta,
            'id': cuenta.account_id
        }
        cuentas_list.append(cuenta_data)

    data = {
        'cuentas': cuentas_list}

    return render(request, 'cuentas/account.html', data)

@login_required
def create_new_account(request):

    data = {'form': CreateBankAccount()}

    if request.method == 'POST':

        user_info = request.user.id
        cliente = Cliente.objects.all().filter(user_id=user_info)
        cliente_id = cliente[0].customer_id
        tipo_cliente_id = cliente[0].tipo_cliente_id

        # limites del tipo cliente
        tipo_cliente = TipoCliente.objects.get(tipo_id=tipo_cliente_id)
        cuentas = Cuenta.objects.all().filter(client=cliente_id)
        form = CreateBankAccount(data=request.POST)


        if form.is_valid():

            tipo_seleccionado = form.cleaned_data['tipo_cuenta']
            tipo_cuenta = TipoCuenta.objects.get(tipo_cuenta_id=tipo_seleccionado)
            cliente = Cliente.objects.get(customer_id=cliente_id)
            balance = 0
            iban = get_iban()
        
            conteo = len(cuentas.filter(tipo_cuenta_id=tipo_cuenta))

            limite_cuenta_prueba = get_tipo_cuenta(tipo_cuenta.tipo_cuenta_id)

            limite_cuenta = getattr(tipo_cliente, limite_cuenta_prueba)

            if conteo < limite_cuenta:
  
                cuenta_nueva = Cuenta.objects.create(
                    tipo_cuenta = tipo_cuenta,
                    client = cliente,
                    iban = iban,
                    balance = balance
                )

                cuenta_nueva.save()

                return redirect(reverse('account')+'?ok')
            
            elif conteo >= limite_cuenta:
            
                return redirect(reverse('account')+'?error')

    return render(request, 'cuentas/create-account.html', data)
