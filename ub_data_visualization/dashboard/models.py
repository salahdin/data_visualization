from django.db import models


# gender, age, location/healthcare site, number of those who smoke/those who are obese, common presenting heart
# attack symptoms.

class participant(models.Model):
    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
    )
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES,verbose_name="gender of participant")
    age = models.IntegerField(verbose_name="age of participant")
    location = models.CharField(max_length=100, verbose_name="healthcare site")
    smoker = models.CharField(max_length=20 , verbose_name="does the participant smoke", null=True)
    obese = models.CharField(max_length=20,verbose_name="is participant obese")
    hearattack= models.CharField(max_length=10, verbose_name="heart attack")


