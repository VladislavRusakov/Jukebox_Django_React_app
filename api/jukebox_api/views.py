from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Record
from .serializers import RecordSerializer
# Create your views here.


@api_view(['GET'])
def getData(request):
    records = Record.objects.all()
    serializer = RecordSerializer(records, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addRecord(request):
    serializer = RecordSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
