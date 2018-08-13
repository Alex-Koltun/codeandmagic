'use strict';
window.openCloseSetup = (function(){
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setupDiv = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupDiv.querySelector('.setup-close');
  var saveButton = setupDiv.querySelector('.setup-submit');


  function openSetupWindow(evt) {
      if ((evt.type === 'keydown' && evt.keyCode === ENTER_KEYCODE) || (evt.type === 'click')) {
        setupDiv.classList.remove('hidden');
        document.addEventListener('keydown', function (evt) {
          if (evt.type === 'keydown' && evt.keyCode === ESC_KEYCODE){
          setupDiv.classList.add('hidden');
        }
      });
    }
  };

  function closeSetupWindow(evt) {
      if ((evt.type === 'keydown' && evt.keyCode === ENTER_KEYCODE) || (evt.type === 'click')) {
        setupDiv.classList.add('hidden');
      }
  };

  var userNameInput = setupDiv.querySelector('.setup-user-name');

  document.querySelector('.setup-similar').classList.remove('hidden');
  setupOpen.addEventListener('click', openSetupWindow);
  setupOpen.addEventListener( 'keydown', openSetupWindow);
  saveButton.addEventListener('click', closeSetupWindow);
  saveButton.addEventListener('keydown', closeSetupWindow);
  setupClose.addEventListener('click', closeSetupWindow);
  setupClose.addEventListener( 'keydown', closeSetupWindow);
})();

// (function () {
//   var setup = document.querySelector('.setup');
//   var setupOpen = document.querySelector('.setup-open');
//   var setupClose = setup.querySelector('.setup-close');
//
//   var onPopupEscPress = function(evt) {
//     window.util.isEscEvent(evt, closePopup);
//   };
//
//   setupOpen.addEventListener('click', function() {
//     openPopup();
//   });
//
//   setupOpen.addEventListener('keydown', function(evt) {
//     window.util.isEnterEvent(evt, openPopup);
//   });
//
//   setupClose.addEventListener('click', function() {
//     closePopup();
//   });
//
//   setupClose.addEventListener('keydown', function(evt) {
//     window.util.isEnterEvent(evt, closePopup);
//   });
//
//   var openPopup = function() {
//     setup.classList.remove('hidden');
//     document.addEventListener('keydown', onPopupEscPress);
//   };
//
//   var closePopup = function() {
//     setup.classList.add('hidden');
//     document.removeEventListener('keydown', onPopupEscPress);
//   };
// })();
