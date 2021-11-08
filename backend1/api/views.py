from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from api.models import Product
from api.serializer import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
