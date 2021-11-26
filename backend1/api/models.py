from django.db import models


# Create your models here.

class Product(models.Model):
    name = models.TextField(max_length=30)
    category = models.TextField()
    description = models.TextField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    features = models.TextField()
    offerPercentage = models.DecimalField(max_digits=3, decimal_places=2)
