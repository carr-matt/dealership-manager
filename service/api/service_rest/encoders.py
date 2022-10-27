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
        "automobile",
        "tech",
        "owner",
        "date",
        "reason",
        "finished",
        "vip",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "tech": TechEncoder(),
    }
