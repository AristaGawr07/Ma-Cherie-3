document.addEventListener('DOMContentLoaded', function() {
    // ... (código existente de creación de corazones flotantes)

    // Función para crear el corazón que explota
    function createExplodingHeart() {
        // Crear corazón principal
        const mainHeart = document.createElement('div');
        mainHeart.className = 'exploding-heart';
        mainHeart.style.position = 'fixed';
        mainHeart.style.top = '50%';
        mainHeart.style.left = '50%';
        mainHeart.style.transform = 'translate(-50%, -50%) rotate(45deg)';
        mainHeart.style.width = '80px';
        mainHeart.style.height = '80px';
        mainHeart.style.backgroundColor = '#ff5252';
        mainHeart.style.opacity = '0';
        mainHeart.style.transition = 'all 0.5s ease-out';
        
        // Pseudoelementos para la forma del corazón
        mainHeart.innerHTML = `
            <style>
                .exploding-heart:before, .exploding-heart:after {
                    content: '';
                    position: absolute;
                    width: 80px;
                    height: 80px;
                    background-color: inherit;
                    border-radius: 50%;
                }
                .exploding-heart:before {
                    top: -40px;
                    left: 0;
                }
                .exploding-heart:after {
                    top: 0;
                    left: -40px;
                }
            </style>
        `;
        
        document.body.appendChild(mainHeart);
        
        // Animación de explosión
        setTimeout(() => {
            mainHeart.style.opacity = '1';
            mainHeart.style.transform = 'translate(-50%, -50%) rotate(45deg) scale(1.2)';
            
            setTimeout(() => {
                mainHeart.style.opacity = '0';
                mainHeart.style.transform = 'translate(-50%, -50%) rotate(45deg) scale(0.5)';
                createMiniHearts(mainHeart.style.backgroundColor);
                
                setTimeout(() => {
                    mainHeart.remove();
                }, 500);
            }, 1000);
        }, 5000); // Mostrar después de 5 segundos
    }
    
    // Función para crear corazones pequeños
    function createMiniHearts(color) {
        const colors = ['#ff5252', '#ff4081', '#e040fb', '#7c4dff', '#536dfe'];
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const miniHeart = document.createElement('div');
                miniHeart.className = 'mini-heart';
                miniHeart.style.position = 'fixed';
                miniHeart.style.top = '50%';
                miniHeart.style.left = '50%';
                miniHeart.style.width = '20px';
                miniHeart.style.height = '20px';
                miniHeart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] || color;
                miniHeart.style.transform = 'rotate(45deg)';
                miniHeart.style.opacity = '0';
                miniHeart.style.transition = 'all 1s ease-out';
                
                // Pseudoelementos para la forma del corazón
                miniHeart.innerHTML = `
                    <style>
                        .mini-heart:before, .mini-heart:after {
                            content: '';
                            position: absolute;
                            width: 20px;
                            height: 20px;
                            background-color: inherit;
                            border-radius: 50%;
                        }
                        .mini-heart:before {
                            top: -10px;
                            left: 0;
                        }
                        .mini-heart:after {
                            top: 0;
                            left: -10px;
                        }
                    </style>
                `;
                
                document.body.appendChild(miniHeart);
                
                // Posición final aleatoria
                const angle = Math.random() * Math.PI * 2;
                const distance = 100 + Math.random() * 100;
                const finalX = Math.cos(angle) * distance;
                const finalY = Math.sin(angle) * distance;
                
                // Animación
                setTimeout(() => {
                    miniHeart.style.opacity = '1';
                    miniHeart.style.transform = `rotate(45deg) translate(${finalX}px, ${finalY}px) scale(0.7)`;
                    
                    setTimeout(() => {
                        miniHeart.style.opacity = '0';
                        setTimeout(() => {
                            miniHeart.remove();
                        }, 1000);
                    }, 2000);
                }, 50);
            }, i * 100);
        }
    }
    
    // Iniciar animaciones
    createExplodingHeart();
    
    // Repetir cada 30 segundos
    setInterval(createExplodingHeart, 30000);
});