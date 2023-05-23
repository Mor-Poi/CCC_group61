from django.urls import path
from . import views

urlpatterns = [
	path('coordinates', views.getCoordinates, name='coordinates'),
    path('AFL', views.getAFL, name='AFL'),
    path('barChartData', views.getBarChartData, name='barChartData'),
    path('sentiment', views.getSentiment, name='sentiment'),
    path('subjective', views.getSubjective, name='subjective'),
    
	
]
