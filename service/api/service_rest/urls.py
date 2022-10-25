from django.urls import path
from .views import list_appointment, list_tech, show_appointment, show_tech, list_service_history

urlpatterns = [
    path("appointment/", list_appointment, name="list_appointment"),
    path("appointment/<int:pk>/", show_appointment, name="show_appointment"),
    path("tech/", list_tech, name="list_tech"),
    path("tech/<int:pk>/", show_tech, name="show_tech"),
    path("vin/appointment/<str:vin>/", list_service_history, name="list_service_history"),
]
