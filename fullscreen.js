// Keep browser fullscreen state separate from the story so replay never exits it.
(() => {
  const root = document.documentElement;
  const button = document.querySelector('.fullscreen-toggle');
  const status = document.querySelector('.fullscreen-status');
  const activeElement = () => document.fullscreenElement || document.webkitFullscreenElement;
  const expanded = () => root.classList.contains('fullscreen-fallback');

  function sync() {
    const active = Boolean(activeElement()) || expanded();
    button.setAttribute('aria-pressed', String(active));
    button.setAttribute('aria-label', active ? 'Exit fullscreen' : 'Enter fullscreen');
    button.textContent = active ? 'EXIT FULL' : 'FULL SCREEN';
  }

  button.addEventListener('click', async () => {
    status.textContent = '';
    try {
      if (expanded()) {
        root.classList.remove('fullscreen-fallback');
      } else if (activeElement()) {
        const exit = document.exitFullscreen || document.webkitExitFullscreen;
        await exit.call(document);
      } else {
        const enter = root.requestFullscreen || root.webkitRequestFullscreen;
        if (enter) await enter.call(root);
        else {
          root.classList.add('fullscreen-fallback');
          status.textContent = 'Expanded view enabled. Press Escape to exit. Browser fullscreen is unavailable on this device.';
        }
      }
    } catch {
      status.textContent = 'Your browser could not enter or exit fullscreen. Please try again using the fullscreen button.';
    }
    sync();
  });

  document.addEventListener('fullscreenchange', sync);
  document.addEventListener('webkitfullscreenchange', sync);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && expanded()) {
      root.classList.remove('fullscreen-fallback');
      sync();
      button.focus();
    }
  });
  sync();
})();
