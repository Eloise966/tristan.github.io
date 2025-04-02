function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    sec.classList.remove('visible');
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('visible');
  }
}
document.addEventListener('DOMContentLoaded', () => showSection('home'));