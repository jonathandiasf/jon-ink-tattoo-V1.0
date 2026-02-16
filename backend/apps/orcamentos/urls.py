from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import OrcamentoViewSet, TrabalhoViewSet # Importe o TrabalhoViewSet que criaremos

router = DefaultRouter()

# Agora cada um tem seu "caminho" próprio na API
router.register(r'orcamentos', OrcamentoViewSet, basename='orcamentos')
router.register(r'trabalhos/', TrabalhoViewSet, basename='trabalhos')

urlpatterns = [
    path('', include(router.urls)),
]