from django.urls import path,include
from .import views

app_name = "dashboard"
urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('table/', views.displayTable, name='display'),
    path('chart/', views.displayChart, name="chart"),
    path('hyp/', views.displayHypertention, name="hyp"),
    path('search/', views.searchColmn, name="search"),
]