from django.db import models


class AutomobileVO(models.Model):
    color = models.CharField(max_length=10)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default = False)


class SalesPerson(models.Model):
    name = models.CharField(max_length=100)
    id = models.IntegerField(primary_key=True)


class PotentialCustomer(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField(max_length=300)
    phone = models.CharField(max_length=15)


class SalesRecord(models.Model):
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales",
        on_delete=models.PROTECT
    )
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.PROTECT
    )
    customer = models.ForeignKey(
        PotentialCustomer,
        related_name="sales",
        on_delete=models.PROTECT
    )
    price = models.PositiveIntegerField()
