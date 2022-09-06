from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    # return HttpResponse("Hello, world. You're at the polls index.")
    data = {
        'test': 1
    }
    return render(request, 'index.html', data)
