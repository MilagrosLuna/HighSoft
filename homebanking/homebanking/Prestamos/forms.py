from django import forms

class NewLoanRequest(forms.Form):
    choices = forms.ChoiceField()