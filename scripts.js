// Array con los IDs de las imágenes de Google Drive
const driveImageIds = [
    '14QYvE5g32pzUBkBbTfSKrQU9Kfm6dnXH',
    '14QnW74nMItiTg8ZFF7WtdLyxLugugrlT'
];

// Generamos las URLs de Google Drive correctamente
const imageUrls = driveImageIds.map(id => 
    `https://drive.google.com/uc?export=view&id=${id}`
);

// Variables para controlar el ciclo de imágenes
let currentImageIndex = 0;
const imageContainer = document.getElementById('imageContainer');
const expandedImage = document.getElementById('expandedImage');
const closeBtn = document.getElementById('closeBtn');

// Función para mostrar la imagen actual
function showCurrentImage() {
    if (imageUrls.length === 0) {
        console.error('No hay URLs de imágenes definidas');
        return;
    }

    const url = imageUrls[currentImageIndex];
    expandedImage.onload = function() {
        imageContainer.classList.add('active');
    };
    expandedImage.onerror = function() {
        console.error('Error al cargar la imagen:', url);
        advanceToNextImage();
    };
    expandedImage.src = url;
    
    setTimeout(() => {
        if (imageContainer.classList.contains('active')) {
            imageContainer.classList.remove('active');
            setTimeout(advanceToNextImage, 2000);
        }
    }, 15000);
}

// Función para avanzar a la siguiente imagen
function advanceToNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    showCurrentImage();
}

// Evento para cerrar la imagen manualmente
closeBtn.addEventListener('click', () => {
    imageContainer.classList.remove('active');
    setTimeout(advanceToNextImage, 1000);
});

// Animaciones iniciales
setTimeout(() => {
    document.querySelector('.initial-message').style.animation = 'fadeOut 1s forwards';
    setTimeout(() => {
        document.querySelector('.initial-message').style.display = 'none';
    }, 1000);
}, 3000);

setTimeout(() => {
    document.querySelector('.main-message').classList.remove('hidden');
}, 4000);

// Cambiar el color de fondo gradualmente
let hue = 0;
setInterval(() => {
    hue = (hue + 0.5) % 360;
    document.body.style.background = `linear-gradient(135deg, hsl(${hue}, 100%, 95%) 0%, hsl(${hue}, 100%, 90%) 100%)`;
}, 100);

// Iniciar el ciclo de imágenes después de que se complete la animación inicial
setTimeout(() => {
    if (imageUrls.length > 0) {
        showCurrentImage();
    } else {
        console.log('No hay imágenes para mostrar');
    }
}, 6000);
// Efecto de fuegos artificiales para el enlace
function createLinkFireworks(e) {
  const link = e.target;
  const rect = link.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const colors = ['#ff55ff', '#ff00ff', '#ff66aa', '#ff0088', '#ff3377'];
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'firework-particle';
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 50;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    particle.style.left = `${centerX}px`;
    particle.style.top = `${centerY}px`;
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.setProperty('--tx', `${tx}px`);
    particle.style.setProperty('--ty', `${ty}px`);
    
    // Tamaño aleatorio
    const size = 3 + Math.random() * 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    document.body.appendChild(particle);
    
    // Eliminar después de la animación
    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
}

// Asignar eventos al enlace
document.addEventListener('DOMContentLoaded', () => {
  const fancyLink = document.querySelector('.fancy-link');
  if (fancyLink) {
    fancyLink.addEventListener('mouseenter', createLinkFireworks);
    fancyLink.addEventListener('touchstart', createLinkFireworks);
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('heartsCanvas');
  const ctx = canvas.getContext('2d');
  const container = document.querySelector('.game-link-container');
  
  // Set canvas size
  function resizeCanvas() {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Heart particles
  const hearts = [];
  const heartColors = ['#ff69b4', '#ff1493', '#db7093', '#ffb6c1', '#d23369'];
  
  class Heart {
    constructor() {
      this.reset();
      this.y = Math.random() * canvas.height;
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = -20;
      this.size = Math.random() * 15 + 5;
      this.speed = Math.random() * 2 + 1;
      this.color = heartColors[Math.floor(Math.random() * heartColors.length)];
      this.opacity = Math.random() * 0.6 + 0.4;
      this.wobble = Math.random() * 5;
      this.wobbleSpeed = Math.random() * 0.02 + 0.01;
      this.wobbleOffset = Math.random() * Math.PI * 2;
    }
    
    update() {
      this.y += this.speed;
      this.wobbleOffset += this.wobbleSpeed;
      this.x += Math.sin(this.wobbleOffset) * this.wobble * 0.5;
      
      if (this.y > canvas.height + 20) {
        this.reset();
      }
    }
    
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      
      // Draw a simple heart shape
      ctx.beginPath();
      const topCurveHeight = this.size * 0.3;
      ctx.moveTo(this.x, this.y + topCurveHeight);
      // Left top curve
      ctx.bezierCurveTo(
        this.x, this.y, 
        this.x - this.size/2, this.y, 
        this.x - this.size/2, this.y + topCurveHeight
      );
      // Left bottom curve
      ctx.bezierCurveTo(
        this.x - this.size/2, this.y + this.size, 
        this.x, this.y + this.size, 
        this.x, this.y + this.size - topCurveHeight
      );
      // Right bottom curve
      ctx.bezierCurveTo(
        this.x, this.y + this.size, 
        this.x + this.size/2, this.y + this.size, 
        this.x + this.size/2, this.y + topCurveHeight
      );
      // Right top curve
      ctx.bezierCurveTo(
        this.x + this.size/2, this.y, 
        this.x, this.y, 
        this.x, this.y + topCurveHeight
      );
      
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }
  
  // Create hearts
  for (let i = 0; i < 15; i++) {
    hearts.push(new Heart());
  }
  
  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (const heart of hearts) {
      heart.update();
      heart.draw();
    }
    
    requestAnimationFrame(animate);
  }
  
  animate();
});
