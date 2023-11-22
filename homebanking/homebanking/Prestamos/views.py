from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from Clientes.models import Cliente, TipoCliente
from .models import Prestamo
from .forms import NewLoanRequest

# Create your views here.

@login_required
def loan_money(request):

    user_id = request.user.id
    user_data = Cliente.objects.get(user_id=user_id)
    client_class = TipoCliente.objects.get(tipo_id=user_data.tipo_cliente_id)
    
    data = {
        'cliente_id': user_id,
        'cliente_data': user_data,
        'client_class': client_class,
        'form': NewLoanRequest()
    }

    if request.method == 'POST':

        client_class_name = client_class.tipo_cliente_nombre

        if client_class_name == 'Classic':
            loan_limit = 10000000
        elif client_class_name == 'Gold':
            loan_limit = 30000000
        elif client_class_name == 'Black':
            loan_limit = 50000000

        form = NewLoanRequest(data=request.POST)

        if form.is_valid():

            selected_loan_type = form.cleaned_data['loan_type']
            filter_loan_type = Prestamo.objects.filter(loan_type=selected_loan_type)
            loan_type = filter_loan_type[0].loan_type

            print(filter_loan_type[0].loan_type)

            loan_amount = loan_limit
            customer_id = user_id
            
            new_loan = Prestamo.objects.create(
                loan_type = loan_type,
                loan_total = loan_amount,
                customer_id = customer_id
            )
            print(new_loan)

            return redirect(reverse('loan_money')+'?ok')
            
        else:
                
            return redirect(reverse('loan_money')+'?error')
            

    return render(request, 'prestamos/loan-money.html', data)