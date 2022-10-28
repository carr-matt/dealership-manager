from django.urls import path
from .views import (
    api_list_services,
    api_show_service,
    api_list_technicians,
)



urlpatterns = [
    path("service/", api_list_services, name="api_create_services"),
    path("<str:vin_vo_id>/service/", api_list_services, name="api_list_services"),
    path("service/<int:pk>/", api_show_service, name="api_show_service"),
    path("tech/", api_list_technicians, name="api_create_technicians"),

]