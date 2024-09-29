document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const sideNav = document.getElementById('side-nav');

  navToggle.addEventListener('click', function () {
      sideNav.classList.toggle('open');
  });
});
