from django.contrib import admin
from .models import EstiloTattoo

@admin.register(EstiloTattoo)
class EstiloTattooAdmin(admin.ModelAdmin):
    list_display = ('nome',)