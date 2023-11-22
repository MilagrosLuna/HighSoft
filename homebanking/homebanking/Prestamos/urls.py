from django.urls import path
from . import views

urlpatterns = [
    path('loan-money/', views.loan_money, name='loan_money'),
]
