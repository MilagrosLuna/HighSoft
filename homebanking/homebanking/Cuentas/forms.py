from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from Cuentas.models import Cuenta


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password1', 'password2']

class CreateBankAccount(forms.Form):

    TYPE_CHOICES = [
    (1, "Caja de ahorro en pesos"), 
    (2, "Caja de ahorro en dólares"), 
    (3, "Cuenta corriente en pesos"), 
    (4, "Cuenta corriente en dólares"), 
    (5, "Cuenta inversión"),
]
    tipo_cuenta = forms.ChoiceField(
        choices=TYPE_CHOICES,
        widget=forms.Select()
    )    
