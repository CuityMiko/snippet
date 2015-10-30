/**
 * 为指定canvas 的context绘制网格
 **/
function drawGrid(context, color, stepx, stepy) {
  context.lineWidth = 0.5;
  context.strokeStyle = color;

  for (var i = stepx; i < context.canvas.width; i += stepx) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, context.canvas.height);
    context.stroke();
  }

  for (var i = stepy; i < context.canvas.height; i += stepy) {
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(context.canvas.width, i);
    context.stroke();
  }
}
