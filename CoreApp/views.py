from django.http import HttpResponse
from django.shortcuts import render
from .models import Services
# /CoreApp => index


def index(request):
    services = Services.objects.all()
    # datas = Datas.objects.all()
    return render(request, 'index.html', {'services': Services, 'datas': Datas})


def data_plans(request):
    return HttpResponse('new page')
