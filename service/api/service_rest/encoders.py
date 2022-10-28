from common.json import ModelEncoder
from .models import AutomobileVO, Service, Technician



class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href"
    ]


class TechListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "tech_name",
        "employee_num",
        "id",
    ]


class TechDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "tech_name",
        "employee_num",
        "id",
    ]


class ServiceDetailEncoder(ModelEncoder):
    model = Service
    properties = [
        "vin",
        "owner_name",
        "appointment",
        "tech_name",
        "reason",
        "vip",
        "finished",
    ]
    encoders = {
        "tech_name": TechDetailEncoder(),
    }

    def get_extra_data(self, o):
        return {"vin": o.vin}


class ServiceListEncoder(ModelEncoder):
    model = Service
    properties = [
        "vin",
        "owner_name",
        "appointment",
        "tech_name",
        "reason",
        "vip",
        "id",
        "finished",
    ]
    encoders = {
        "tech_name": TechDetailEncoder(),
    }
