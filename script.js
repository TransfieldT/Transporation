:root {
    /* Color Palette - Red & Silver theme */
    --clr-primary: #D32F2F;
    /* Deep Red */
    --clr-primary-hover: #B71C1C;
    --clr-silver: #B0BEC5;
    /* Silver/Grey */
    --clr-silver-dark: #78909C;
    --clr-silver-light: #ECEFF1;
    --clr-dark: #1A1A24;
    /* Deep Navy/Black for contrast */
    --clr-darker: #111118;
    --clr-white: #FFFFFF;
    --clr-text: #333333;
    --clr-text-light: #666666;

    /* Typography */
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Inter', sans-serif;

    /* Spacing & Layout */
    --transition: all 0.3s ease;
    --border-radius: 8px;
    --border-radius-lg: 16px;
    --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    color: var(--clr-text);
    background-color: var(--clr-white);
    line-height: 1.6;
    overflow-x: hidden;
}

/* Utilities */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.text-red {
    color: var(--clr-primary);
}

.text-silver {
    color: var(--clr-silver-dark);
}

.bg-light {
    background-color: var(--clr-silver-light);
}

.bg-dark {
    background-color: var(--clr-darker);
    color: var(--clr-white);
}

.text-center {
    text-align: center;
}

.section-padding {
    padding: 100px 0;
}

.section-header {
    margin-bottom: 60px;
}

.section-header h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 15px;
    color: var(--clr-dark);
}

.bg-dark .section-header h2 {
    color: var(--clr-white);
}

.section-header p {
    color: var(--clr-text-light);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
}

.bg-dark .section-header p {
    color: var(--clr-silver);
}

.grid {
    display: grid;
    gap: 30px;
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 14px 28px;
    border-radius: var(--border-radius);
    font-family: var(--font-heading);
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    cursor: pointer;
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background-color: var(--clr-primary);
    color: var(--clr-white);
}

.btn-primary:hover {
    background-color: var(--clr-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(211, 47, 47, 0.3);
}

.btn-outline {
    background-color: transparent;
    color: var(--clr-white);
    border: 2px solid var(--clr-white);
}

.btn-outline:hover {
    background-color: var(--clr-white);
    color: var(--clr-dark);
    transform: translateY(-2px);
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    z-index: 1000;
    transition: var(--transition);
}

.navbar.scrolled {
    background-color: rgba(26, 26, 36, 0.95);
    backdrop-filter: blur(10px);
    padding: 15px 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 800;
    text-decoration: none;
    display: flex;
    gap: 5px;
}

.logo-red {
    color: var(--clr-primary);
}

.logo-silver {
    color: var(--clr-silver);
}

.navbar.scrolled .logo-silver {
    color: var(--clr-white);
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav-links a:not(.btn) {
    color: var(--clr-white);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-links a:not(.btn)::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--clr-primary);
    transition: var(--transition);
}

.nav-links a:not(.btn):hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 6px;
}

.hamburger span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: var(--clr-white);
    transition: var(--transition);
}

/* Hero Section */
.hero {
    height: 100vh;
    min-height: 600px;
    position: relative;
    display: flex;
    align-items: center;
    background-image: url('assets/images/lorry_crane_hero.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(26, 26, 36, 0.9) 0%, rgba(26, 26, 36, 0.6) 50%, rgba(26, 26, 36, 0.3) 100%);
}

.hero-content {
    position: relative;
    z-index: 10;
    color: var(--clr-white);
    max-width: 800px;
}

.hero h1 {
    font-family: var(--font-heading);
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.25rem;
    color: var(--clr-silver-light);
    margin-bottom: 40px;
    max-width: 600px;
}

.hero-buttons {
    display: flex;
    gap: 20px;
}

/* Services */
.services-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.card {
    background: var(--clr-white);
    padding: 40px 30px;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    border-bottom: 4px solid transparent;
}

.card:hover {
    transform: translateY(-10px);
    border-bottom-color: var(--clr-primary);
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 20px;
}

.card h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--clr-dark);
}

.card p {
    color: var(--clr-text-light);
}

/* Fleet Section */
.fleet-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.fleet-card {
    background: var(--clr-white);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    position: relative;
}

.fleet-card:hover {
    transform: scale(1.03);
}

.fleet-tonnage {
    background-color: var(--clr-primary);
    color: var(--clr-white);
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 800;
    padding: 30px 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.fleet-tonnage::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1));
    transform: skewX(-20deg);
}

.fleet-details {
    padding: 30px 25px;
}

.fleet-details h3 {
    font-family: var(--font-heading);
    color: var(--clr-dark);
    margin-bottom: 10px;
}

