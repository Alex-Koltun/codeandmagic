'use strict';
window.openCloseSetup = (function(){
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var saveButton = setup.querySelector('.setup-submit');

  function openSetupWindow(evt) {
    setup.style.top =  120 + 'px';
    setup.style.left =  520 + 'px';

      if ((evt.type === 'keydown' && evt.keyCode === ENTER_KEYCODE) || (evt.type === 'click')) {
        setup.classList.remove('hidden');
        document.addEventListener('keydown', function (evt) {
          if (evt.type === 'keydown' && evt.keyCode === ESC_KEYCODE){
          setup.classList.add('hidden');
        }

      });
    }
  };

  function closeSetupWindow(evt) {
      if ((evt.type === 'keydown' && evt.keyCode === ENTER_KEYCODE) || (evt.type === 'click')) {
        setup.classList.add('hidden');
      }
  };

  var userNameInput = setup.querySelector('.setup-user-name');

  document.querySelector('.setup-similar').classList.remove('hidden');
  setupOpen.addEventListener('click', openSetupWindow);
  setupOpen.addEventListener( 'keydown', openSetupWindow);
  saveButton.addEventListener('click', closeSetupWindow);
  saveButton.addEventListener('keydown', closeSetupWindow);
  setupClose.addEventListener('click', closeSetupWindow);
  setupClose.addEventListener( 'keydown', closeSetupWindow);
})();

(function(){

var shopElement = document.querySelector('.setup-artifacts-shop');
var draggedItem = null;

shopElement.addEventListener('dragstart', function (evt) {
  if (evt.target.tagName.toLowerCase() === 'img') {
    draggedItem = evt.target;
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  }
});

var artifactsElement = document.querySelector('.setup-artifacts');

artifactsElement.addEventListener('dragover', function (evt) {
  evt.preventDefault();
  return false;
});

artifactsElement.addEventListener('drop', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.target.appendChild(draggedItem);
  evt.preventDefault();
});


artifactsElement.addEventListener('dragenter', function (evt) {
  evt.target.style.backgroundColor = 'yellow';
  evt.preventDefault();
});

artifactsElement.addEventListener('dragleave', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.preventDefault();
});
})();
