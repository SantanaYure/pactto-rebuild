document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const sidebar = document.querySelector('.sidebar');

  menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  function handleResize() {
    if (window.innerWidth > 720) {
      sidebar.classList.remove('active');
    }
  }

  window.addEventListener('resize', handleResize);
});