'use strict';
( function(){
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
   'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var userWizardCoat = document.querySelector('.wizard-coat');
  var userWizardEyes = document.querySelector('.wizard-eyes');
  var userFireball = document.querySelector('.setup-fireball-wrap');
  var coatColor;
  var eyesColor;
  var wizards = [];
  var lastTimeout;

  var debouce = function(){
    if (lastTimeout) {
     clearTimeout(lastTimeout);
   }
    lastTimeout = setTimeout(function () {
     updateWizards();
   }, 500);
  }
  
  var getRank = function (wizard) {
   var rank = 0;

   if (wizard.colorCoat === coatColor) {
     rank += 2;
   }
   if (wizard.colorEyes === eyesColor) {
     rank += 1;
   }

   return rank;
 }

 var namesComparator = function (left, right) {
   if (left > right) {
     return 1;
   } else if (left < right) {
     return -1;
   } else {
     return 0;
   }
 }

 var updateWizards = function () {
   window.render(wizards.sort(function (left, right) {
     var rankDiff = getRank(right) - getRank(left);
     if (rankDiff === 0) {
       rankDiff = namesComparator(left.name, right.name);
     }
     return rankDiff;
   }));
 }


  function generateRandomNumber(min, max) {
      return Math.floor((Math.random() * (max - min) + 1) + min);
    };
  userWizardCoat.addEventListener('click', function() {
      var x = generateRandomNumber(0, COAT_COLOR.length - 1);
      coatColor = COAT_COLOR[x];
      userWizardCoat.style.fill = coatColor;
      debouce();
  });
  userWizardEyes.addEventListener('click', function() {
      var y = generateRandomNumber(0,EYES_COLOR.length - 1);
      eyesColor = EYES_COLOR[y];
      userWizardEyes.style.fill = eyesColor;
      debouce()
  });

  userFireball.addEventListener('click', function() {
    var x = generateRandomNumber(0, FIREBALL_COLOR.length - 1);
    userFireball.style.background = FIREBALL_COLOR[x];
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

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

  var URL = 'https://js.dump.academy/code-and-magick/data';
  window.backend.load(successHandler, errorHandler);
})()
