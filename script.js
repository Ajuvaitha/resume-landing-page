// Simple JS to open/close mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

if(hamburger){
  hamburger.addEventListener('click', () => {
    mobileMenu.setAttribute('aria-hidden','false');
  });
}
if(mobileClose){
  mobileClose.addEventListener('click', () => {
    mobileMenu.setAttribute('aria-hidden','true');
  });
}

// close menu when clicking outside the side panel
mobileMenu.addEventListener('click', (e) => {
  if(e.target === mobileMenu){
    mobileMenu.setAttribute('aria-hidden','true');
  }
});
