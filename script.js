const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



lucide.createIcons();

const translations = {
    pl: {
        available: "Dostępny do współpracy",
        hi: "Cześć, jestem",
        subtitle: "Mam 16 lat i pasjonuję się programowaniem. Tworzę nowoczesne strony i ciągle uczę się nowych technologii.",
        githubBtn: "Mój GitHub",
        contactBtn: "Skontaktuj się",
        techTitle: "Technologie",
        projectsTitle: "Wybrane Projekty",
        backBtn: "Wróć",

        collabTitle: "Z kim współpracuję?",
        collabRole: "Web Developer & Współpracownik",
        collabDesc: "Wymieniamy się pomysłami, sprawdzamy sobie nawzajem kod i pracujemy razem nad projektami szkolnymi i pobocznymi.",
        collabBtn: "Zobacz jego GitHub",

        contactTitle: "Skontaktuj się",
        contactSubtitle: "Masz pytanie lub propozycję współpracy? Napisz do mnie!",
        contactQuote: "Zawsze chętny do kodowania nowych rzeczy.",
        formName: "Twoje Imię",
        formEmail: "Twój Email",
        formMsg: "Wiadomość",
        sendBtn: "Wyślij wiadomość",

        proj1Title: "Wyszukiwarka firm",
        proj1Desc: "Strona do wyszukiwania wprowadzonych przez użytkownika zawodów na stronie panoramafirm.pl",
        proj2Title: "Portfolio",
        proj2Desc: "Obecna strona, na którą patrzysz. Przejrzysta strona, ciemny motyw i animacje.",
        proj3Title: "Kursy",
        proj3Desc: "Mój kod z nauki różnych języków programowania."
    },
    en: {
        available: "Available for collaboration",
        hi: "Hi, I'm",
        subtitle: "I'm 16 years old and passionate about programming. I build modern websites and I'm constantly learning new technologies.",
        githubBtn: "My GitHub",
        contactBtn: "Contact Me",
        techTitle: "Technologies",
        projectsTitle: "Selected Projects",
        backBtn: "Back",

        collabTitle: "Who do I collaborate with?",
        collabRole: "Web Developer & Collaborator",
        collabDesc: "We exchange ideas, review each other’s code, and work together on school and side projects.",
        collabBtn: "View his GitHub",

        contactTitle: "Get in Touch",
        contactSubtitle: "Have a question or want to work together? Send me a message!",
        contactQuote: "Always eager to code new things.",
        formName: "Your Name",
        formEmail: "Your Email",
        formMsg: "Message",
        sendBtn: "Send Message",

        proj1Title: "Company Search Engine",
        proj1Desc: "A website for searching professions entered by the user on panoramafirm.pl.",
        proj2Title: "Portfolio",
        proj2Desc: "The website you're looking at. Clean layout, dark theme, and animations.",
        proj3Title: "Courses",
        proj3Desc: "My code from learning various programming languages."
    }
};

let currentLang = localStorage.getItem('language') || 'pl';

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('language', lang);
    currentLang = lang;
}

updateLanguage(currentLang);

const translateBtn = document.getElementById('translate-btn');
if (translateBtn) {
    translateBtn.addEventListener('click', () => {
        const newLang = currentLang === 'pl' ? 'en' : 'pl';
        updateLanguage(newLang);
    });
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const elementsToAnimate = document.querySelectorAll('.scroll-anim');
elementsToAnimate.forEach(el => observer.observe(el));