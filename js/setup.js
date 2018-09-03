'use strict';
window.openCloseSetup = (function(){
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var saveButton = setup.querySelector('.setup-submit');
  var form = setup.querySelector('.setup-wizard-form');

  var errorHandler = function (errorMessage) {
     var node = document.createElement('div');
     node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
     node.style.position = 'absolute';
     node.style.left = 0;
     node.style.right = 0;
     node.style.fontSize = '30px';

     node.textContent = errorMessage;
     document.body.insertAdjacentElement('afterbegin', node);
   };
//


var successHandler = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

  window.backend.load(successHandler, errorHandler);

  function openSetupWindow(evt) {
    setup.style.top =  15 + '%';
    setup.style.left =  50 + '%';

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


  // var userNameInput = setup.querySelector('.setup-user-name');

  document.querySelector('.setup-similar').classList.remove('hidden');
  setupOpen.addEventListener('click', openSetupWindow);
  setupOpen.addEventListener( 'keydown', openSetupWindow);
  saveButton.addEventListener('click', closeSetupWindow);
  saveButton.addEventListener('keydown', closeSetupWindow);
  setupClose.addEventListener('click', closeSetupWindow);
  setupClose.addEventListener( 'keydown', closeSetupWindow);
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function (response) {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
