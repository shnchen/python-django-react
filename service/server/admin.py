from django.contrib import admin
from server.models import Person
# Register your models here.

class PersonAdmin(admin.ModelAdmin):
    list_display = ('id','name','time')

admin.site.register(Person,PersonAdmin)
