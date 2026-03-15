from django.shortcuts import render, redirect
from .models import Hero, About, BlogPost, ContactMessage


def _safe_image_url(image_field):
    if not image_field:
        return ""
    try:
        if image_field.name and image_field.storage.exists(image_field.name):
            return image_field.url
    except Exception:
        return ""
    return ""


def _cv_data():
    profile = {
        "name": "MD Rabbi Islam",
        "headline": "Backend Developer | Django | DRF | PostgreSQL | Redis | Celery",
        "summary": (
            "Backend Developer specializing in Python, Django, and Django REST Framework with hands-on "
            "experience building scalable web applications, REST APIs, asynchronous task systems, and "
            "production-ready backend architectures."
        ),
        "email": "rabbiprimon00000@gmail.com",
        "phone": "+8801644358765",
        "location": "Dhaka, Bangladesh",
        "github": "https://github.com/RabbiPrimon",
        "linkedin": "https://linkedin.com/in/mdrabbiislam",
    }

    skill_groups = [
        {
            "title": "Programming Languages",
            "items": ["Python", "C", "JavaScript"],
        },
        {
            "title": "Backend and Frameworks",
            "items": ["Django", "Django REST Framework", "Celery"],
        },
        {
            "title": "Database and Caching",
            "items": ["PostgreSQL", "SQLite", "Redis"],
        },
        {
            "title": "DevOps and Tools",
            "items": ["Git", "GitHub", "Docker", "VPS", "cPanel"],
        },
        {
            "title": "Frontend Basics",
            "items": ["HTML", "CSS", "Bootstrap"],
        },
    ]

    experiences = [
        {
            "role": "Back-end Developer",
            "company": "Bavaria Garments Exporter Ltd (Full-time)",
            "period": "January 2026 - Present",
            "highlights": [
                "Design and develop scalable backend services using Python and Django.",
                "Architect and maintain RESTful APIs with Django REST Framework (DRF).",
                "Optimize PostgreSQL schemas, queries, and indexing to improve performance.",
                "Implement Redis caching to reduce latency and boost throughput.",
                "Manage asynchronous background jobs using Celery.",
                "Build structured internal tools for data entry, recruitment, and management systems.",
                "Follow clean architecture principles and support production-ready deployment practices.",
            ],
        },
        {
            "role": "Research Assistant",
            "company": "Bangladesh Poribeshbid Society",
            "period": "February 2022 - May 2024",
            "highlights": [
                "Maintained database systems.",
                "Performed backend data updates.",
                "Supported internal web tools.",
            ],
        },
    ]

    projects = [
        {
            "title": "AgroChain BD - Agricultural Price Transparency System",
            "summary": (
                "A full-stack Django-based system to track agricultural pricing from farmers to warehouses "
                "to transport to wholesalers to consumers."
            ),
            "highlights": [
                "Cost tracking across production, transport, warehouse, and market layers.",
                "CRUD modules for farmers, warehouses, transporters, retailers, and products.",
                "Relational database design using multiple interlinked tables.",
                "Authentication and role-based access for Admin, Farmer, Transport, and Market Inspector.",
                "Price reporting dashboard for transparency and monitoring.",
                "Data validation and Django Admin integration.",
            ],
            "stack": ["Django", "Python", "PostgreSQL", "Django ORM", "HTML", "CSS"],
            "repo_link": "https://github.com/RabbiPrimon/AgroChain-BD-Agricultural-Price-Transparency-System-",
            "live_link": "https://agrochain.crsyndicate.info/",
            "live_label": "Live Demo",
        },
        {
            "title": "LuxShop - E-commerce Platform",
            "summary": (
                "A full-featured e-commerce website with product listing, shopping cart, user authentication, "
                "payment integration, and admin operations."
            ),
            "highlights": [
                "Implemented product listing, shopping cart, and authentication workflow.",
                "Developed admin dashboard for inventory and order management.",
                "Optimized the platform for mobile responsiveness and user experience.",
            ],
            "stack": ["Django", "Python", "PostgreSQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
            "repo_link": "https://github.com/RabbiPrimon/LuxShop-E-commerce-Platform",
            "live_link": "https://luxshop.crsyndicate.info/",
            "live_label": "Live Demo",
        },
        {
            "title": "MarketLink - Multi-Vendor Marketplace (Backend)",
            "summary": (
                "Built a Django REST backend for a repair-service marketplace with vendors, service variants, "
                "orders, and payments."
            ),
            "highlights": [
                "Implemented Redis-based locking for stock concurrency.",
                "Implemented idempotent payment webhooks.",
                "Used Celery for background processing.",
                "Added comprehensive unit test coverage for critical backend flows.",
            ],
            "stack": ["Django", "DRF", "PostgreSQL", "Redis", "Celery"],
            "repo_link": "https://github.com/RabbiPrimon/MarketLink-multi-vendor-marketplace",
            "live_link": "",
            "live_label": "Private Deployment",
        },
    ]

    education = {
        "degree": "B.Sc in Computer Science and Engineering",
        "institute": "Hamdard University Bangladesh, Dhaka",
        "session": "Fall 2025",
        "cgpa": "3.22 / 4.00",
    }

    certifications = [
        {
            "title": "IT Specialist in Python - Next Generation",
            "issuer": "Certiport (Pearson VUE)",
            "description": "Successfully passed the IT Specialist in Python - Next Generation certification examination.",
        },
        {
            "title": "Web Application Development with Python Level-4",
            "issuer": "NSDA, Daffodil International Professional Training Institute",
            "description": (
                "Successfully completed Web Application Development with Python Level-4 under NSDA supervision and NHRDF funding."
            ),
        },
    ]

    leadership = [
        "Vice President, CSE Club, Hamdard University Bangladesh (Jun 2022 - Dec 2024)",
        "Volunteer, Rotary Club and Friends for Humanity (Feb 2020 - May 2022)",
        "Debate Performer, Prothom Alo Bondhu Shobha (2019)",
    ]

    languages = [
        "Bengali: Native",
        "English: Proficient (IELTS 6.0)",
    ]

    stats = [
        {"label": "Core Focus", "value": "Backend Engineering"},
        {"label": "Primary Stack", "value": "Python + Django"},
        {"label": "API Expertise", "value": "DRF + REST"},
        {"label": "Databases", "value": "PostgreSQL, Redis"},
    ]

    return {
        "profile": profile,
        "skill_groups": skill_groups,
        "experiences": experiences,
        "projects": projects,
        "education": education,
        "certifications": certifications,
        "leadership": leadership,
        "languages": languages,
        "stats": stats,
    }


def _shared_context():
    data = _cv_data()
    hero = Hero.objects.first()
    about = About.objects.first()
    hero_image_url = _safe_image_url(hero.image if hero else None)
    about_image_url = _safe_image_url(about.profile_image if about else None)
    primary_profile_image_url = about_image_url or hero_image_url

    data.update(
        {
            "hero_image_url": hero_image_url,
            "about_image_url": about_image_url,
            "primary_profile_image_url": primary_profile_image_url,
            "featured_experiences": data["experiences"][:2],
            "featured_projects": data["projects"][:3],
            "profile_image_fallback": "static/img/profile-placeholder.svg",
        }
    )
    return data


def home(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")
        ContactMessage.objects.create(name=name, email=email, message=message)
        return redirect("home")
    return render(request, "home.html", _shared_context())


def about(request):
    return render(request, "about.html", _shared_context())


def skills(request):
    return render(request, "skills.html", _shared_context())


def experience(request):
    return render(request, "experience.html", _shared_context())


def projects(request):
    return render(request, "projects.html", _shared_context())


def blog(request):
    context = _shared_context()
    context["posts"] = BlogPost.objects.order_by("-created_at")
    return render(request, "blog.html", context)


def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")
        ContactMessage.objects.create(name=name, email=email, message=message)
        return redirect("contact")
    return render(request, "contact.html", _shared_context())
