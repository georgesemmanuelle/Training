document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.hero-card');
    
    // Animation d'entrée
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        card.style.transition = "all 0.8s ease-out";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 100);

});