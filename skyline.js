function Skyline(data, canvas){
  this.data = data;
  this.canvas = canvas;
  this.ctx    = canvas.getContext('2d');

  this.process();
}

Skyline.prototype.process = function(){
  var i   = 0;
  var len = this.data.length;
  var canvasHeight = this.canvas.height;
  var x, y;
  var ctx = this.ctx;
  var building;
  x = 0;
  y = canvasHeight;

  ctx.beginPath();
  ctx.strokeStyle = '#000';
  ctx.lineWidth   = 2;
  ctx.moveTo(x,y);
  for(; i<len; i++) {
    building = this.data[i];
    x = building.x1
    y = canvasHeight;
    ctx.lineTo(x,y);
    y = canvasHeight - building.height;
    ctx.lineTo(x,y);
    x = building.x2;
    ctx.lineTo(x,y);
    y = canvasHeight;
    ctx.lineTo(x,y);
  }

  ctx.closePath();
  ctx.stroke();
};
