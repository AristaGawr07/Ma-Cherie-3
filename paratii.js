document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
    
    // Configuración
    const particles = [];
    const particleCount = 200;
    let showText = false;
    let returnToHeart = false;
    let buttonPressCount = 0;
    let fireworks = [];
    let messages = [
        "Eres lo mejor que me ha pasado",
        "Mi corazón late por ti",
        "Eres mi sueño hecho realidad",
        "No cambio lo nuestro por nada",
        "Eres mi persona favorita",
        "Contigo todo es mejor",
        "Me haces inmensamente feliz",
        "Eres mi pensamiento favorito",
        "Amo cada momento a tu lado",
        "Quiero toda una vida contigo"
    ];
    let currentMessage = "";
    let showFinalQuestion = false;
    let showLoveMessage = false;
    
    // Crear partículas
    function createParticles() {
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                size: Math.random() * 5 + 2,
                color: `hsl(${Math.random() * 60 + 330}, 100%, 50%)`,
                speedX: Math.random() * 6 - 3,
                speedY: Math.random() * 6 - 3,
                targetX: null,
                targetY: null,
                originalTargetX: null,
                originalTargetY: null
            });
        }
    }
    
    // Dibujar corazón
    function drawHeart(x, y, size) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(
            x, y - size / 4,
            x - size / 2, y - size / 2,
            x - size / 2, y
        );
        ctx.bezierCurveTo(
            x - size / 2, y + size / 3,
            x, y + size / 1.5,
            x, y + size
        );
        ctx.bezierCurveTo(
            x, y + size / 1.5,
            x + size / 2, y + size / 3,
            x + size / 2, y
        );
        ctx.bezierCurveTo(
            x + size / 2, y - size / 2,
            x, y - size / 4,
            x, y
        );
        ctx.closePath();
    }
    
    // Animación principal
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Mostrar mensaje de amor si está activo
        if (showLoveMessage) {
            drawLoveMessage();
            return;
        }
        
        // Mostrar pregunta final si está activa
        if (showFinalQuestion) {
            drawFinalQuestion();
            return;
        }
        
        // Mostrar mensaje romántico si existe
        if (currentMessage) {
            drawRomanticMessage();
        }
        
        // Mostrar fuegos artificiales
        updateFireworks();
        
        // Mostrar corazón o texto "FyA"
        if (!showText) {
            drawHeart(canvas.width / 2, canvas.height / 2, 130);
            
            particles.forEach(particle => {
                if (particle.targetX === null || particle.targetY === null) {
                    const point = getRandomPointOnHeart();
                    particle.targetX = point.x;
                    particle.targetY = point.y;
                    particle.originalTargetX = point.x;
                    particle.originalTargetY = point.y;
                }
                
                particle.x += (particle.targetX - particle.x) * 0.05;
                particle.y += (particle.targetY - particle.y) * 0.05;
                
                if (Math.abs(particle.x - particle.targetX) < 1 && 
                    Math.abs(particle.y - particle.targetY) < 1) {
                    const point = getRandomPointOnHeart();
                    particle.targetX = point.x;
                    particle.targetY = point.y;
                    particle.originalTargetX = point.x;
                    particle.originalTargetY = point.y;
                }
                
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            });
        } else {
            if (!returnToHeart) {
                formText("FyA");
            } else {
                particles.forEach(particle => {
                    particle.targetX = particle.originalTargetX;
                    particle.targetY = particle.originalTargetY;
                    particle.x += (particle.targetX - particle.x) * 0.05;
                    particle.y += (particle.targetY - particle.y) * 0.05;
                    
                    ctx.fillStyle = particle.color;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                    
                    if (particles.every(p => 
                        Math.abs(p.x - p.targetX) < 1 && 
                        Math.abs(p.y - p.targetY) < 1
                    )) {
                        returnToHeart = false;
                        showText = false;
                    }
                });
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // Función para formar texto
    function formText(text) {
        const fontSize = 120;
        ctx.font = `bold ${fontSize}px Arial`;
        
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        
        tempCtx.font = `bold ${fontSize}px Arial`;
        tempCtx.textAlign = 'center';
        tempCtx.textBaseline = 'middle';
        tempCtx.fillStyle = 'black';
        tempCtx.fillText(text, tempCanvas.width / 2, tempCanvas.height / 2);
        
        const textPoints = [];
        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;
        
        for (let y = 0; y < tempCanvas.height; y += 2) {
            for (let x = 0; x < tempCanvas.width; x += 2) {
                const index = (y * tempCanvas.width + x) * 4;
                if (data[index + 3] > 0) {
                    textPoints.push({ x, y });
                }
            }
        }
        
        particles.forEach((particle, index) => {
            if (index < textPoints.length) {
                particle.color = `hsl(${Math.random() * 30 + 350}, 100%, 60%)`;
                particle.targetX = textPoints[index].x + (Math.random() * 6 - 3);
                particle.targetY = textPoints[index].y + (Math.random() * 6 - 3);
            } else {
                const randomPoint = textPoints[Math.floor(Math.random() * textPoints.length)];
                particle.targetX = randomPoint.x + (Math.random() * 6 - 3);
                particle.targetY = randomPoint.y + (Math.random() * 6 - 3);
            }
            
            particle.x += (particle.targetX - particle.x) * 0.1;
            particle.y += (particle.targetY - particle.y) * 0.1;
            
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 1.3, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    
    // Punto aleatorio en el corazón
    function getRandomPointOnHeart() {
        const angle = Math.random() * Math.PI * 2;
        const size = 130;
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        
        let t = angle;
        let px = 16 * Math.pow(Math.sin(t), 3);
        let py = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
        
        px = px * (size / 16) + x;
        py = py * (size / 16) + y;
        
        return { x: px, y: py };
    }
    
    // Fuegos artificiales de corazones
    function createFirework(x, y) {
        const firework = {
            x: x,
            y: y,
            particles: []
        };
        
        for (let i = 0; i < 50; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 5 + 2;
            
            firework.particles.push({
                x: x,
                y: y,
                size: Math.random() * 4 + 2,
                color: `hsl(${Math.random() * 60 + 330}, 100%, 50%)`,
                speedX: Math.cos(angle) * speed,
                speedY: Math.sin(angle) * speed,
                life: 100
            });
        }
        
        fireworks.push(firework);
    }
    
    // Actualizar fuegos artificiales
    function updateFireworks() {
        for (let i = fireworks.length - 1; i >= 0; i--) {
            const firework = fireworks[i];
            
            for (let j = firework.particles.length - 1; j >= 0; j--) {
                const p = firework.particles[j];
                
                p.x += p.speedX;
                p.y += p.speedY;
                p.speedY += 0.1; // Gravedad
                p.life--;
                
                // Dibujar corazón pequeño en lugar de partícula
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.scale(0.2, 0.2);
                ctx.fillStyle = p.color;
                drawHeart(0, 0, p.size * 10);
                ctx.fill();
                ctx.restore();
                
                if (p.life <= 0) {
                    firework.particles.splice(j, 1);
                }
            }
            
            if (firework.particles.length === 0) {
                fireworks.splice(i, 1);
            }
        }
    }
    
    // Dibujar mensaje romántico
    function drawRomanticMessage() {
        ctx.save();
        
        // Fondo del mensaje
        ctx.fillStyle = 'rgba(255, 230, 230, 0.9)';
        ctx.strokeStyle = '#ff6b8b';
        ctx.lineWidth = 3;
        
        // Forma de corazón irregular para el mensaje
        ctx.beginPath();
        ctx.moveTo(canvas.width/2, canvas.height/2 - 50);
        ctx.bezierCurveTo(
            canvas.width/2 + 100, canvas.height/2 - 120,
            canvas.width/2 + 150, canvas.height/2 + 20,
            canvas.width/2, canvas.height/2 + 100
        );
        ctx.bezierCurveTo(
            canvas.width/2 - 150, canvas.height/2 + 20,
            canvas.width/2 - 100, canvas.height/2 - 120,
            canvas.width/2, canvas.height/2 - 50
        );
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Texto del mensaje
        ctx.fillStyle = '#d23669';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Dividir mensaje en líneas si es muy largo
        const words = currentMessage.split(' ');
        let lines = [];
        let currentLine = words[0];
        
        for (let i = 1; i < words.length; i++) {
            const testLine = currentLine + ' ' + words[i];
            const metrics = ctx.measureText(testLine);
            
            if (metrics.width < 200) {
                currentLine = testLine;
            } else {
                lines.push(currentLine);
                currentLine = words[i];
            }
        }
        lines.push(currentLine);
        
        // Dibujar cada línea
        lines.forEach((line, index) => {
            ctx.fillText(line, canvas.width/2, canvas.height/2 - 20 + (index * 30));
        });
        
        ctx.restore();
    }
    
    // Dibujar pregunta final
    function drawFinalQuestion() {
        ctx.save();
        
        // Fondo
        ctx.fillStyle = 'rgba(255, 240, 240, 0.95)';
        ctx.strokeStyle = '#ff1493';
        ctx.lineWidth = 4;
        
        ctx.beginPath();
        ctx.roundRect(canvas.width/2 - 200, canvas.height/2 - 100, 400, 200, 20);
        ctx.fill();
        ctx.stroke();
        
        // Texto de la pregunta
        ctx.fillStyle = '#c71585';
        ctx.font = 'bold 28px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('¿Quieres seguir siendo mi novia?', canvas.width/2, canvas.height/2 - 40);
        
        // Botón Sí
        ctx.fillStyle = '#ff6b8b';
        ctx.beginPath();
        ctx.roundRect(canvas.width/2 - 80, canvas.height/2 + 10, 70, 40, 10);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 20px Arial';
        ctx.fillText('Sí', canvas.width/2 - 45, canvas.height/2 + 35);
        
        // Botón No
        ctx.fillStyle = '#ff6b8b';
        ctx.beginPath();
        ctx.roundRect(canvas.width/2 + 10, canvas.height/2 + 10, 70, 40, 10);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = 'white';
        ctx.fillText('No', canvas.width/2 + 45, canvas.height/2 + 35);
        
        ctx.restore();
    }
    
    // Dibujar mensaje final de amor
    function drawLoveMessage() {
        ctx.save();
        
        // Fondo animado
        const gradient = ctx.createRadialGradient(
            canvas.width/2, canvas.height/2, 0,
            canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height)/2
        );
        gradient.addColorStop(0, '#ff1493');
        gradient.addColorStop(1, '#ff69b4');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Texto principal
        ctx.fillStyle = 'white';
        ctx.font = 'bold 50px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('¡TE AMOOO!', canvas.width/2, canvas.height/2);
        
        // Texto secundario
        ctx.font = 'italic 24px Arial';
        ctx.fillText('Más de lo que las palabras pueden expresar', canvas.width/2, canvas.height/2 + 60);
        
        // Corazones flotantes
        for (let i = 0; i < 10; i++) {
            const size = Math.random() * 30 + 20;
            const x = Math.random() * canvas.width;
            const y = (Math.random() * canvas.height + Date.now()/50) % canvas.height;
            
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(Math.sin(Date.now()/500 + i) * 0.2);
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
            drawHeart(0, 0, size);
            ctx.fill();
            ctx.restore();
        }
        
        ctx.restore();
    }
    
    // Temporizador para texto "FyA"
    setTimeout(() => {
        showText = true;
        setTimeout(() => returnToHeart = true, 5000);
    }, 30000);
    
    // Evento del botón
    const button = document.querySelector('.heart-button');
    button.addEventListener('click', function(e) {
        // Posición del click para fuegos artificiales
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        // Crear fuegos artificiales en posición aleatoria
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                createFirework(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height
                );
            }, i * 300);
        }
        
        // Mostrar mensaje romántico aleatorio
        currentMessage = messages[Math.floor(Math.random() * messages.length)];
        setTimeout(() => currentMessage = "", 3000);
        
        // Contar clicks
        buttonPressCount++;
        
        // Mostrar pregunta final después de 10 clicks
        if (buttonPressCount >= 10 && !showFinalQuestion && !showLoveMessage) {
            showFinalQuestion = true;
            animate(); // Forzar redibujado
        }
    });
    
    // Eventos para los botones Sí/No (delegación de eventos)
    canvas.addEventListener('click', function(e) {
        if (!showFinalQuestion) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Botón Sí
        if (x >= canvas.width/2 - 80 && x <= canvas.width/2 - 10 &&
            y >= canvas.height/2 + 10 && y <= canvas.height/2 + 50) {
            showFinalQuestion = false;
            showLoveMessage = true;
            animate();
        }
        
        // Botón No
        if (x >= canvas.width/2 + 10 && x <= canvas.width/2 + 80 &&
            y >= canvas.height/2 + 10 && y <= canvas.height/2 + 50) {
            // Mover el botón No a posición aleatoria
            const noBtn = {
                x: Math.random() * (canvas.width - 70),
                y: Math.random() * (canvas.height - 40)
            };
            
            // Asegurarse que no salga de la pantalla
            noBtn.x = Math.max(10, Math.min(noBtn.x, canvas.width - 80));
            noBtn.y = Math.max(10, Math.min(noBtn.y, canvas.height - 50));
            
            // Actualizar posición en el dibujo
            setTimeout(() => {
                drawFinalQuestion = function() {
                    // ... (código anterior igual)
                    
                    // Botón No en nueva posición
                    ctx.fillStyle = '#ff6b8b';
                    ctx.beginPath();
                    ctx.roundRect(noBtn.x, noBtn.y, 70, 40, 10);
                    ctx.fill();
                    ctx.stroke();
                    
                    ctx.fillStyle = 'white';
                    ctx.fillText('No', noBtn.x + 35, noBtn.y + 25);
                    
                    // ... (resto del código igual)
                };
                animate();
            }, 0);
        }
    });
    
    // Efecto hover en botón principal
    button.addEventListener('mouseover', function(e) {
        const x = e.clientX - button.getBoundingClientRect().left;
        const y = e.clientY - button.getBoundingClientRect().top;
        
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('span');
            heart.innerHTML = '❤️';
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            heart.style.position = 'absolute';
            heart.style.fontSize = `${Math.random() * 10 + 10}px`;
            heart.style.opacity = '0';
            heart.style.transform = 'translateY(0) rotate(0deg)';
            heart.style.transition = 'all 1s ease-out';
            
            button.appendChild(heart);
            
            setTimeout(() => {
                heart.style.opacity = '1';
                heart.style.transform = `translateY(-${Math.random() * 50 + 50}px) rotate(${Math.random() * 360}deg)`;
            }, 10);
            
            setTimeout(() => heart.remove(), 1000);
        }
    });
    
    // Iniciar
    createParticles();
    animate();
});