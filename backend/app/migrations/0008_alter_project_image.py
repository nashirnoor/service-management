# Generated by Django 5.1 on 2024-09-04 11:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_banner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(null=True, upload_to='projects/'),
        ),
    ]
