from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import UserSerializer, UserSerializerCreate
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return UserSerializerCreate
        return UserSerializer

