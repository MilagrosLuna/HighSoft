from rest_framework import status, response, permissions, viewsets
from .serializers import DireccionesSerializer, DireccionClienteSerializer, DireccionEmpleadoSerializer
from .models import Direcciones, DireccionCliente, DireccionEmpleado

# Create your views here.

class DireccionesViewSet(viewsets.ModelViewSet):

    serializer_class = DireccionesSerializer
    queryset = Direcciones.objects.all()
    permission_classes = [permissions.IsAuthenticated]


    def patch(self, request):

        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        headers = self.get_success_headers(serializer.data)
                
        return response.Response(serializer.data, status=status.HTTP_200_OK, headers=headers)