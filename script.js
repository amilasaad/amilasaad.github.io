const themeBtn = document.getElementById('theme-toggle');
const musicBtn = document.getElementById('music-toggle');
const music = document.getElementById('bg-music');
const modal = document.getElementById('experience-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

const experiences = {
    ascendion: {
        title: "Certified MuleSoft Developer / Java Developer",
        company: "Ascendion Digital Solutions (Metrobank)",
        period: "July 2022 - Present",
        awards: [
            "<strong>Innovation Champion:</strong> Recognized for sharing and demonstrating new tech approaches that boosted team productivity.",
            "<strong>Technical Excellence:</strong> Awarded for creating a hybrid MuleSoft-Java connector transforming TS stream messages to ISO-8583."
        ],
        details: [
            "Designed and implemented RESTful APIs using RAML and YAML with JWT/OAuth 2.0 security.",
            "Built custom MuleSoft connectors to handle complex legacy message transformations.",
            "Integrated JMS, Kafka, and Redis for high-throughput asynchronous communication.",
            "Configured NGINX reverse proxies with path-based routing for API optimization."
        ]
    },
    freelance: {
        title: "Full-Stack Engineer (Freelance)",
        company: "Our Lady of Fatima University",
        period: "May 2024 - September 2024",
        awards: [],
        details: [
            "Developed AI-powered campus attendance system using facial recognition technology.",
            "Built the backend using Java Spring Boot to manage student data and API endpoints.",
            "Integrated real-time camera access via JavaScript frontend and stored metadata in MySQL.",
            "Deployed via NGINX as a reverse proxy to ensure secure access control."
        ]
    },
    xurpas: {
        title: "Junior Java Developer",
        company: "Xurpas Inc. (Globe Telecom)",
        period: "Nov 2021 - July 2022",
        awards: [],
        details: [
            "Developed scalable RESTful APIs using the Spring Boot framework.",
            "Collaborated on full-stack features using Angular for frontend and Spring Boot for backend.",
            "Optimized database interactions and performance for high-traffic telecom services.",
            "Provided technical support and troubleshooting for production API issues."
        ]
    },
    iict: {
        title: "Lead System Developer",
        company: "IICT Department",
        period: "May 2017 - August 2019",
        awards: [],
        details: [
            "Developed a voting system application using Java Swing for an interactive interface.",
            "Utilized Java programming to ensure system efficiency and reliability.",
            "Incorporated MySQL as the backend to securely store and manage voting data."
        ]
    },
    tourism: {
        title: "Lead System Developer",
        company: "Office of Tourism",
        period: "March 2018 - April 2018",
        awards: [],
        details: [
            "Developed a Provincial Tawi-Tawi Scholar Application using Java Swing.",
            "Implemented various functionalities in Java to ensure a seamless user experience.",
            "Integrated MySQL backend database for efficient storage of application data."
        ]
    }
};

document.querySelectorAll('.project-card.clickable').forEach(card => {
    card.addEventListener('click', () => {
        const exp = experiences[card.getAttribute('data-exp')];
        let awardsHtml = exp.awards.length ? `<h5 style="color: #38bdf8; margin-top: 20px;">🏆 Awards & Achievements</h5><ul>${exp.awards.map(a => `<li>${a}</li>`).join('')}</ul>` : "";
        modalBody.innerHTML = `
            <h2 style="color: #38bdf8; margin-bottom: 10px;">${exp.title}</h2>
            <h4 style="margin-bottom: 20px; opacity: 0.8;">${exp.company} | ${exp.period}</h4>
            ${awardsHtml}
            <h5 style="color: #38bdf8; margin-top: 20px;">🛠️ Key Responsibilities</h5>
            <ul style="line-height: 1.8;">${exp.details.map(d => `<li>${d}</li>`).join('')}</ul>
        `;
        modal.style.display = 'flex';
    });
});

closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play().then(() => {
            console.log("Playback started successfully");
            musicBtn.innerHTML = '<svg class="util-svg" viewBox="0 0 24 24"><path d="M14,19H18V5H14M6,19H10V5H6V19Z"/></svg>';
        }).catch(error => {
            console.error("Playback failed:", error);
            alert("Please interact with the page first to enable audio.");
        });
    } else {
        music.pause();
        musicBtn.innerHTML = '<svg class="util-svg" viewBox="0 0 24 24"><path d="M12,3V13.55C11.41,13.21 10.73,13 10,13C7.79,13 6,14.79 6,17C6,19.21 7.79,21 10,21C12.21,21 14,19.21 14,17V7H18V3H12Z"/></svg>';
    }
});

const carousel = document.getElementById('carousel');
let isDragging = false;
let startX = 0;
let currentX = 0;
let targetRotation = 0;
let currentRotation = 0;
let dragRotation = 0;
let velocity = 0.3;

function update() {
    if (!isDragging) {
        targetRotation -= velocity; 
    }
    
    
    currentRotation += (targetRotation - currentRotation) * 0.1;
    carousel.style.transform = `rotateY(${currentRotation}deg)`;

    
    const cards = document.querySelectorAll('.carousel-3d .project-card');
    cards.forEach((card, index) => {
        const angle = (index + 1) * 72 + currentRotation;
        const normalizedAngle = ((angle % 360) + 360) % 360;
        
        // Items between 90 and 270 degrees are "in the back"
        if (normalizedAngle > 90 && normalizedAngle < 270) {
            card.style.filter = "blur(4px) brightness(0.5)";
            card.style.opacity = "0.7";
        } else {
            card.style.filter = "blur(0px) brightness(1)";
            card.style.opacity = "1";
        }
    });

    requestAnimationFrame(update);
}

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    dragRotation = targetRotation;
    carousel.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.pageX - startX;
    targetRotation = dragRotation + (deltaX * 0.3); 
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
});

update();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('submit-btn');
    btn.innerText = 'Sending...';
    btn.style.opacity = '0.5';

    document.getElementById('current-time').value = new Date().toLocaleString();

    const serviceID = 'service_ztzy2hb';
    const templateID = 'template_295ctro';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.innerText = 'Message Sent!';
            btn.style.background = '#22c55e';
            alert('Thank you! Your message has been sent successfully.');
            this.reset(); // Clear the form
            
            setTimeout(() => {
                btn.innerText = 'Send Message';
                btn.style.background = 'var(--accent)';
                btn.style.opacity = '1';
            }, 3000);
        }, (err) => {
            btn.innerText = 'Send Message';
            btn.style.opacity = '1';
            alert('Failed to send: ' + JSON.stringify(err));
        });
});