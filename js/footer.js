let footer = document.querySelector('.footer')
let header = document.querySelector('.masthead')

if (header.offsetWidth) {
  footer.style.width = header.offsetWidth + 'px';
  window.addEventListener("resize", function() {footer.style.width = header.offsetWidth + 'px';}, false);
}
