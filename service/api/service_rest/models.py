from django.db import models


# Models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, null=True, unique=True)


class Tech(models.Model):
    name = models.CharField(max_length=50)
    employee_id = models.IntegerField(primary_key=True)

    def __str__(self):
        return f"{self.name} #{self.employee_id}"


class Appointment(models.Model):
    automobile = models.ForeignKey(AutomobileVO, related_name="appointment", on_delete=models.PROTECT)
    tech = models.ForeignKey(Tech, related_name="appointment", on_delete=models.PROTECT)
    owner = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=False, auto_now=False)
    reason = models.CharField(max_length=400)
    finished = models.BooleanField()
    vip = models.BooleanField(default=False)
