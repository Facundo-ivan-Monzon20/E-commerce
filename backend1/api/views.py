# Create your views here.
from django.contrib import messages
from rest_framework import viewsets, generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import logout
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from api.models import Product, CartItem
from api.serializer import ProductSerializer, RegisterSerializer, MeSerializer, CartItemSerializer, \
    CartItemgetSerializer


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    # Filtro
    # def get_queryset(self):
    #     queryset = self.queryset
    #    id = self.request.query_params.get('id')
    #   if id is not None:
    #      queryset = queryset.filter(id=id)
    # return queryset

    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [IsAuthenticated]
        else:
            self.permission_classes = []
        return super(ProductViewSet, self).get_permissions()


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    serializer = MeSerializer(request.user)
    return Response(data=serializer.data, status=200)


class CartItemViewSet(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return CartItemSerializer
        return CartItemgetSerializer


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def salir(request):
    logout(request)
    messages.success(request, "sesion cerrada correctamente")
    return Response(status=200)



class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            token = request.data["token_obtain_pair"]
            token = RefreshToken(token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)