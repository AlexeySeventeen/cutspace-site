document.addEventListener('click', function (event) {
  // если нет атрибута не реагировать
  if (!event.target.hasAttribute('data-toggle-fullscreen')) return;
  // открыть на весь экран
  document.documentElement.requestFullscreen();
});
