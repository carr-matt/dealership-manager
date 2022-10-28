# Generated by Django 4.0.3 on 2022-10-28 14:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('import_href', models.CharField(max_length=200, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tech_name', models.CharField(max_length=100)),
                ('employee_num', models.CharField(max_length=20, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('owner_name', models.CharField(max_length=100)),
                ('appointment', models.DateTimeField(null=True)),
                ('vin', models.CharField(max_length=17)),
                ('reason', models.CharField(max_length=100)),
                ('vip', models.BooleanField(default=False)),
                ('finished', models.BooleanField(default=False)),
                ('tech_name', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='services', to='service_rest.technician')),
            ],
        ),
    ]
