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
        "id",
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
        "time",
        "reason",
        "finished",
    ]
    encoders = {
        "tech": TechEncoder(),
    }
    def get_extra_data(self, o):
        count = AutomobileVO.objects.filter(vin=o.vin).count()
        return {"vip": count > 0}

