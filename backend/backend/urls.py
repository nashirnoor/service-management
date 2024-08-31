"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from app.views import add_service, fetch_services, fetch_single_service, edit_service, delete_service

urlpatterns = [
    path('admin/', admin.site.urls),
    path('addservices', add_service, name='add_service'),
    path('services', fetch_services, name='fetch_services'),
    path('editservice/<int:service_id>', fetch_single_service, name='fetch_single_service'),
    path('editservices/<int:service_id>', edit_service, name='edit_service'),
    path('deleteservice/<int:service_id>', delete_service, name='delete_service'),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
