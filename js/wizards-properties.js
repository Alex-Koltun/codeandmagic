'use strict';
  (function(){

  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
   'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var userWizardCoat = document.querySelector('.setup-wizard');
  var userFireball = document.querySelector('.setup-fireball-wrap');
  var renderWizard = function (wizard) {
   var wizardElement = similarWizardTemplate.cloneNode(true);

   wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
   wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
   wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

   return wizardElement;
 }

  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      var index = window.generateRandomNumber(i,  wizards.length - 1);
      fragment.appendChild(renderWizard(wizards[index]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup').querySelector('.setup-similar').classList.remove('hidden');
  });

  userWizardCoat.addEventListener('click', function() {
      var x = generateRandomNumber(0, wizards.length - 1);

      userWizardCoat.querySelector('.wizard-coat').style.fill = wizards[x].coatColor;
      userWizardCoat.querySelector('.wizard-eyes').style.fill = wizards[x].eyesColor;
  });

  userFireball.addEventListener('click', function() {
    var x = generateRandomNumber(0, wizards.length - 1);
    userFireball.style.background = wizards[x].fireballColor;
  });
})();
