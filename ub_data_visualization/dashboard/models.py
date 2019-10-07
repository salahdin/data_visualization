from django.db import models

# Create your models here.
genderChoice = (
    ('Male', 'male'),
    ('Female', 'female')
)

class Subject(models.Model):

    gender = models.CharField(
        verbose_name="Gender of the subject",
        choices=genderChoice,
        null=False,
        max_length=7
    )

    age = models.IntegerField(
        verbose_name="age of the subject",
        null=False,
        blank=False,
    )



