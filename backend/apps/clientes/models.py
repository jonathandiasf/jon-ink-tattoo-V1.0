from django.db import models

class Pessoa(models.Model):
    nome = models.CharField(max_length=120)
    idade = models.IntegerField()
    localizacao = models.CharField(max_length=200)

    class Meta:
        abstract = True


class Cliente(Pessoa):
    altura = models.FloatField()
    peso = models.FloatField()
    instagram = models.CharField(max_length=120, blank=True)

    def __str__(self):
        return self.nome
