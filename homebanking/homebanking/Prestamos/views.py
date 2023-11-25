from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from Clientes.models import Cliente, TipoCliente
from Cuentas.models import Cuenta
from .models import Prestamo
from .forms import NewLoanRequest
from common.utils import format_number

# Create your views here.

@login_required
def loan_money(request):

    user_id = request.user.id
    user_data = Cliente.objects.get(user_id=user_id)
    client_class = TipoCliente.objects.get(tipo_id=user_data.tipo_cliente_id)
    cuentas = Cuenta.objects.all().filter(client=user_data)
    cuentas_list = []

    for cuenta in cuentas:
        cuentas_list.append(cuenta.account_id)

    choices_list = [
        (cuenta, cuenta) for cuenta in cuentas_list
    ]
    
    data = {
        'cliente_id': user_id,
        'cliente_data': user_data,
        'client_class': client_class,
        'form': NewLoanRequest(choices_list)
    }
    client_class_name = client_class.tipo_cliente_nombre

    if client_class_name == 'Classic':
        loan_limit = 10000000
    elif client_class_name == 'Gold':
        loan_limit = 30000000
    elif client_class_name == 'Black':
        loan_limit = 50000000

    print(loan_limit)

    data['loan_limit'] = format_number(loan_limit)

    
    if request.method == 'POST':




        form = NewLoanRequest(choices_list ,data=request.POST)

        if form.is_valid():

            cuenta_seleccionada = form.cleaned_data['account']
            selected_loan_type = form.cleaned_data['loan_type']
            filter_loan_type = Prestamo.objects.filter(loan_type=selected_loan_type)
            loan_type = filter_loan_type[0].loan_type

            loan_amount = loan_limit
            customer_id = user_id
            
            new_loan = Prestamo.objects.create(
                loan_type = loan_type,
                loan_total = loan_amount,
                customer_id = customer_id,
                account_id = cuenta_seleccionada
            )

            new_loan.save()

            return redirect(reverse('loan_money')+'?ok')
            
        else:
                
            return redirect(reverse('loan_money')+'?error')
            

    return render(request, 'prestamos/loan-money.html', data)