document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const closeBtn = document.querySelector('.close-btn');

  function toggleMenu() {
    sidebar.classList.toggle('open');
  }

  menuToggle.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  // Fechar o menu ao clicar fora dele
  document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && sidebar.classList.contains('open')) {
      toggleMenu();
    }
  });
});