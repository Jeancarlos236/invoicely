# Generated by Django 4.2 on 2023-05-26 15:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('team', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('client', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Invoice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('invoice_number', models.IntegerField(default=1)),
                ('client_name', models.CharField(max_length=255)),
                ('client_email', models.EmailField(max_length=254)),
                ('client_org_number', models.CharField(blank=True, max_length=255, null=True)),
                ('client_address1', models.CharField(blank=True, max_length=255, null=True)),
                ('client_address2', models.CharField(blank=True, max_length=255, null=True)),
                ('client_zipcode', models.CharField(blank=True, max_length=255, null=True)),
                ('client_place', models.CharField(blank=True, max_length=255, null=True)),
                ('client_country', models.CharField(blank=True, max_length=255, null=True)),
                ('client_contact_person', models.CharField(blank=True, max_length=255, null=True)),
                ('client_contact_reference', models.CharField(blank=True, max_length=255, null=True)),
                ('sender_reference', models.CharField(blank=True, max_length=255, null=True)),
                ('invoice_type', models.CharField(choices=[('invoice', 'Invoice'), ('credit_note', 'Credit note')], default='invoice', max_length=20)),
                ('due_days', models.IntegerField(default=14)),
                ('is_sent', models.BooleanField(default=False)),
                ('gross_amount', models.DecimalField(decimal_places=2, max_digits=6)),
                ('vat_amount', models.DecimalField(decimal_places=2, max_digits=6)),
                ('net_amount', models.DecimalField(decimal_places=2, max_digits=6)),
                ('discount_amount', models.DecimalField(decimal_places=2, max_digits=6)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='invoices', to='client.client')),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_invoices', to=settings.AUTH_USER_MODEL)),
                ('is_credit_for', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='invoice.invoice')),
                ('modified_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='modified_invoices', to=settings.AUTH_USER_MODEL)),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='invoices', to='team.team')),
            ],
        ),
    ]
