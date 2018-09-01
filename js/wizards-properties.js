'use strict';
  (function(){
  window.WIZARD_SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко',
   ' Топольницкая', ' Нионго', ' Ирвинг'];
  window.WIZARD_NAMES =  ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];
  window.COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
   'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  window.FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  function generateRandomNumber(min, max) {
      return Math.floor((Math.random() * (max - min) + 1) + min);
    }
    window.wizards = [];

    for (var i = 0; i < 4; i++){
       wizards.push({
        name:   WIZARD_NAMES[generateRandomNumber(0, WIZARD_NAMES.length - 1)] + WIZARD_SURNAMES[generateRandomNumber(0, WIZARD_SURNAMES.length - 1)] ,
        coatColor: COAT_COLOR[generateRandomNumber(0, COAT_COLOR.length - 1)],
        eyesColor: EYES_COLOR[generateRandomNumber(0, EYES_COLOR.length - 1)],
        fireballColor:   FIREBALL_COLOR [generateRandomNumber(0, FIREBALL_COLOR.length - 1)]
      });
    };

  for (var i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    similarListElement.appendChild(wizardElement);
  }
})();
