from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Assignment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ["id", "title", "description", "due_date", "class_name", "created_at",  "author"]
        extra_kwargs = {"author": {"read_only": True}}