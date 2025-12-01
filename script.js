/* ===== GLOBAL STYLES ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #4A90E2;
    --secondary-color: #2ECC71;
    --dark-color: #2C3E50;
    --light-color: #ECF0F1;
    --text-color: #34495E;
    --white: #FFFFFF;
    --gradient: linear-gradient(135deg, #4A90E2 0%, #2ECC71 100%);
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

section {
    padding: 80px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-title {
    font-size: 2.5rem;
    color: var(--dark-color);
    margin-bottom: 10px;
    position: relative;
    display: inline-block;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--gradient);
}

.section-subtitle {
    color: var(--text-color);
    font-size: 1.1rem;
    margin-top: 20px;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    border: 2px solid transparent;
    cursor: pointer;
}

.btn-primary {
    background: var(--gradient);
    color: var(--white);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow);
}

.btn-secondary {
    background: transparent;
    color: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-secondary:hover {
    background: var(--primary-color);
    color: var(--white);
}

/* ===== NAVIGATION ===== */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--white);
    box-shadow: var(--shadow);
    z-index: 1000;
    transition: var(--transition);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}

.logo h2 {
    font-size: 1.8rem;
    color: var(--dark-color);
}

.logo span {
    color: var(--primary-color);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav-link {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: var(--transition);
}

.nav-link:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--dark-color);
    margin: 3px 0;
    transition: var(--transition);
}

/* ===== HERO SECTION ===== */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding-top: 80px;
    position: relative;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.hero-title {
    font-size: 3rem;
    color: var(--dark-color);
    margin-bottom: 10px;
}

.highlight {
    color: var(--primary-color);
}

.hero-subtitle {
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 20px;
}

.hero-description {
    font-size: 1.1rem;
    color: var(--text-color);
    margin-bottom: 30px;
    line-height: 1.8;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-radius: 50%;
    color: var(--primary-color);
    font-size: 1.2rem;
    transition: var(--transition);
    box-shadow: var(--shadow);
}

.social-links a:hover {
    background: var(--gradient);
    color: var(--white);
    transform: translateY(-5px);
}

.image-container {
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: var(--shadow);
    border: 10px solid var(--white);
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.scroll-down {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
}

.scroll-down a {
    color: var(--primary-color);
    font-size: 2rem;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0) translateX(-50%);
    }
    40% {
        transform: translateY(-20px) translateX(-50%);
    }
    60% {
        transform: translateY(-10px) translateX(-50%);
    }
}

/* ===== ABOUT SECTION ===== */
.about {
    background: var(--white);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 60px;
    align-items: start;
}

.about-image {
    position: relative;
}

.about-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: var(--shadow);
}

.about-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.stat-item {
    background: var(--gradient);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: var(--white);
}

.stat-item h3 {
    font-size: 2.5rem;
    margin-bottom: 5px;
}

.stat-item p {
    font-size: 0.9rem;
}

.about-text h3 {
    font-size: 2rem;
    color: var(--dark-color);
    margin-bottom: 20px;
}

.about-text p {
    margin-bottom: 15px;
    line-height: 1.8;
}

.about-info {
    margin: 30px 0;
    display: grid;
    gap: 15px;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 15px;
}

.info-item i {
    color: var(--primary-color);
    font-size: 1.2rem;
    width: 30px;
}

.info-item strong {
    min-width: 120px;
    color: var(--dark-color);
}

/* ===== SERVICES SECTION ===== */
.services {
    background: var(--light-color);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.service-card {
    background: var(--white);
    padding: 40px 30px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    text-align: center;
}

.service-card:hover {
    transform: translateY(-10px);
}

.service-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    background: var(--gradient);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 2rem;
}

.service-card h3 {
    font-size: 1.5rem;
    color: var(--dark-color);
    margin-bottom: 15px;
}

.service-card p {
    color: var(--text-color);
    margin-bottom: 20px;
    line-height: 1.8;
}

