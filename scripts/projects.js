document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
        // Décalage de l'apparition pour chaque carte
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index); // 200ms d'écart entre chaque projet
    });
});