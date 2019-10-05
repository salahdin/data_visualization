from django.urls import path,include
from .import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('table/', views.displayTable, name='display'),
    path('chart/', views.displayChart, name="chart"),
]