'use strict';
var WIZARD_SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко',
 ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARD_NAMES =  ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
'Юлия', 'Люпита', 'Вашингтон'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setupDiv = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupDiv.querySelector('.setup-close');
var saveButton = setupDiv.querySelector('.setup-submit');
var userWizardCoat = document.querySelector('.setup-wizard');
var userFireball = document.querySelector('.setup-fireball-wrap');

var wizards = [];

function openSetupWindow(evt) {
    // debugger
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
    // debugger
    if ((evt.type === 'keydown' && evt.keyCode === ENTER_KEYCODE) || (evt.type === 'click')) {
      setupDiv.classList.add('hidden');
    }
};

var userNameInput = setupDiv.querySelector('.setup-user-name');

document.querySelector('.setup-similar').classList.remove('hidden');

function generateRandomNumber(min, max) {
  return Math.floor((Math.random() * (max - min) + 1) + min);
};

for (var i = 0; i < 4; i++){
   wizards.push({
    name:   WIZARD_NAMES[generateRandomNumber(0, WIZARD_NAMES.length - 1)] + WIZARD_SURNAMES[generateRandomNumber(0, WIZARD_SURNAMES.length - 1)] ,
    coatColor: COAT_COLOR[generateRandomNumber(0, COAT_COLOR.length - 1)],
    eyesColor: EYES_COLOR[generateRandomNumber(0, EYES_COLOR.length - 1)],
    fireballColor:   FIREBALL_COLOR [generateRandomNumber(0, FIREBALL_COLOR.length - 1)]
  });
}

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}

setupOpen.addEventListener('click', openSetupWindow);
setupOpen.addEventListener('keydown', openSetupWindow);

saveButton.addEventListener('click', closeSetupWindow);
saveButton.addEventListener('keydown', closeSetupWindow);
setupClose.addEventListener('click', closeSetupWindow);
setupClose.addEventListener('keydown', closeSetupWindow);

userWizardCoat.addEventListener('click', function() {
    var x = generateRandomNumber(0, wizards.length - 1);
  
    userWizardCoat.querySelector('.wizard-coat').style.fill = wizards[x].coatColor;
    userWizardCoat.querySelector('.wizard-eyes').style.fill = wizards[x].eyesColor;
});

userFireball.addEventListener('click', function() {
  var x = generateRandomNumber(0, wizards.length - 1);
  userFireball.style.background = wizards[x].fireballColor;
});
