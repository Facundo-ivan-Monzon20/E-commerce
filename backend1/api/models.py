from django.contrib.auth import get_user_model
from django.db import models


# Create your models here.

class Product(models.Model):
    name = models.TextField(max_length=30)
    category = models.TextField()
    description = models.TextField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    features = models.TextField()
    offerPercentage = models.DecimalField(max_digits=3, decimal_places=2)


class shoppingCart(models.Model):
    created_at = models.DateTimeField(editable=False, auto_now_add=True, null=True)
    updated_at = models.DateTimeField(editable=False, auto_now=True, null=True)
    Product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='shoppingCart')
    usuario = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='shoppingCart')
    cantidadProducts = models.DecimalField(null=True, decimal_places=10, max_digits=12)
