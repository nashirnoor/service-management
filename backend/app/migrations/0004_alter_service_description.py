# Generated by Django 5.1 on 2024-09-04 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_service_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='description',
            field=models.TextField(blank=True, max_length=250, null=True),
        ),
    ]
