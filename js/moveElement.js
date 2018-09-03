(function(){
var shopElement = document.querySelector('.setup-artifacts-shop');
var draggedItem = null;
function dropFunction (evt) {
  evt.target.style.backgroundColor = '';
  evt.target.style.outline = '';
  evt.target.appendChild(draggedItem);
  evt.preventDefault();
};
function dragenterFunction (evt) {
  evt.target.style.backgroundColor = 'yellow';
  evt.target.style.outline = '2px dashed red'
  evt.preventDefault();
};
function dragleaveFunction (evt) {
  evt.target.style.backgroundColor = '';
  evt.target.style.outline = '';
  evt.preventDefault();
};

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

artifactsElement.addEventListener('drop',dropFunction);
artifactsElement.addEventListener('dragenter',dragenterFunction);
artifactsElement.addEventListener('dragleave',dragleaveFunction);
})();
