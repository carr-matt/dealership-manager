from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, PotentialCustomer, SalesRecord

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
