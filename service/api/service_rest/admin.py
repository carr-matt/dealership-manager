from django.contrib import admin

from .models import AutomobileVO, Technician, Service


@admin.register(AutomobileVO)
class AutomobileVO(admin.ModelAdmin):
    pass


@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    pass