.service-features {
    list-style: none;
    text-align: left;
}

.service-features li {
    padding: 8px 0;
    color: var(--text-color);
    position: relative;
    padding-left: 25px;
}

.service-features li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--secondary-color);
    font-weight: bold;
}

/* ===== SKILLS SECTION ===== */
.skills {
    background: var(--white);
}

.skills-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
}

.skills-text h3 {
    font-size: 2rem;
    color: var(--dark-color);
    margin-bottom: 20px;
}

.skills-text p {
    margin-bottom: 30px;
    line-height: 1.8;
}

.skill-categories {
    display: grid;
    gap: 20px;
}

.category {
    padding: 20px;
    background: var(--light-color);
    border-radius: 10px;
}

.category h4 {
    color: var(--dark-color);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.category i {
    color: var(--secondary-color);
}

.skills-bars {
    display: grid;
    gap: 25px;
}

.skill-item {
    display: grid;
    gap: 10px;
}

.skill-header {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    color: var(--dark-color);
}

.skill-bar {
    height: 10px;
    background: var(--light-color);
    border-radius: 10px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: var(--gradient);
    border-radius: 10px;
    transition: width 1s ease;
}

.additional-skills {
    margin-top: 60px;
    text-align: center;
}

.additional-skills h3 {
    font-size: 2rem;
    color: var(--dark-color);
    margin-bottom: 30px;
}

.skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
}

.skill-tag {
    padding: 10px 20px;
    background: var(--light-color);
    border-radius: 50px;
    color: var(--text-color);
    font-weight: 500;
    transition: var(--transition);
}

.skill-tag:hover {
    background: var(--gradient);
    color: var(--white);
}

/* ===== EXPERIENCE SECTION ===== */
.experience {
    background: var(--light-color);
}

.timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--gradient);
}

.timeline-item {
    position: relative;
    padding-left: 60px;
    margin-bottom: 50px;
}

.timeline-dot {
    position: absolute;
    left: 11px;
    top: 0;
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 50%;
    border: 4px solid var(--white);
    box-shadow: var(--shadow);
}

.timeline-content {
    background: var(--white);
    padding: 30px;
    border-radius: 10px;
    box-shadow: var(--shadow);
}

.timeline-date {
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 10px;
}

.timeline-content h3 {
    font-size: 1.5rem;
    color: var(--dark-color);
    margin-bottom: 5px;
}

.timeline-content h4 {
    color: var(--text-color);
    margin-bottom: 15px;
}

.timeline-content ul {
    margin: 20px 0;
    padding-left: 20px;
}

.timeline-content li {
    margin-bottom: 10px;
    line-height: 1.8;
}

.timeline-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

.timeline-tags span {
    padding: 5px 15px;
    background: var(--light-color);
    border-radius: 20px;
    font-size: 0.9rem;
    color: var(--text-color);
}

/* ===== PORTFOLIO SECTION ===== */
.portfolio {
    background: var(--white);
}

