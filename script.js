function showSection(sectionId) {
  document.querySelectorAll('.section').forEach((section) => {
    section.classList.remove('visible');
  });
  document.getElementById(sectionId).classList.add('visible');
}