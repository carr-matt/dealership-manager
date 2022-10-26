from django.urls import path
from .views import api_list_appointment, api_list_tech, api_show_appointment, api_show_tech, api_list_service_history

urlpatterns = [
    path("appointment/", api_list_appointment, name="api_list_appointment"),
    path("appointment/<int:pk>/", api_show_appointment, name="api_show_appointment"),
    path("tech/", api_list_tech, name="api_list_tech"),
    path("tech/<int:pk>/", api_show_tech, name="api_show_tech"),
    path("vin/appointment/<str:vin>/", api_list_service_history, name="api_list_service_history"),
]