.portfolio-filters {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 10px 25px;
    background: var(--light-color);
    border: none;
    border-radius: 50px;
    color: var(--text-color);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.filter-btn.active,
.filter-btn:hover {
    background: var(--gradient);
    color: var(--white);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.portfolio-item {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.portfolio-item:hover {
    transform: translateY(-10px);
}

.portfolio-image {
    position: relative;
    overflow: hidden;
}

.portfolio-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: var(--transition);
}

.portfolio-item:hover .portfolio-image img {
    transform: scale(1.1);
}

.portfolio-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(74, 144, 226, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
    padding: 20px;
    text-align: center;
}

.portfolio-item:hover .portfolio-overlay {
    opacity: 1;
}

.portfolio-overlay h3 {
    color: var(--white);
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.portfolio-overlay p {
    color: var(--white);
    margin-bottom: 20px;
}

.portfolio-link {
    width: 50px;
    height: 50px;
    background: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 1.2rem;
    transition: var(--transition);
}

.portfolio-link:hover {
    transform: scale(1.1);
}

/* ===== TESTIMONIALS SECTION ===== */
.testimonials {
    background: var(--light-color);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.testimonial-card {
    background: var(--white);
    padding: 30px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.testimonial-card:hover {
    transform: translateY(-5px);
}

.testimonial-rating {
    color: #FFC107;
    margin-bottom: 15px;
}

.testimonial-text {
    font-style: italic;
    color: var(--text-color);
    margin-bottom: 20px;
    line-height: 1.8;
}

.testimonial-author h4 {
    color: var(--dark-color);
    margin-bottom: 5px;
}

.testimonial-author p {
    color: var(--text-color);
    font-size: 0.9rem;
}

/* ===== CONTACT SECTION ===== */
.contact {
    background: var(--white);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 60px;
}

.contact-info h3,
.contact-form h3 {
    font-size: 2rem;
    color: var(--dark-color);
    margin-bottom: 20px;
}

.contact-info p {
    margin-bottom: 30px;
    line-height: 1.8;
}

.contact-details {
    display: grid;
    gap: 25px;
    margin-bottom: 40px;
}

.contact-item {
    display: flex;
    gap: 20px;
    align-items: start;
}

.contact-icon {
    width: 50px;
    height: 50px;
    background: var(--gradient);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 1.2rem;
    flex-shrink: 0;
}

.contact-text h4 {
    color: var(--dark-color);
    margin-bottom: 5px;
}

.contact-text a {
    color: var(--text-color);
    text-decoration: none;
    transition: var(--transition);
}

.contact-text a:hover {
    color: var(--primary-color);
}

.contact-social h4 {
    color: var(--dark-color);
    margin-bottom: 15px;
}

.contact-form {
    background: var(--light-color);
    padding: 40px;
    border-radius: 10px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 15px;
    border: 2px solid transparent;
    border-radius: 5px;
    background: var(--white);
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

.form-group textarea {
    resize: vertical;
}

/* ===== FOOTER ===== */
.footer {
    background: var(--dark-color);
    color: var(--white);
    padding: 60px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-about h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
}

.footer-about span {
    color: var(--primary-color);
}

.footer-about p {
    margin-bottom: 20px;
    line-height: 1.8;
}

.footer h4 {
    margin-bottom: 20px;
    color: var(--white);
}

.footer ul {
    list-style: none;
}

.footer ul li {
    margin-bottom: 10px;
}

.footer ul li a {
    color: var(--light-color);
    text-decoration: none;
    transition: var(--transition);
}

.footer ul li a:hover {
    color: var(--primary-color);
}

.footer-contact p {
    margin-bottom: 10px;
    color: var(--light-color);
}

.footer-contact i {
    margin-right: 10px;
    color: var(--primary-color);
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--light-color);
}

.footer-bottom i {
    color: #E74C3C;
}

/* ===== SCROLL TO TOP ===== */
.scroll-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--gradient);
    color: var(--white);
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 999;
}

.scroll-top.active {
    opacity: 1;
    visibility: visible;
}

.scroll-top:hover {
    transform: translateY(-5px);
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: var(--white);
        width: 100%;
        text-align: center;
        transition: var(--transition);
        box-shadow: var(--shadow);
        padding: 20px 0;
    }

    .nav-menu.active {
        left: 0;
    }

    .hero-content,
    .about-content,
    .skills-content,
    .contact-content {
        grid-template-columns: 1fr;
    }

    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .image-container {
        width: 300px;
        height: 300px;
        margin: 0 auto;
    }

    .section-title {
        font-size: 2rem;
    }

    .services-grid,
    .portfolio-grid {
        grid-template-columns: 1fr;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .about-stats {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 1.5rem;
    }

    .section-title {
        font-size: 1.5rem;
    }

    .btn {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
}