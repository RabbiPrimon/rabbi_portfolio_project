const canvas = document.getElementById('dotCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let dots = [];
const numDots = 120;
const connectionDistance = 180;
let mouse = { x: null, y: null, radius: 200 };

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

// Mouse interaction
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

class Dot {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 3 + 1;
        this.baseSize = this.size;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`; // Blue to cyan range
        this.opacity = Math.random() * 0.5 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.02;
    }

    update() {
        // Floating motion
        this.angle += this.angleSpeed;
        this.x += this.vx + Math.sin(this.angle) * 0.5;
        this.y += this.vy + Math.cos(this.angle) * 0.5;

        // Mouse interaction
        if (mouse.x && mouse.y) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                const force = (mouse.radius - distance) / mouse.radius;
                this.vx += (dx / distance) * force * 0.02;
                this.vy += (dy / distance) * force * 0.02;
                this.size = this.baseSize + force * 3;
                this.opacity = Math.min(1, this.opacity + force * 0.5);
            } else {
                this.size = Math.max(this.baseSize, this.size - 0.1);
                this.opacity = Math.max(0.2, this.opacity - 0.01);
            }
        }

        // Dampen velocity
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Bounce off walls with some padding
        const padding = 50;
        if (this.x < padding || this.x > width - padding) {
            this.vx *= -0.8;
            this.x = Math.max(padding, Math.min(width - padding, this.x));
        }
        if (this.y < padding || this.y > height - padding) {
            this.vy *= -0.8;
            this.y = Math.max(padding, Math.min(height - padding, this.y));
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        // Create gradient for each dot
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, this.color.replace('hsl', 'hsla').replace(')', `, ${this.opacity})`));
        gradient.addColorStop(1, this.color.replace('hsl', 'hsla').replace(')', ', 0)'));

        ctx.fillStyle = gradient;
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.size * 2;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

// Initialize dots
for (let i = 0; i < numDots; i++) {
    dots.push(new Dot());
}

function animate() {
    // Create trailing effect
    ctx.fillStyle = 'rgba(10, 15, 30, 0.05)';
    ctx.fillRect(0, 0, width, height);

    dots.forEach(dot => {
        dot.update();
        dot.draw();
    });

    // Draw connections with enhanced effects
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            const dx = dots[i].x - dots[j].x;
            const dy = dots[i].y - dots[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
                const opacity = (1 - dist / connectionDistance) * 0.6;
                const hue = (dots[i].angle + dots[j].angle) * 30 % 360;

                ctx.beginPath();
                ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${opacity})`;
                ctx.lineWidth = opacity * 2;
                ctx.moveTo(dots[i].x, dots[i].y);
                ctx.lineTo(dots[j].x, dots[j].y);
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

animate();

// ===== ENHANCED STYLISH FEATURES =====

// Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
scrollProgress.innerHTML = '<div class="scroll-progress-bar"></div>';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('.scroll-progress-bar').style.width = scrolled + '%';
});

// Navbar Active State with Smooth Transitions
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Magnetic Buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
    });
});

// Typing Animation for Hero Text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Apply typing effect to hero titles
document.addEventListener('DOMContentLoaded', () => {
    const heroTitles = document.querySelectorAll('h1, h2');
    heroTitles.forEach((title, index) => {
        if (title.closest('.hero') || title.closest('.about-hero')) {
            const originalText = title.textContent;
            setTimeout(() => {
                typeWriter(title, originalText, 80);
            }, index * 500);
        }
    });
});

// Parallax Effect for Background Elements
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(element => {
        const rate = element.dataset.parallax || 0.5;
        element.style.transform = `translateY(${scrolled * rate}px)`;
    });
});

// Skill Progress Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');

    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.style.width || '85%';
            bar.style.transition = 'width 1.5s ease-in-out';
        }, index * 200);
    });
}

// Trigger skill animations when skills section is visible
const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillsObserver.observe(skillsSection);
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3, .counter');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        if (target) {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '');
                }
            }, 20);
        }
    });
}

// Trigger counter animations
const statsSection = document.querySelector('.stats-section, .about-hero');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// Floating Animation for Cards
document.querySelectorAll('.glass-card, .service-card, .project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '';
    });
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for new effects
const style = document.createElement('style');
style.textContent = `
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(255,255,255,0.1);
        z-index: 1000;
    }

    .scroll-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        width: 0%;
        transition: width 0.3s ease;
    }

    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .btn {
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255,255,255,0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
    }

    .btn:hover::before {
        width: 300px;
        height: 300px;
    }

    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    body.loaded {
        opacity: 1;
    }

    .glass-card, .service-card, .project-card {
        transition: all 0.3s ease;
    }

    .skill-progress-bar {
        width: 0%;
    }

    .timeline-item {
        opacity: 0;
        transform: translateX(-50px);
        transition: all 0.6s ease;
    }

    .timeline-item.animate-in {
        opacity: 1;
        transform: translateX(0);
    }

    .service-card {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }

    .service-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
