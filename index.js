window.onload = () => {
  const checkboxes  = document.getElementsByTagName('input');
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', () => {
    for (checkbox of checkboxes) {
      checkbox.checked = false;
    }
  })
}