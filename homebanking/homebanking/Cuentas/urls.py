from django.urls import path
from . import views

urlpatterns = [
    path('my-account/', views.account, name='account'),
    path('logout/', views.exit_account, name='logout'),
    path('register/', views.register, name='register'),
    path('create-new-account/', views.create_new_account, name='create_new_account')
]
