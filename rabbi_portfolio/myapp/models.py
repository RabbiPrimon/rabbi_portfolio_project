from django.db import models

class Hero(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='hero/', blank=True, null=True)
    
    def __str__(self):
        return self.title

class About(models.Model):
    description = models.TextField()
    profile_image = models.ImageField(upload_to='about/', blank=True, null=True)

    def __str__(self):
        return "About Section"

class Skill(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Experience(models.Model):
    role = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    start_date = models.CharField(max_length=50) # Keep simple for now
    end_date = models.CharField(max_length=50)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.role} at {self.company}"

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    live_link = models.URLField(blank=True)
    repo_link = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"

class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    icon_class = models.CharField(max_length=50, help_text="FontAwesome class, e.g., fa-code")

    def __str__(self):
        return self.title

class Counter(models.Model):
    name = models.CharField(max_length=100)
    count = models.CharField(max_length=50, help_text="e.g., 50+")

    def __str__(self):
        return self.name

class SocialLink(models.Model):
    platform = models.CharField(max_length=100)
    url = models.URLField()
    icon_class = models.CharField(max_length=50, help_text="FontAwesome class, e.g., fa-github")

    def __str__(self):
        return self.platform
