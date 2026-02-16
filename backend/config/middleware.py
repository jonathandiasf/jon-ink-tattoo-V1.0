from django.http import HttpResponse

class SimpleCorsMiddleware:
    """Lightweight CORS middleware to add Access-Control-Allow-* headers for development."""
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.method == 'OPTIONS':
            response = HttpResponse()
        else:
            response = self.get_response(request)

        response.setdefault('Access-Control-Allow-Origin', '*')
        response.setdefault('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        response.setdefault('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization')
        return response
