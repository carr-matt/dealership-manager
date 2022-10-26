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
        "vip",
        "canceled",
        "finished",
        "id",
        "tech",
        "owner",
        "date",
        "time",
        "automobile",
        "reason",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "tech": TechEncoder(),
    }
