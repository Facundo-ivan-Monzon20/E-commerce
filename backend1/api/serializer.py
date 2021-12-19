from django.contrib.auth import get_user_model
from rest_framework import serializers

<<<<<<< HEAD
from api.models import Product, CartItem
=======
from api.models import Product, shoppingCart, Comment
>>>>>>> 87c97b94e312b034f07b40a4a604cca5b143a391


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
        fields = ["username", "password", "email", "first_name", "last_name"]

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        return user


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = "__all__"


class CartItemgetSerializer(serializers.ModelSerializer):
    Product = ProductSerializer(read_only=True)

    class Meta:
        model = CartItem
        fields = "__all__"


<<<<<<< HEAD
class MeSerializer(serializers.ModelSerializer):
    shoppingCart = CartItemgetSerializer(many=True)

    class Meta:
        model = get_user_model()
        fields = ["id", "username", "email", "first_name", "last_name", "shoppingCart"]
=======
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"


class CommentUserSerializer(serializers.ModelSerializer):
    user = MeSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = "__all__"
>>>>>>> 87c97b94e312b034f07b40a4a604cca5b143a391
