from django.shortcuts import render, redirect
from .models import Hero, About, Skill, Experience, Project, BlogPost, ContactMessage, Service, Counter, SocialLink

def home(request):
    hero = Hero.objects.first()
    about = About.objects.first()
    skills = Skill.objects.all()
    experiences = Experience.objects.order_by('-created_at')[:3]
    projects = Project.objects.order_by('-created_at')[:3]
    services = Service.objects.all()
    counters = Counter.objects.all()
    social_links = SocialLink.objects.all()
    
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        ContactMessage.objects.create(name=name, email=email, message=message)
        return redirect('home')

    context = {
        'hero': hero,
        'about': about,
        'skills': skills,
        'experiences': experiences,
        'projects': projects,
        'services': services,
        'counters': counters,
        'social_links': social_links,
    }
    return render(request, 'home.html', context)

def about(request):
    about_data = About.objects.first()
    skills = Skill.objects.all()
    experiences = Experience.objects.order_by('-created_at')[:5]  # Recent experiences
    projects = Project.objects.order_by('-created_at')[:3]  # Recent projects
    services = Service.objects.all()
    counters = Counter.objects.all()
    return render(request, 'about.html', {
        'about': about_data, 
        'skills': skills,
        'experiences': experiences,
        'projects': projects,
        'services': services,
        'counters': counters
    })

def skills(request):
    skills_list = Skill.objects.all()
    return render(request, 'skills.html', {'skills': skills_list})

def experience(request):
    experiences = Experience.objects.order_by('-created_at')
    return render(request, 'experience.html', {'experiences': experiences})

def projects(request):
    projects_list = Project.objects.all()
    return render(request, 'projects.html', {'projects': projects_list})

def blog(request):
    posts = BlogPost.objects.order_by('-created_at')
    return render(request, 'blog.html', {'posts': posts})

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        ContactMessage.objects.create(name=name, email=email, message=message)
        return redirect('contact')
    return render(request, 'contact.html')
