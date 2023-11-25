from django.urls import path
from . import views

urlpatterns = [
    path('client/', views.client, name='personal_data'),
    path('search-client/', views.client_search, name='client_search')

]