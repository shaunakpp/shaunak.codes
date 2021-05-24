function expandGroups(event) {
  var els = document.getElementsByClassName('title');
  if (event === 'touchend') {
    event.preventDefault();
  }
  Array.prototype.forEach.call(els, function(el) {
    el.addEventListener(event, function () {
      el.parentElement.classList.toggle('expand');
      if (el.classList.contains('flash')) {
        el.classList.remove('flash');
      }
    }, false);
  });
}

function toggleDisplayMode(isDarkMode) {
  var toggleBtn = document.getElementsByClassName('toggle-mode')[0];
  if (isDarkMode) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    toggleBtn.textContent = '[Light Mode]'
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    toggleBtn.textContent = '[Dark Mode]'
  }
}

(function () {
  window.addEventListener('load', function() {
    expandGroups('click');

    var prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    toggleDisplayMode(prefersDarkScheme.matches);

    var toggleBtn = document.getElementsByClassName('toggle-mode')[0];
    toggleBtn.addEventListener('click', function () {
      toggleDisplayMode(document.body.classList.contains('light'));
    })
  }, false);
})();
