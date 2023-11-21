from django import forms

class ClientSearchForm(forms.Form):
    query = forms.CharField(label='Nombre o DNI')