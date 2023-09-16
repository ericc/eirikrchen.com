(function() {
  if (localStorage.length > 0) {
    localStorage.clear();
  }
  var body = document.body;
  var themeToggle = document.getElementsByClassName('theme-toggle')[0];
  var prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDarkTheme) {
    body.classList.add('dark');
  } else {
    body.classList.add('light');
  }
  themeToggle.addEventListener('click', function () {
    if (
      themeToggle.style.transform === 'rotate(0deg)' ||
      themeToggle.style.transform === ''
    ) {
      themeToggle.style.transform = 'rotate(180deg)';
    } else {
      themeToggle.style.transform = 'rotate(0deg)';
    }
    if (body.classList.contains('light')) {
      body.classList.remove('light');
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
      body.classList.add('light');
    }
  });
})();
