from django.urls import path
from . import views

urlpatterns = [
    path('category/<str:category_name>/', views.category_items, name='category_items'),
    path('search/', views.search_items, name='search_items'),
    path('rate/<int:book_id>/', views.rate_book, name='rate_book'),
]