.fleet-details p {
    color: var(--clr-text-light);
    font-size: 0.95rem;
    margin-bottom: 20px;
}

.fleet-specs {
    list-style: none;
}

.fleet-specs li {
    font-size: 0.9rem;
    color: var(--clr-dark);
    margin-bottom: 8px;
    font-weight: 500;
}

/* Why Us */
.why-grid {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
}

.why-content h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 20px;
    color: var(--clr-dark);
}

.why-content>p {
    color: var(--clr-text-light);
    font-size: 1.1rem;
    margin-bottom: 40px;
}

.why-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.why-list li {
    display: flex;
    gap: 20px;
}

.check-icon {
    background-color: var(--clr-primary);
    color: var(--clr-white);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
}

.why-list h4 {
    font-family: var(--font-heading);
    color: var(--clr-dark);
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.why-list p {
    color: var(--clr-text-light);
    font-size: 0.95rem;
}

.image-placeholder {
    width: 100%;
    height: 500px;
    background: linear-gradient(135deg, var(--clr-silver-light) 0%, var(--clr-silver) 100%);
    border-radius: var(--border-radius-lg);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.circle-graphic {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: var(--clr-primary);
    opacity: 0.1;
    top: -50px;
    right: -50px;
}

.crane-silhouette {
    font-size: 10rem;
    color: rgba(26, 26, 36, 0.1);
    z-index: 1;
}

/* Contact Form */
.contact-form-wrapper {
    max-width: 800px;
    margin: 0 auto;
    background: var(--clr-white);
    padding: 50px;
    border-radius: var(--border-radius-lg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.full-width {
    grid-column: 1 / -1;
}

.form-group label {
    font-weight: 500;
    color: var(--clr-dark);
    font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 15px;
    border: 1px solid var(--clr-silver);
    border-radius: var(--border-radius);
    font-family: var(--font-body);
    font-size: 1rem;
    transition: var(--transition);
    background-color: var(--clr-silver-light);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--clr-primary);
    background-color: var(--clr-white);
    box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);
}

.btn-submit {
    margin-top: 10px;
    font-size: 1.1rem;
}

/* Footer */
.footer {
    background-color: #0d0d12;
    color: var(--clr-silver);
    padding: 80px 0 30px;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 50px;
    margin-bottom: 60px;
}

.footer-brand h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--clr-white);
    margin-bottom: 15px;
}

.footer-brand p {
    max-width: 300px;
}

.footer-links h4,
.footer-contact h4 {
    color: var(--clr-white);
    font-family: var(--font-heading);
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.footer-links a {
    display: block;
    color: var(--clr-silver);
    text-decoration: none;
    margin-bottom: 10px;
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--clr-primary);
    transform: translateX(5px);
}

.footer-contact p {
    margin-bottom: 10px;
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
}

/* Animations */
.fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in {
    opacity: 0;
    transition: opacity 1s ease;
}

.fade-up.visible,
.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

.delay-1 {
    transition-delay: 0.2s;
}

.delay-2 {
    transition-delay: 0.4s;
}

.delay-3 {
    transition-delay: 0.6s;
}

/* Responsive */
@media (max-width: 992px) {
    .hero h1 {
        font-size: 3.5rem;
    }

    .why-grid {
        grid-template-columns: 1fr;
    }

    .footer-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: var(--clr-dark);
        flex-direction: column;
        padding: 30px 0;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        transition: clip-path 0.4s ease;
    }

    .nav-links.active {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .hamburger {
        display: flex;
    }

    .hamburger.active span:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
    }

    .hero h1 {
        font-size: 2.8rem;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .contact-form {
        grid-template-columns: 1fr;
    }

    .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .contact-form-wrapper {
        padding: 30px 20px;
    }
}

/* WhatsApp Link Styling */
.whatsapp-link {
    color: var(--clr-primary);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    display: inline-block;
}

.whatsapp-link:hover {
    color: var(--clr-primary-hover);
    transform: translateX(4px);
}

.contact-methods {
    text-align: center;
    margin-bottom: 25px;
    padding: 15px;
    background-color: rgba(211, 47, 47, 0.05);
    border-radius: var(--border-radius);
}

.contact-alternative {
    font-size: 0.95rem;
    color: var(--clr-text);
}

.footer-contact a.whatsapp-link {
    display: inline-block;
    margin-top: 8px;
}

/* Floating WhatsApp Button */
.floating-whatsapp {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #25D366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.floating-whatsapp:hover {
    background-color: #1EBE5D;
    transform: scale(1.1);
    color: white;
}

@media (max-width: 768px) {
    .floating-whatsapp {
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
    }

    .floating-whatsapp svg {
        width: 30px;
        height: 30px;
    }
}
