# Generated by Django 4.2 on 2023-05-26 17:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('invoice', '0006_alter_invoice_options_invoice_bankaccount_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='invoice',
            options={'ordering': ('-created_at',)},
        ),
        migrations.RemoveField(
            model_name='invoice',
            name='bankaccount',
        ),
        migrations.RemoveField(
            model_name='invoice',
            name='is_credited',
        ),
    ]
