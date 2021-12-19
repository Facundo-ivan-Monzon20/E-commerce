from django.urls import include, path
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import ProductViewSet, RegisterView, me, CartItemViewSet, salir, LogoutView

router = routers.DefaultRouter()
router.register(r'product', ProductViewSet)
router.register(r'CartItemViewSet', CartItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view()),
    path('me/', me),
    path('salir/', salir, name="salir"),
    path('logout/', LogoutView.as_view(), name='auth_logout')
]
