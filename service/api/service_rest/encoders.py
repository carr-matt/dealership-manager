from common.json import ModelEncoder
from .models import AutomobileVO, Appointment, Tech



class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href",
    ]


class TechEncoder(ModelEncoder):
    model = Tech
    properties = [
        "name",
        "employee_id",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vin",
        "tech",
        "owner",
        "date",
        "reason",
        "finished",
        "vip",
    ]
    encoders = {
        "tech": TechEncoder(),
    }
