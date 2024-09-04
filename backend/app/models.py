# models.py
from django.db import models

class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True,max_length=250)
    image = models.ImageField(upload_to='services/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True,blank=True)
    image = models.ImageField(upload_to='projects/',null=True) 

    def __str__(self):
        return self.title
    

class Banner(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='banners/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
