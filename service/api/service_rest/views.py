from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

from .models import AutomobileVO, Service, Technician
from .encoders import (
    TechDetailEncoder,
    TechListEncoder,
    ServiceListEncoder,
    ServiceDetailEncoder,
)


@require_http_methods(["GET", "POST"])
def api_list_services(request, vin_vo_id=None):
    if request.method == "GET":
        if vin_vo_id is not None:
            services = Service.objects.filter(vin=vin_vo_id)
        else:
            services = Service.objects.all()
        return JsonResponse(
            {"services": services},
            encoder=ServiceListEncoder,
        )
    else:
        content = json.loads(request.body)
        tech_id = content["tech_name"]
        tech_name = Technician.objects.get(tech_name=tech_id)
        content['tech_name'] = tech_name
        try:
            id = content["vin"]
            vin = AutomobileVO.objects.get(vin=id)
            content["vip"] = True
        except AutomobileVO.DoesNotExist:
            content["vip"] = False
        service = Service.objects.create(**content)
        return JsonResponse(
            service,
            encoder=ServiceDetailEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE", "PUT"])
def api_show_service(request, pk):
    if request.method == "GET":
        service = Service.objects.get(id=pk)
        return JsonResponse (
            service,
            encoder=ServiceDetailEncoder,
            safe=False,
        )
    elif request.method == "PUT":
        content = json.loads(request.body)
        print(content)
        try:
            if "tech_name" in content:
                tech_name = Technician.objects.get(id=content["tech_name"])
                content["tech_name"] = tech_name
        except Technician.DoesNotExist:
            return JsonResponse (
                { "message": "Tech does not exist"},
            )
        Service.objects.filter(id=pk).update(**content)
        service = Service.objects.get(id=pk)
        return JsonResponse (
            service,
            encoder=ServiceDetailEncoder,
            safe=False,
        )
    else:
        try:
            count, _ = Service.objects.filter(id=pk).delete()
            return JsonResponse (
                {"deleted": count > 0}
            )
        except Service.DoesNotExist:
            return JsonResponse(
                {"message": "Does not exist"}
            )


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse (
            {"technicians": technicians},
            encoder=TechListEncoder,
        )
    else:
        content = json.loads(request.body)
        print(content)
        try:
            technician = Technician.objects.create(**content)
            return JsonResponse (
                technician,
                encoder=TechDetailEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse (
                {"message": "Tech does not exist"},
                status=400,
            )