// JavaScript to toggle the menu state
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}

// Ensures the menu is closed when the page reloads
window.onload = function() {
  const menu = document.getElementById('menu');
  menu.style.display = 'none'; // Make sure menu is hidden initially
};