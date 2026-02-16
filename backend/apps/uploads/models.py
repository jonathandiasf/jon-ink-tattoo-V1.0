from django.db import models
from apps.orcamentos.models import Orcamento

class ReferenciaImagem(models.Model):
    orcamento = models.ForeignKey(Orcamento,on_delete=models.CASCADE,related_name="referencias")
    imagem = models.ImageField(upload_to="referencias/")
    descricao = models.TextField(blank=True)

    def __str__(self):
        return f"Imagem {self.id}"
