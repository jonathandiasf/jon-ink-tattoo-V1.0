from django.contrib import admin
from django.utils.html import format_html
from .models import Trabalho, Orcamento

class TrabalhoAdmin(admin.ModelAdmin):
    # Isso faz a imagem aparecer como uma miniatura na lista do Admin
    list_display = ('titulo', 'estilo', 'exibir_imagem')

    def exibir_imagem(self, obj):
        if obj.imagem:
            return format_html('<img src="{}" width="50" height="50" style="object-fit: cover; border-radius: 5px;" />', obj.imagem.url)
        return "Sem imagem"

admin.site.register(Trabalho, TrabalhoAdmin)
admin.site.register(Orcamento)