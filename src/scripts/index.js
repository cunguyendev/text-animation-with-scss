window.addEventListener('DOMContentLoaded', () => {
  const ui = document.getElementById('ui');

  for (let i = 0; i < 40; i += 1) {
    const node = '<div class="text">Hello world!</div>';

    ui.innerHTML += node;
  }
});
