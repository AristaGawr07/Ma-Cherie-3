document.addEventListener('DOMContentLoaded', function() {
    // Crear el botón
    const btn = document.createElement('a');
    btn.href = 'aniversarios/';
    btn.className = 'aniversario-btn';
    btn.textContent = 'Nuestros Aniversarios';
    document.body.appendChild(btn);

    // Efecto de corazones
    btn.addEventListener('mouseenter', function(e) {
        const hearts = 10; // Número de corazones
        
        for(let i = 0; i < hearts; i++) {
            createHeart(e);
        }
    });

    function createHeart(e) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        
        // Posición alrededor del cursor
        const x = e.clientX + (Math.random() * 20 - 10);
        const y = e.clientY + (Math.random() * 20 - 10);
        
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        
        // Tamaño y animación aleatoria
        const size = Math.random() * 20 + 10;
        heart.style.fontSize = size + 'px';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        
        document.body.appendChild(heart);
        
        // Eliminar después de la animación
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
});