
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
const image = document.querySelector('.div-izquierdo img');

image.addEventListener('mouseover', () => {
  image.parentElement.classList.add('hover');
});

image.addEventListener('mouseout', () => {
  image.parentElement.classList.remove('hover');
});
