from django.contrib import admin
from .models import *


class ParticipantInline(admin.TabularInline):
    model = participant


class ParticipantAdmin(admin.ModelAdmin):
    #inlines = (ParticipantInline,)
    list_display = ('gender', 'age', 'location','smoker', 'obese')
    list_filter = ['gender', 'age']


admin.site.register(participant, ParticipantAdmin)
