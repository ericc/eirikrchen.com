(function() {
  var body = document.body;
  var themeToggle = document.getElementsByClassName('theme-toggle')[0];
  var theme = localStorage.getItem('theme');
  var prefersDarkTheme = (window.matchMedia('(prefers-color-scheme: dark)').matches && theme !== 'light') || theme === 'dark';
  if (prefersDarkTheme) {
    body.classList.add('dark');
  } else {
    body.classList.add('light');
  }
  themeToggle.style.display = 'flex';
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
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  });
})();
