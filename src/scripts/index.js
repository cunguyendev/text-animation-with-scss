window.addEventListener('DOMContentLoaded', () => {
  const ui = document.getElementById('ui');
  const numberLines = ui.getAttribute('data-number-line');

  for (let i = 0; i < +numberLines; i += 1) {
    const node = '<div class="text">Hello world!</div>';

    ui.innerHTML += node;
  }
});
