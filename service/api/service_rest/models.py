from django.db import models
from django.urls import reverse


# Models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, null=True, unique=True)


class Tech(models.Model):
    name = models.CharField(max_length=50)
    employee_id = models.IntegerField(primary_key=True)

    def get_api_url(self):
        return reverse("show_tech", kwargs={"pk": self.pk})

    def __str__(self):
        return f"{self.name} #{self.employee_id}"


class Appointment(models.Model):
    tech = models.ForeignKey(
        "Tech",
        related_name="appointment",
        on_delete=models.PROTECT
    )
    owner = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=False, auto_now=False)
    vin = models.CharField(max_length=17)
    reason = models.TextField(max_length=100)
    finished = models.BooleanField()
    canceled = models.BooleanField(default=False)
    vip = models.BooleanField(default=False)

    def get_api_url(self):
        return reverse("show_appointment", kwargs={"pk": self.id})

    def __str__(self):
        return f"Appointment for {self.owner}, VIP {self.vip}"