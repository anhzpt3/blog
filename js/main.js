function openTab(event, tabId) {
  // Get all elements with class="tab-menu" and remove the class "active"
  removeActiveTab('tab-menu');

  // Get all elements with class="tab-content" and remove the class "active"
  removeActiveTab('tab-content');

  // Show the current tab, and add an "active" class
  event.currentTarget.className += ' active';
  document.getElementById(tabId).className += ' active';

  if (tabId === 'Khunglong') {
    initDinoGame();
  }
}

function initDinoGame() {
  let container = document.getElementById('Khunglong');
  let content = container.innerHTML;
  container.innerHTML = content;

  let dinoFrame = document.getElementById('dino-frame');
  dinoFrame.focus();
}

function removeActiveTab(className) {
  let elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove('active');
  }
}

window.addEventListener('keydown', function (e) {
  if (e.code === 'Space' && e.target == document.body) {
    e.preventDefault();
  }
});
