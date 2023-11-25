from django import forms
from Prestamos.models import Prestamo

class NewLoanRequest(forms.Form):

    def __init__(self, account_choices, *args, **kwargs):
        super(NewLoanRequest, self).__init__(*args, **kwargs)
        self.fields['account'].choices = account_choices

    TYPE_CHOICES = [
        ('PERSONAL', 'Personal'),
        ('HIPOTECARIO', 'Hipotecario'),
        ('PRENDARIO', 'Prendario'),
    ]

    loan_type = forms.ChoiceField(
        choices=TYPE_CHOICES,
        widget=forms.Select(),
        label='Tipo de préstamo'
    )
    account = forms.ChoiceField(
        widget = forms.Select(),
        label = 'Selecciona una cuenta'
    )
