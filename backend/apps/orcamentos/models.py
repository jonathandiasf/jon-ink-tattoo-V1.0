from django.db import models
from apps.clientes.models import Cliente
from apps.tatuagens.models import EstiloTattoo

class Orcamento(models.Model):

    STATUS = [
        ("pendente","Pendente"),
        ("analise","Em análise"),
        ("aprovado","Aprovado"),
        ("recusado","Recusado"),
    ]

    cliente = models.ForeignKey('clientes.Cliente',on_delete=models.CASCADE,null=True,blank=True)
    estilo = models.ForeignKey(EstiloTattoo,on_delete=models.SET_NULL,null=True)

    descricao = models.TextField()
    tamanho_cm = models.FloatField()
    parte_corpo = models.CharField(max_length=100)

    preco_estimado = models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)

    status = models.CharField(max_length=20,choices=STATUS,default="pendente")

    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Orcamento: {self.descricao or 'Sem descrição'}"

class Trabalho(models.Model):
    titulo = models.CharField(max_length=100)
    estilo = models.CharField(max_length=50)
    imagem = models.ImageField(upload_to='portfolio/') # Requer instalar o 'Pillow' (pip install Pillow)
    data_postagem = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
