const toggleBtn = document.querySelector('.theme_toggle');
const lightIcon = document.querySelector('.light_icon');
const darkIcon = document.querySelector('.dark_icon');

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('svg');

  const isOpen = content.classList.contains('open');

  // Close all other accordions
  document.querySelectorAll('.accordion-content').forEach(el => {
    el.classList.remove('open');
    el.style.maxHeight = null;
    el.previousElementSibling.setAttribute('aria-expanded', false);
    el.previousElementSibling.querySelector('svg').style.transform = 'rotate(0deg)';
  });

  // If the clicked one was not open, open it
  if (!isOpen) {
    content.classList.add('open');
    content.style.maxHeight = content.scrollHeight + 'px';
    button.setAttribute('aria-expanded', true);
    icon.style.transform = 'rotate(180deg)';
  }
}


    AOS.init({
    duration: 800,     // animation duration in ms
    once: false,       // whether animation should happen every time
    offset: 120,       // how far from the top before triggering
  });
