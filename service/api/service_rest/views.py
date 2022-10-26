from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, Appointment, Tech
import json
from .encoders import (
    # AutomobileVOEncoder,
    TechEncoder,
    AppointmentEncoder,
)


@require_http_methods(["GET", "POST"])
def api_list_appointment(request):
    if request.method == "GET":
        appointment = Appointment.objects.all()
        print(appointment)
        return JsonResponse(
            {"appointment": appointment},
            encoder=AppointmentEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            vin_key = content["automobile"]
            vin_value = AutomobileVO.objects.get(vin=vin_key)
            print("vin value", vin_value)
            content["automobile"] = vin_value
            tech_key = content["tech"]
            tech_value = Tech.objects.get(id=tech_key)
            content["tech"] = tech_value
            appointment = Appointment.objects.create(**content)
            print(appointment)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid vin id"},
                status=400,
            )


@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_appointment(request, pk):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=pk)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:
        try:
            content = json.loads(request.body)
            appointment = Appointment.objects.get(id=pk)

            props = ["owner", "date", "finished", "canceled", "vip"]
            for prop in props:
                if prop in content:
                    setattr(appointment, prop, content[prop])
            appointment.save()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_list_tech(request):
    if request.method == "GET":
        tech = Tech.objects.all()
        return JsonResponse(
            {"tech": tech},
            encoder=TechEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            tech = Tech.objects.create(**content)
            return JsonResponse(
                tech,
                encoder=TechEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the tech"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_tech(request, pk):
    if request.method == "GET":
        try:
            tech = Tech.objects.get(id=pk)
            return JsonResponse(
                tech,
                encoder=TechEncoder,
                safe=False
            )
        except Tech.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            tech = Tech.objects.get(id=pk)
            tech.delete()
            return JsonResponse(
                tech,
                encoder=TechEncoder,
                safe=False,
            )
        except Tech.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            tech = Tech.objects.get(id=pk)

            props = ["name", "id"]
            for prop in props:
                if prop in content:
                    setattr(tech, prop, content[prop])
            tech.save()
            return JsonResponse(
                tech,
                encoder=TechEncoder,
                safe=False,
            )
        except Tech.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET"])
def api_list_service_history(request, vin):
    if request.method == "GET":
        try:
            service = Appointment.objects.filter(automobile__vin=vin)
            return JsonResponse(
                service,
                encoder=AppointmentEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Appointment"},
                status=400,
            )
