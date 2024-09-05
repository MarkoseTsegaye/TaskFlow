from django.db import models
import datetime
from django.contrib.auth.models import User
# Create your models here.

CLASSES = (
    ("EVPP 109" , "EVPP 109"),
    ("CS 330" , "CS 330"),
    ("CS 110", "CS 110"),
    ("MATH 203" , "MATH 203"),
    ("EVPP 108", "EVPP 108"),
)


class Assignment(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    class_name = models.CharField(max_length=11, choices=CLASSES,default="EVPP 109")
    created_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField(default=None, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="assignment")

    def __str__(self):
        return self.title
    
