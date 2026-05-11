function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Distance avant l'apparition

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

// Écouter l'événement de défilement
window.addEventListener("scroll", reveal);

// Lancer une fois au chargement pour afficher les éléments déjà visibles
reveal();