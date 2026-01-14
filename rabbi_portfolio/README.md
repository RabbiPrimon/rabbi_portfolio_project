# Rabbi Portfolio

A modern, responsive personal portfolio website built with Django, featuring a sleek glassmorphism design and comprehensive content management through Django admin.

![Portfolio Preview](https://via.placeholder.com/800x400/0f0c29/00d2ff?text=Rabbi+Portfolio)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Glassmorphism UI**: Modern glass-like design with backdrop blur effects
- **Dynamic Content**: All content managed through Django admin interface
- **Multiple Sections**:
  - Hero section with customizable title and description
  - About section with profile image support
  - Skills showcase
  - Experience timeline
  - Projects portfolio
  - Blog posts
  - Contact form with message storage
- **Social Media Integration**: Social links in hero section
- **Statistics Counter**: Display key metrics
- **Services Section**: Showcase your services/offered skills
- **Interactive Elements**: Animated background dots and smooth scrolling

## 🛠️ Tech Stack

- **Backend**: Django 6.0.1
- **Database**: SQLite (development) / PostgreSQL (production recommended)
- **Frontend**: HTML5, CSS3, JavaScript
- **Icons**: Font Awesome 6.4.0
- **Styling**: Custom CSS with CSS Variables
- **Deployment**: Ready for Heroku, DigitalOcean, AWS, etc.

## 📋 Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rabbi_portfolio.git
   cd rabbi_portfolio
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   # On Windows:
   # venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**
   ```bash
   python manage.py migrate
   ```

5. **Create a superuser**
   ```bash
   python manage.py createsuperuser
   ```

6. **Add sample services (optional)**
   ```bash
   python manage.py add_services
   ```

6. **Run the development server**
   ```bash
   python manage.py runserver
   ```

7. **Access the application**
   - Website: http://127.0.0.1:8000/
   - Admin panel: http://127.0.0.1:8000/admin/

## 📊 Database Models

The application includes the following models:

- **Hero**: Main landing section content
- **About**: Personal information and profile image
- **Skill**: Technical skills and technologies
- **Experience**: Work experience and education
- **Project**: Portfolio projects with links
- **BlogPost**: Blog articles
- **Service**: Services offered
- **Counter**: Statistics and metrics
- **SocialLink**: Social media profiles
- **ContactMessage**: Contact form submissions

## 🎨 Customization

### Adding Content

1. **Access Admin Panel**: Go to `/admin/` and login with superuser credentials
2. **Add Content**: Use the admin interface to add/update:
   - Hero section content
   - About information
   - Skills, experiences, projects
   - Blog posts
   - Services
   - Social links
   - Statistics counters

### Styling Customization

The design uses CSS custom properties (variables) for easy theming:

```css
:root {
    --bg-color: #0f0c29;
    --text-color: #ffffff;
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --primary-color: #00d2ff;
    --secondary-color: #3a7bd5;
    --accent-color: #ff0076;
}
```

Modify these variables in `myapp/static/css/style.css` to change the color scheme.

### Adding New Sections

1. Create a new model in `myapp/models.py`
2. Register it in `myapp/admin.py`
3. Create a view in `myapp/views.py`
4. Add URL pattern in `myapp/urls.py`
5. Create template in `myapp/templates/`
6. Update navigation in `base.html`

## 🚀 Deployment

### Environment Variables

Create a `.env` file in the project root:

```env
DEBUG=False
SECRET_KEY=your-secret-key-here
DATABASE_URL=your-database-url
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
```

### Production Settings

Update `rabbi_portfolio/settings.py` for production:

- Set `DEBUG = False`
- Configure `ALLOWED_HOSTS`
- Set up proper database (PostgreSQL recommended)
- Configure static files serving
- Set up email backend for contact forms

### Deployment Options

- **Heroku**: Use `gunicorn` and `whitenoise` for static files
- **DigitalOcean**: App Platform or Droplets
- **AWS**: Elastic Beanstalk or EC2
- **Vercel/Netlify**: For static export (requires modifications)

## 📁 Project Structure

```
rabbi_portfolio/
├── rabbi_portfolio/          # Main project settings
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── myapp/                    # Main application
│   ├── migrations/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── script.js
│   ├── templates/
│   │   ├── base.html
│   │   ├── home.html
│   │   ├── about.html
│   │   ├── skills.html
│   │   ├── experience.html
│   │   ├── projects.html
│   │   ├── blog.html
│   │   └── contact.html
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── media/                    # User uploaded files
├── db.sqlite3               # Database (development)
├── manage.py               # Django management script
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Font Awesome for icons
- Django community for excellent documentation

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me through the portfolio contact form

---

**Made with ❤️ by Rabbi**