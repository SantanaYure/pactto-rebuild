document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const closeBtn = document.querySelector('.close-btn');
  const loginIcon = document.querySelector('.login-icon');
  const dropdown = document.querySelector('.dropdown');

  function toggleMenu() {
    sidebar.classList.toggle('open');
  }

  function toggleDropdown() {
    dropdown.classList.toggle('show');
  }

  menuToggle.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);
  loginIcon.addEventListener('click', toggleDropdown);

  // Fechar o menu ao clicar fora dele
  document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && sidebar.classList.contains('open')) {
      toggleMenu();
    }

    if (!loginIcon.contains(event.target) && !dropdown.contains(event.target) && dropdown.classList.contains('show')) {
      toggleDropdown();
    }
  });
});
