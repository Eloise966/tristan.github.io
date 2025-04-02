function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    sec.classList.remove('visible');
    sec.classList.add('hidden');
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('visible');
  }
}
document.addEventListener('DOMContentLoaded', () => showSection('about'));