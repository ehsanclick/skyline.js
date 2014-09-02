function Skyline(data, canvas){
  this.data = data;
  this.canvas = canvas;
  this.ctx    = canvas.getContext('2d');

  this.process();
}

Skyline.prototype.process = function(compositeOp){
  var i   = 0;
  var len = this.data.length;
  var canvasHeight = this.canvas.height;
  var x, y;
  var ctx = this.ctx;
  var building;
  compositeOp = compositeOp || 'source-out'
  x = 0;
  y = canvasHeight;

  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  ctx.beginPath();
  // https://developer.mozilla.org/samples/canvas-tutorial/6_1_canvas_composite.html
  ctx.globalCompositeOperation = compositeOp;
  ctx.strokeStyle = '#000';
  ctx.fillStyle   = '#fff';
  ctx.lineWidth   = 5;
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
  ctx.lineTo(this.canvas.width, y)

  ctx.closePath();
  ctx.fill();
  ctx.stroke();
};
