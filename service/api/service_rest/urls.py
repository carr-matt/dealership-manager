from django.urls import path
from .views import api_list_appointment, api_list_tech, api_show_appointment, api_show_tech, api_list_service_history

urlpatterns = [
    path("service/appt/", api_list_appointment, name="api_list_appointment"),
    path("service/appt/<int:pk>/", api_show_appointment, name="api_show_appointment"),
    path("service/tech/", api_list_tech, name="api_list_tech"),
    # path("tech/<int:pk>/", api_show_tech, name="api_show_tech"),
    path("service/appt/<str:vin>/", api_list_service_history, name="api_list_service_history"),
]
