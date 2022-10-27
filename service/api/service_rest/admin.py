from django.contrib import admin

from .models import AutomobileVO, Tech, Appointment


@admin.register(AutomobileVO)
class AutomobileVO(admin.ModelAdmin):
    pass


@admin.register(Tech)
class TechAdmin(admin.ModelAdmin):
    pass


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    pass
