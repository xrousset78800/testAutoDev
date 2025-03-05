from django.db import models

class Program(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    time = models.DateTimeField()

    def __str__(self):
        return self.name