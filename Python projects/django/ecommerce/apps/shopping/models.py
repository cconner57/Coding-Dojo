from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length = 40)
    last_name = models.CharField(max_length = 40)
    email = models.CharField(max_length = 60)
    password = models.CharField(max_length = 30)
    address = models.CharField(max_length = 60)
    address2 = models.CharField(max_length = 10)
    city = models.CharField(max_length = 60)
    state = models.CharField(max_length = 15)
    zip_code = models.CharField(max_length = 10)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Product(models.Model):
    name = models.CharField(max_length = 100)
    description = models.TextField()
    cost = models.IntegerField()
    quantity = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    seller = models.ForeignKey(User, related_name="uploaded_products")