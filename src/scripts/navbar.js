// NAVBAR
const nav = document.getElementsByTagName('nav');
export function scroll() {
  if(window.pageYOffset > 50) {
    nav[0].style.background = 'rgba(0, 0, 0, 0.44)';
  }
  else {
    nav[0].style.background = 'rgba(0, 0, 0, 0.1)';
  }
}

// HAMBURGER
// toggle hamburger menu
export function hamburger() {
  const menu = document.getElementById('hamburger-menu');
  const hb = document.getElementById('hamburger');
  hb.classList.toggle('active');
  menu.classList.toggle('active');
}
// close hamburger menu when user clicks out of navbar
const content = document.querySelectorAll('header, main, footer, #hamburger-menu a');
for(const el of content) {
  el.addEventListener('click', () => {
    const menu = document.getElementById('hamburger-menu');
    const hb = document.getElementById('hamburger');
    hb.classList.remove('active');
    menu.classList.remove('active');
  });
}