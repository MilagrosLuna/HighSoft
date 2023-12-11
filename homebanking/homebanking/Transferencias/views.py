from rest_framework import viewsets, permissions, status, response
from .serializers import TransferenciaSerializer, ServicioSerializer
from .models import Transferencia, Servicio
from Cuentas.models import Cuenta

# Create your views here.

class TransferenciaViewSet(viewsets.ModelViewSet):

    queryset = Transferencia.objects.all()
    serializer_class = TransferenciaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request):

        data = request.data

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
class ServicioViewSet(viewsets.ModelViewSet):

    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request):

        data = request.data

        cuenta = data['cuenta_origen']
        monto = data['monto']

        cuenta_instance = Cuenta.objects.get(account_id=cuenta)
    
        try:
            nuevo_pago = Servicio.objects.create(cuenta_origen=cuenta_instance, monto=monto)
        except ValueError as e:
            return response.Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return response.Response({'mensaje': 'Pago creado con éxito'}, status=status.HTTP_200_OK)