from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, Appointment, Tech
import json
from .encoders import (
    TechEncoder,
    AppointmentEncoder,
)


@require_http_methods(["GET", "POST"])
def api_list_appointment(request):
    if request.method == "GET":
        appointment = Appointment.objects.all()
        return JsonResponse(
            {"appointment": appointment},
            encoder=AppointmentEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            tech_id = content["tech"]
            tech = Tech.objects.get(id=tech_id)
            content["tech"] = tech

        except Tech.DoesNotExist:
            return JsonResponse(
                {"message": "Employee ID invalid"}
            )
        vins = AutomobileVO.objects.vin.all()
        if content["automobile"] in vins:
            content["vip"] = True
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )



@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_appointment(request, pk):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=pk)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
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
            props = [
                "automobile",
                "tech",
                "owner",
                "date",
                "reason",
                "finished",
                "vip",
            ]

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
        content = json.loads(request.body)
        try:
            tech = Tech.objects.create(**content)
            return JsonResponse(
                tech,
                encoder=TechEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create tech"}
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
    else:
        try:
            content = json.loads(request.body)
            tech = Tech.objects.get(id=pk)

            props = ["name", "employee_id"]
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
