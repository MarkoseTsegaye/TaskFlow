from django.urls import path
from . import views

urlpatterns = [
    path("assignments/", views.AssignmentListCreate.as_view(), name="assignment-list"),
    path("assignments/delete/<int:pk>/", views.AssignmentDelete.as_view(), name="delete-assignment"),
    path("classes/", views.ClassesCreate.as_view(), name="classes-list"),
    path("classes/delete/<int:pk>/", views.ClassesDelete.as_view(), name="delete-class"),

]