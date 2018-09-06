'use strict';
  window.wizardProperties = (function(){

  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
   'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var userWizardCoat = document.querySelector('.wizard-coat');
  var userWizardEyes = document.querySelector('.wizard-eyes');
  var userFireball = document.querySelector('.setup-fireball-wrap');
  function generateRandomNumber(min, max) {
      return Math.floor((Math.random() * (max - min) + 1) + min);
    };

      var coatColor;
  userWizardCoat.addEventListener('click', function() {
      var x = generateRandomNumber(0, COAT_COLOR.length - 1);
      coatColor = COAT_COLOR[x];
      userWizardCoat.style.fill = coatColor;
      updateWizards();
  });
  var eyesColor;
  userWizardEyes.addEventListener('click', function() {
      var y = generateRandomNumber(0,EYES_COLOR.length - 1);
      eyesColor = EYES_COLOR[y];
      userWizardEyes.style.fill = eyesColor;
      updateWizards();
  });

  userFireball.addEventListener('click', function() {
    var x = generateRandomNumber(0, FIREBALL_COLOR.length - 1);
    userFireball.style.background = FIREBALL_COLOR[x];
  });
});
