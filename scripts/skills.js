// Sélection de toutes les barres de progression
const bars = document.querySelectorAll('.progress');

// On utilise un IntersectionObserver pour lancer l'animation 
// seulement quand l'utilisateur fait défiler la page jusqu'aux compétences
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const value = progressBar.getAttribute('data-done');
            progressBar.style.width = value + '%';
            // Une fois animé, on arrête d'observer cet élément
            observer.unobserve(progressBar);
        }
    });
}, { threshold: 0.5 }); // Déclenche quand 50% de l'élément est visible

bars.forEach(bar => observer.observe(bar));
