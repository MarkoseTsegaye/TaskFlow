# Generated by Django 5.1 on 2024-09-03 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0008_alter_assignment_class_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assignment',
            name='class_name',
            field=models.CharField(choices=[('EVPP 109', 'EVPP 109'), ('CS 330', 'CS 330'), ('CS 110', 'CS 110'), ('MATH 203', 'MATH 203'), ('EVPP 108', 'EVPP 108')], default='EVPP 109', max_length=11),
        ),
    ]
