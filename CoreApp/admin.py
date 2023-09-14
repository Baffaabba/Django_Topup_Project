from django.contrib import admin
from . models import Services, MobileNets, DataPrice


class ServicesAdmin(admin.ModelAdmin):
    list_display = ('name', 'image_url')


class DatasAdmin(admin.ModelAdmin):
    list_display = ('name', 'image_url')


admin.site.register(Services, ServicesAdmin)
admin.site.register(MobileNets)
admin.site.register(DataPrice)


