from django.contrib.auth import get_user_model
from rest_framework import serializers

from api.models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

    def create(self, validated_data):
        product = super(ProductSerializer, self).create(validated_data)
        return product


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    username = serializers.CharField(min_length=5)
    email = serializers.CharField(min_length=5)

    class Meta:
        model = get_user_model()
        fields = ["username", "password", "email"]

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email']
        )
        return user


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["id", "username"]
