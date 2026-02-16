from rest_framework import viewsets
from .models import Orcamento, Trabalho
from .serializers import OrcamentoSerializer, TrabalhoSerializer

class OrcamentoViewSet(viewsets.ModelViewSet):
    queryset = Orcamento.objects.all()
    serializer_class = OrcamentoSerializer
    
class TrabalhoViewSet(viewsets.ModelViewSet):
    queryset = Trabalho.objects.all()
    serializer_class = TrabalhoSerializer