# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-04-18 20:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0003_auto_20190418_2037'),
    ]

    operations = [
        migrations.AlterField(
            model_name='show',
            name='release_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
