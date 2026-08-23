document.getElementById('theme-toggle').addEventListener('click', function () {
  var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});

matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
  if (!localStorage.getItem('theme')) {
    document.documentElement.dataset.theme = e.matches ? 'light' : 'dark';
  }
});

var avatar = document.getElementById('avatar');
var finePointer = matchMedia('(pointer: fine)').matches;
var reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (avatar && finePointer && !reducedMotion) {
  var MAX_TILT = 10;
  avatar.addEventListener('mousemove', function (e) {
    var r = avatar.getBoundingClientRect();
    var dx = (e.clientX - r.left) / r.width * 2 - 1;
    var dy = (e.clientY - r.top) / r.height * 2 - 1;
    avatar.style.transform = 'rotateY(' + (dx * MAX_TILT).toFixed(2) + 'deg) rotateX(' + (-dy * MAX_TILT).toFixed(2) + 'deg)';
  });
  avatar.addEventListener('mouseleave', function () { avatar.style.transform = ''; });
}
