from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from Clientes.models import Cliente
from Cuentas.models import Cuenta, TipoCuenta

# Imports for ViewSets

from rest_framework import viewsets, permissions, response, status
from .serializers import CuentaSerializer, CrearCuentaSerializer, CrearUserSerializer
from Clientes.serializers import ClienteSerializer
from .serializers import TipoCuentaSerializer, CombinedSerializer

# Create your views here.

# contra 684WY2mHfICk1BXLHerh3


class CuentaViewset(viewsets.ModelViewSet):

    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):

        serializer_context = {'request': request}

        user_id = request.user.id
        client = Cliente.objects.filter(user_id=user_id)
        client_id = client[0].customer_id

        queryset = Cliente.objects.filter(customer_id=client_id)

        if queryset.exists():

            cuentas_instances = queryset.all()

            serializer = CombinedSerializer(cuentas_instances, many=True, context=serializer_context)
            return response.Response(serializer.data, status=status.HTTP_200_OK)
        else:
            # Handle the case where no accounts are found for the client
            return response.Response({'detail': 'No accounts found for the client'}, status=status.HTTP_404_NOT_FOUND)
    

class TipoCuentaViewSet(viewsets.ModelViewSet):
    
    queryset = TipoCuenta.objects.all()
    serializer_class = TipoCuentaSerializer
    permission_classes = [permissions.IsAuthenticated]


class CrearCuentaViewSet(viewsets.ModelViewSet):

    queryset = Cuenta.objects.all()
    serializer_class = CrearCuentaSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request):
        data = request.data

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class CrearUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = CrearUserSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request):

        serializer_user = CrearUserSerializer(
            data=request.data.get('user_data'))
        serializer_user.is_valid(raise_exception=True)

        deserialized_user_data = serializer_user.validated_data

        # Encoding the password
        user_password = deserialized_user_data.get('password')
        encoded_password = make_password(user_password)
        print(user_password)

        # Add the encoded password to the user_data object
        user_data = request.data.get('user_data', {})
        user_data['password'] = encoded_password
        user_instance = serializer_user.save(password=encoded_password)

        # Get the new User ID
        user_id = user_instance.id

        # Add the new User ID to the cliente_data object
        cliente_data = request.data.get('cliente_data', {})
        cliente_data['user'] = user_id

        serializer_cliente = ClienteSerializer(data=cliente_data)
        serializer_cliente.is_valid(raise_exception=True)
        cliente_instance = serializer_cliente.save()

        response_data = {
            'user': CrearUserSerializer(user_instance).data,
            'cliente': ClienteSerializer(cliente_instance).data
        }

        return response.Response(response_data, status=status.HTTP_201_CREATED)
