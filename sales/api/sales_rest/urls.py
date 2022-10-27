from django.urls import path

from .views import (
    api_create_salesperson,
    api_show_salesperson_records,
    api_create_customer,
    api_list_sales,
    api_show_sale,
)

urlpatterns = [
    path("sales/person/", api_create_salesperson, name="api_create_salesperson"),
    path("sales/person/<int:pk>/", api_show_salesperson_records, name="api_show_salesperson_records"),
    path("sales/customer/", api_create_customer, name="api_create_customer"),
    path("sales/", api_list_sales, name="api_list_sales"),
    path("sales/<int:pk>/", api_show_sale, name="api_show_sale")
]
