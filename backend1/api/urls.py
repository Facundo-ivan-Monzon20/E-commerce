from django.urls import include, path
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView

from api.views import ProductViewSet, RegisterView, me, shoppingCartViewSet

router = routers.DefaultRouter()
router.register(r'product', ProductViewSet)
router.register(r'shoppingCartViewSet', shoppingCartViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', RegisterView.as_view()),
    path('me/', me),
]
