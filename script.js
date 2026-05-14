const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'; 
const form = document.forms['google-sheet'];
const btn = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerText = "Sending...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            alert("Success! Your message has been sent.");
            btn.disabled = false;
            btn.innerText = "Send Message";
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Error! Please try again.");
            btn.disabled = false;
            btn.innerText = "Send Message";
        });
});

const themeBtn = document.getElementById('theme-toggle');
const root = document.documentElement;
themeBtn.addEventListener('click', () => {
    if (root.hasAttribute('data-theme')) {
        root.removeAttribute('data-theme');
        themeBtn.innerText = 'DARK';
    } else {
        root.setAttribute('data-theme', 'dark');
        themeBtn.innerText = 'LIGHT';
    }
});

const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["AI User", "Data Analyst", "Web Developer"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-value');
            });
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
