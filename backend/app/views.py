from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Service,Banner
from .serializers import ServiceSerializer,BannerSerializer
from rest_framework import generics




@api_view(['POST'])
def add_service(request):
    serializer = ServiceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def fetch_services(request):
    services = Service.objects.all()
    serializer = ServiceSerializer(services, many=True)
    
    response_data = {
        "success": True,
        "message": "Services fetched successfully",
        "data": serializer.data
    }
    
    return Response(response_data)

@api_view(['GET'])
def fetch_single_service(request, service_id):
    try:
        service = Service.objects.get(pk=service_id)
    except Service.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ServiceSerializer(service)
    return Response(serializer.data)

@api_view(['PUT'])
def edit_service(request, service_id):
    try:
        service = Service.objects.get(pk=service_id)
    except Service.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = ServiceSerializer(service, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_service(request, service_id):
    try:
        service = Service.objects.get(pk=service_id)
    except Service.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    service.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)




from .models import Project
from .serializers import ProjectSerializer

@api_view(['GET', 'POST'])
def project_list_create(request):
    if request.method == 'GET':
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def project_detail(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = ProjectSerializer(project)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = ProjectSerializer(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    


class BannerListView(generics.ListAPIView):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer

