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
// Datos de los proyectos
const proyectos = [
  {
    img: "https://ik.imagekit.io/michelitaaa0/raybanp%20nbg.png?updatedAt=1747133192879",
    title: "Branding para Ray-Ban",
    desc: "Rediseño de la identidad visual de Ray-Ban, enfocada en accesibilidad y modernidad."
  },
  {
    img: "https://ik.imagekit.io/michelitaaa0/Instagram%20Story%20Collage%20%20minimalista%20delicado%20y%20estetico.png?updatedAt=1747133091258",
    title: "Etiqueta de vino",
    desc: "Diseño de etiqueta para bodega, combinando ilustración y tipografía elegante."
  },
  {
    img: "proyecto3.jpg",
    title: "Diseño de App",
    desc: "Interfaz intuitiva y atractiva para aplicación de organización personal."
  },
  {
    img: "proyecto4.jpg",
    title: "Ilustración Editorial",
    desc: "Serie de ilustraciones para revista cultural, explorando técnicas mixtas y color."
  }
];

// Mostrar modal al hacer clic en un proyecto
document.querySelectorAll('.proyecto-card').forEach(card => {
  card.addEventListener('click', function() {
    const idx = parseInt(this.getAttribute('data-proyecto'), 10) - 1;
    document.getElementById('modal-img').src = proyectos[idx].img;
    document.getElementById('modal-title').textContent = proyectos[idx].title;
    document.getElementById('modal-desc').textContent = proyectos[idx].desc;
    document.getElementById('modal-proyecto').style.display = 'flex';
  });
});

// Cerrar modal
document.querySelector('.close-modal').onclick = function() {
  document.getElementById('modal-proyecto').style.display = 'none';
};
// Cerrar modal al hacer clic fuera del contenido
document.getElementById('modal-proyecto').onclick = function(e) {
  if(e.target === this) this.style.display = 'none';
};
