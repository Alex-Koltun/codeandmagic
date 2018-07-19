window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba (0, 0, 0, 0.7)';
  ctx.fillRect (110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect (100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText ('Ура вы победили!', 160, 25);
  ctx.fillText ('Список результатов:', 160, 40);
var max = -1;
var maxIndex =  -1;
for (var i = 0 ; i < times.length; i++){
  var time = times[i];
  if(time > max){
    max = time;
    maxIndex = i;
  }
}
var histogramHeight = -150;
var step  = histogramHeight / (max - 0);
ctx.fillText ('Худшее время: ' + max.toFixed(2) + 'мс игрока ' + names[maxIndex], 160, 55);
var barWidth = 40;
var indent = 90;
var initialY = 250;
var initialX = 160;
ctx.textBaseLine = 'top';
for (var i = 0; i < times.length; i++) {
  var coordinateX = initialX + indent * i;
  var timesCoordinateY = initialY + times[i] * step +(-1 * barWidth/4 );
  ctx.fillText (Math.round(times[i]), coordinateX, timesCoordinateY);
  var opacity = Math.random().toFixed(2);
  ctx.fillStyle = 'rgba (0, 0, 255,' + opacity  + ')' ;
  if (names[i] === 'Вы') {
    ctx.fillStyle = 'rgba (255, 0, 0, 1)';
  }
  ctx.fillRect (coordinateX, initialY, barWidth, times[i] * step);
  ctx.fillStyle = 'black';
  ctx.fillText (names[i],  initialX + indent * i, initialY + barWidth/2);
  }
}
