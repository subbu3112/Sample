from django.shortcuts import render
from django.http import HttpResponse

#Create your views here...
def f1(request):
	return HttpResponse("<h1>Hello from Pushpa Consultancy f1()</h1><hr />");
def f2(request):
	return HttpResponse("<h1>Hello from Pushpa Consultancy f2()</h1><hr />");
