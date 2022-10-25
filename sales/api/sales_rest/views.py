import json
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .models import SalesPerson, PotentialCustomer, SalesRecord, AutomobileVO

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["color", "year", "vin", "sold"]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "id",
    ]

class PotentialCustomerEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = [
        "name",
        "address",
        "phone",
        "id"
    ]

class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "id",
        "sales_person",
        "automobile",
        "customer",
        "price",
    ]
    encoders = {
        "sales_person": SalesPersonEncoder(),
        "automobile": AutomobileVOEncoder(),
        "customer": PotentialCustomerEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_create_salesperson(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_people": sales_person},
            encoder=SalesPersonEncoder,
        )
    else:
        content = json.loads(request.body)
        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_create_customer(request):
    if request.method == "GET":
        customers = PotentialCustomer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=PotentialCustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = PotentialCustomer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=PotentialCustomerEncoder,
            safe=False,
        )


@require_http_methods(["GET"])
def api_show_customer(request, pk):
    if request.method == "GET":
        customer = PotentialCustomer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=PotentialCustomerEncoder,
            safe=False
        )


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = SalesRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SalesRecordEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            content["automobile"] = AutomobileVO.objects.get(vin=content["automobile"])
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Automobile Invalid"},
                status=400,
            )
        try:
            content["customer"] = PotentialCustomer.objects.get(id=content["customer"])
        except PotentialCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer invalid"},
                status=400,
            )
        try:
            content["sales_person"] = SalesPerson.objects.get(id=content["sales_person"])
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Person invaild"},
                status=400,
            )

        sales = SalesRecord.objects.create(**content)
        return JsonResponse(
            sales,
            encoder=SalesRecordEncoder,
            safe=False,
        )

@require_http_methods(["GET"])
def api_show_sale(request, pk):
    if request.method == "GET":
        try:
            sale = SalesRecord.objects.get(id=pk)
            return JsonResponse(
                sale,
                encoder=SalesRecordEncoder,
                safe=False
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "Does not exist"},
                status=400,
            )
    elif request.method == "DELETE":
        try:
            sale = SalesRecord.objects.get(id=pk)
            sale.delete()
            return JsonResponse(
                sale,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "Does not exist"}
            )
    else:
        try:
            content = json.loads(request.body)
            sale = SalesRecord.objects.get(id=pk)

            props = ["sales_person", "automobile", "customer", "price"]
            for prop in props:
                if prop in content:
                    setattr(sale, prop, content[prop])
            sale.save()
            return JsonResponse(
                sale,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "Try again"}
            )


@require_http_methods(["GET"])
def api_show_salesperson_records(request, pk):
    if request.method == "GET":
        try:
            sales_person = SalesRecord.objects.filter(sales_person=pk)
            return JsonResponse(
                sales_person,
                encoder=SalesRecordEncoder,
                safe=False
            )
        except SalesRecord.DoesNotExist:
            response = JsonResponse({"message": "Try again"})
            response.status_code = 404
            return response
