document.addEventListener('DOMContentLoaded', function() {
    // Crear confeti
    function createConfetti() {
        const colors = ['#ff6b6b', '#ff8e8e', '#ffb3b3', '#ffd8d8', '#ff9a9e', '#fad0c4'];
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Posición aleatoria
        const left = Math.random() * 100;
        const size = 5 + Math.random() * 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 5;
        
        confetti.style.left = `${left}%`;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.animationDelay = `${delay}s`;
        
        // Forma aleatoria (círculo o cuadrado)
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        document.body.appendChild(confetti);
        
        // Eliminar después de la animación
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
    
    // Crear confeti continuamente
    setInterval(createConfetti, 150);
    
    // Crear confeti inicial
    for (let i = 0; i < 30; i++) {
        setTimeout(createConfetti, i * 100);
    }
});