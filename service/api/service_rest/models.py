from django.db import models


# Models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True)


class Technician(models.Model):
    tech_name = models.CharField(max_length=100)
    employee_num = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return f"{self.tech_name} #{self.employee_num}"


class Service(models.Model):
    owner_name = models.CharField(max_length=100)
    appointment = models.DateTimeField(null=True)
    vin = models.CharField(max_length=17)
    reason = models.CharField(max_length=100)
    vip = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)

    tech_name = models.ForeignKey(
        Technician,
        related_name="services",
        on_delete=models.PROTECT,
    )
