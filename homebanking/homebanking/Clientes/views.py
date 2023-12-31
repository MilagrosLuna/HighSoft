from .models import Cliente, TipoCliente

# Imports for viewsets

from rest_framework import viewsets, response, permissions, status
from .models import Cliente, TipoCliente
from .serializers import ClienteSerializer, TipoClienteSerializer, CombinedClienteIsStaffSerializer, ClienteIsStaffSerializer

# Create your views here.

class ClienteViewSet(viewsets.ModelViewSet):

    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):

        user_id = request.user.id
 
        client_instance = Cliente.objects.get(user_id = user_id)
        print(client_instance)
        serializer = ClienteIsStaffSerializer(client_instance, context={'request': request})

        return response.Response(serializer.data, status.HTTP_200_OK)
    
class TipoClienteViewSet(viewsets.ModelViewSet):

    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):

        user_id = request.user.id
        queryset = Cliente.objects.filter(user_id = user_id)

        user_client_type_id = queryset[0].tipo_cliente.tipo_id

        user_client_type = TipoCliente.objects.filter(tipo_id = user_client_type_id)

        serializer = TipoClienteSerializer(user_client_type, many=True)

        return response.Response(serializer.data, status.HTTP_200_OK)