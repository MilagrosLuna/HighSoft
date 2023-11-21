from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import Cliente, TipoCliente
from .forms import ClientSearchForm

# Create your views here.

@login_required
def client(request):

    user_id = request.user.id
    user_data = Cliente.objects.get(user_id=user_id)
    client_class = TipoCliente.objects.get(tipo_id=user_data.tipo_cliente_id)

    print(client_class.tipo_cliente_nombre)

    data = {
        'cliente_id': user_id,
        'cliente_data': user_data,
        'client_class': client_class
    }

    return render(request, 'clientes/client.html', data)

def client_search(request):

    if request.method == 'GET':
        form = ClientSearchForm(request.GET)
        print(request.GET)

    if form.is_valid():
        query = form.cleaned_data['query']
        results = Cliente.objects.using('homebanking').filter(customer_name__icontains=query) | Cliente.objects.using('homebanking').filter(customer_surname__icontains=query) | Cliente.objects.filter(customer_dni__icontains=query)
        form = ClientSearchForm()
        context = {'results': results, 'searched': query, 'form': form}
        return render(request, 'clientes/client.html', context)
    else:
        form = ClientSearchForm()
        

    return render(request, 'clientes/client.html', {'form': form})