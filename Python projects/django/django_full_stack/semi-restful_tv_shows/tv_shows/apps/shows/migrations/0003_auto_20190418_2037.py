# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-04-18 20:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0002_auto_20190417_2114'),
    ]

    operations = [
        migrations.AlterField(
            model_name='show',
            name='release_date',
            field=models.DateField(null=True),
        ),
    ]
