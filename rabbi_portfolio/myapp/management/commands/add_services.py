from django.core.management.base import BaseCommand
from myapp.models import Service

class Command(BaseCommand):
    help = 'Add sample services to the database'

    def handle(self, *args, **options):
        if not Service.objects.exists():
            Service.objects.create(
                title='Web Development',
                description='Building responsive and high-performance websites using modern technologies.',
                icon_class='fa-code'
            )
            Service.objects.create(
                title='Backend Engineering',
                description='Developing robust server-side logic and database architectures.',
                icon_class='fa-server'
            )
            Service.objects.create(
                title='API Development',
                description='Creating scalable and secure RESTful APIs for mobile and web applications.',
                icon_class='fa-mobile-alt'
            )
            self.stdout.write(self.style.SUCCESS('Services added successfully!'))
        else:
            self.stdout.write('Services already exist.')