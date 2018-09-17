'use strict';
( function(){
  var similar = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var popupElement = document.createElement('div');

  function generateRandomNumber(min, max) {
      return Math.floor((Math.random() * (max - min) + 1) + min);
    };

  var renderWizardArtifacts = function (wizard) {
    var content = document.createElement('div');

    content.classList.add('wizard-artifacts');
    content.style.display = 'none';
    content.innerHTML = wizard.artifacts.map(function (it) {
      return it.name;
    }).join('<br>');

    return content;
  };

  popupElement.classList.add('wizard-artifacts');
  popupElement.style.display = 'none';
  document.body.appendChild(popupElement);


  var handleShowHideWizardBag = function (element, wizard) {
    var OFFSET = 15;

    var artifactsContainer = renderWizardArtifacts(wizard);
    document.body.appendChild(artifactsContainer);
    var onMouseMove = function (evt) {
      artifactsContainer.style.top = evt.pageY + OFFSET + 'px';
      artifactsContainer.style.left = evt.pageX + OFFSET + 'px';
    };

    window.popup = function (target, callback) {
      var onMouseOut = function () {
        popupElement.style.display = 'none';
        target.removeEventListener('mousemove', onMouseMove);
        target.removeEventListener('mouseleave', onMouseOut);
      };

      target.addEventListener('mouseenter', function () {
        popupElement.innerHTML = callback();
        popupElement.style.display = 'block';

        target.addEventListener('mousemove', onMouseMove);
        target.addEventListener('mouseleave', onMouseOut);
      });
    }
  };

  var renderWizard = function (wizard) {
   var element = similarWizardTemplate.cloneNode(true);
   var wizardElement = element.querySelector('.wizard');

   element.querySelector('.setup-similar-label').textContent = wizard.name;
   element.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
   element.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

   handleShowHideWizardBag(wizardElement, wizard);

   return element;
 };



   window.render = function (data) {
      var takeNumber = data.length > 4 ? 4 : data.length;
      similarListElement.innerHTML = '';
      for (var i = 0; i < takeNumber; i++) {
        similarListElement.appendChild(renderWizard(data[i]));
      }

      similar.classList.remove('hidden');
  }
})();
