from django.db import models


# Create your models here.
class Info(models.Model):
    battery = models.IntegerField(default=0)
    runtime = models.DurationField()
    # color = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.pk:04} - {self.battery}%'
