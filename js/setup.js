'use strict';
window.openCloseSetup = (function(){
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var saveButton = setup.querySelector('.setup-submit');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template');
  var form = setup.querySelector('.setup-wizard-form');

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

  var userNameInput = setup.querySelector('.setup-user-name');

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
