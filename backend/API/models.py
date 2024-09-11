from django.db import models
import datetime
from django.contrib.auth.models import User
# Create your models here.


class Classes(models.Model):
    class_name = models.CharField(max_length=20)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.title

class Assignment(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    class_name = models.CharField(max_length=11,default="EVPP 109")
    created_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField(default=None, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="assignment")

    def __str__(self):
        return self.title
    
