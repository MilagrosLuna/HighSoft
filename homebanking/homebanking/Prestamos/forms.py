from django import forms
from Prestamos.models import Prestamo

class NewLoanRequest2(forms.ModelForm):
    class Meta:
        model = Prestamo
        fields = ['loan_type', 'loan_total', 'customer_id']

class NewLoanRequest(forms.Form):
    
    TYPE_CHOICES = [
    ('PERSONAL', 'Personal'),
    ('HIPOTECARIO','Hipotecario'),
    ('PRENDARIO','Prendario'),
    ]

    loan_type = forms.ChoiceField(
        choices=TYPE_CHOICES,
        widget = forms.Select(),
        label='Tipo de préstamo'
    )