// Cambia de sección al hacer clic en el menú o en los botones
document.querySelectorAll('.nav-link, .go-section').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = this.getAttribute('data-section');
    showSection(section);
    // Destaca el enlace activo del menú
    document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
    const navToActivate = document.querySelector('.nav-link[data-section="' + section + '"]');
    if(navToActivate) navToActivate.classList.add('active');
  });
});

// Botones "Volver a inicio"
document.querySelectorAll('.back-home').forEach(btn => {
  btn.addEventListener('click', function() {
    showSection('home');
    document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
    document.querySelector('.nav-link[data-section="home"]').classList.add('active');
  });
});

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('visible'));
  document.getElementById(sectionId).classList.add('visible');
}
// Datos de los proyectos con varias imágenes
const proyectos = [
  {
    imgs: ["https://ik.imagekit.io/michelitaaa0/raybanp%20nbg.png?updatedAt=1747133192879", "https://ik.imagekit.io/michelitaaa0/Captura%20de%20pantalla%202025-05-13%20142556.png?updatedAt=1747139182504", "https://ik.imagekit.io/michelitaaa0/Captura%20de%20pantalla%202025-05-13%20142539.png?updatedAt=1747139182572"],
    title: "Branding para Ray-Ban",
    desc: "Rediseño de la identidad visual de Ray-Ban, enfocada en accesibilidad y modernidad."
  },
  {
    imgs: ["https://ik.imagekit.io/michelitaaa0/Captura%20de%20pantalla%202025-04-01%20130427.png?updatedAt=1747139327110", "https://ik.imagekit.io/michelitaaa0/Captura%20de%20pantalla%202025-04-01%20131034.png?updatedAt=1747139327064", "https://ik.imagekit.io/michelitaaa0/Captura%20de%20pantalla%202025-04-01%20131053.png?updatedAt=1747139327036", "https://ik.imagekit.io/michelitaaa0/Captura%20de%20pantalla%202025-04-01%20131106.png?updatedAt=1747139327009"],
    title: "Etiqueta de vino",
    desc: "Diseño de etiqueta para bodega, combinando ilustración y tipografía elegante."
  },
  {
    imgs: ["https://ik.imagekit.io/michelitaaa0/Captura%20de%20pantalla%202025-05-13%20133609.png?updatedAt=1747136193003", "https://ik.imagekit.io/michelitaaa0/Captura%20de%20pantalla%202025-05-13%20143241.png?updatedAt=1747139590971","https://ik.imagekit.io/michelitaaa0/Captura%20de%20pantalla%202025-05-13%20143251.png?updatedAt=1747139590819"],
    title: "Diseño de App",
    desc: "Interfaz intuitiva y atractiva para aplicación de ahorro para jovenes."
  },
  {
    imgs: ["https://ik.imagekit.io/michelitaaa0/Captura%20de%20pantalla%202025-04-01%20132127.png?updatedAt=1747139730710", "https://ik.imagekit.io/michelitaaa0/Captura%20de%20pantalla%202025-05-13%20143619.png?updatedAt=1747139794731"],
    title: "Brand Guessing",
    desc: "Trabajo que consistia en una creacion de carteles para adivinar la marca."
  }
];

let currentProject = 0;
let currentImage = 0;

// Mostrar modal al hacer clic en un proyecto
document.querySelectorAll('.proyecto-card').forEach(card => {
  card.addEventListener('click', function() {
    currentProject = parseInt(this.getAttribute('data-proyecto'), 10) - 1;
    currentImage = 0;
    showModalImage();
    document.getElementById('modal-title').textContent = proyectos[currentProject].title;
    document.getElementById('modal-desc').textContent = proyectos[currentProject].desc;
    document.getElementById('modal-proyecto').style.display = 'flex';
  });
});

// Función para mostrar la imagen actual del carrusel
function showModalImage() {
  const img = document.getElementById('modal-img');
  img.src = proyectos[currentProject].imgs[currentImage];
}

// Navegación del carrusel
document.querySelector('.carousel-prev').onclick = function(e) {
  e.stopPropagation();
  currentImage = (currentImage - 1 + proyectos[currentProject].imgs.length) % proyectos[currentProject].imgs.length;
  showModalImage();
};
document.querySelector('.carousel-next').onclick = function(e) {
  e.stopPropagation();
  currentImage = (currentImage + 1) % proyectos[currentProject].imgs.length;
  showModalImage();
};

// Cerrar modal
document.querySelector('.close-modal').onclick = function() {
  document.getElementById('modal-proyecto').style.display = 'none';
};
// Cerrar modal al hacer clic fuera del contenido
document.getElementById('modal-proyecto').onclick = function(e) {
  if(e.target === this) this.style.display = 'none';
};
