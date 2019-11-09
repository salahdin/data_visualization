from django.urls import path,include
from .import views

app_name = "dashboard"
urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('chart/', views.displayChart, name="chart"),
    path('hyp/', views.displayHypertention, name="hyp"),
    path('search/', views.searchColmn, name="search"),
    path('add/', views.read_and_create_request,name = "adddata"),
    path('list/', views.ParticipantListView.as_view(), name='participant_list'),
]