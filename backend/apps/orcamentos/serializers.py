from rest_framework import serializers
from .models import Trabalho, Orcamento

class TrabalhoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trabalho
        fields = '__all__'

class OrcamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orcamento
        fields = '__all__'