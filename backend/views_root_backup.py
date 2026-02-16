from django.http import JsonResponse
import json

def orcamentos(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print("Novo orçamento:", data)
        return JsonResponse({"ok": True})
    
    return JsonResponse({"msg": "rota ativa"})
