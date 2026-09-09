const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const contactForm = document.querySelector('.contact-form');
const formButton = document.querySelector('.form-button');

if (contactForm && formButton) {
  formButton.addEventListener('click', () => {
    const name = document.querySelector('#nome').value.trim();
    if (!name) {
      alert('Informe seu nome para enviar a mensagem.');
      return;
    }

    alert('Mensagem enviada com sucesso!');
    contactForm.reset();
  });
}
