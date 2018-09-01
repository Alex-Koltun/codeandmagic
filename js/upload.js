(function() {
  var URL = "https://1510.dump.academy/code-and-magick/data"
  window.upload = function(data, onSuccess){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      console.log(xhr.response);
    });

    xhr.open('GET', URL);
    xhr.send();
  };
})();
