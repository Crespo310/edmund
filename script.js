const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-menu');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-menu a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
