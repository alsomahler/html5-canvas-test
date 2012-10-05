window.onload = function() {
	var canvas = document.getElementById("myCanvasOne");
	var context = canvas.getContext("2d");
	
	drawText(canvas, context);
	//drawImage(canvas, context);
	//drawPattern(canvas, context);
	//drawCircle(canvas, context);
	//drawRectangle(context);
	//drawCustomShape(context, true);
	//drawCustomShape(context, false);
	//drawRoundCornder(context);
	// drawLineJoin(context);
	// drawGraph(context);
	// drawBezierCurve(context);
	// drawQuadraticCurve(context);
	// drawArc(canvas, context);
	// drawLine(context);
	//canvas.style.border = "red 1px solid";
};

function drawText(canvas, context) {
    var x = canvas.width / 2;
    var y = canvas.height / 2 - 10;
    var text = "Hello World!";

    context.font = "40pt Calibri";
    // textAlign aligns text horizontally relative to placement
    context.textAlign = "center";
    // textBaseline aligns text vertically relative to font style
    context.textBaseline = "middle";

	// fill text
    context.fillStyle = "yellow";
	context.fillText(text, x, y);
    // stroke text
	context.lineWidth = 1;
    context.strokeStyle = "black";
    context.strokeText(text, x, y);

    // get text metrics
    var metrics = context.measureText(text);
    var width = metrics.width;
    context.font = "20pt Calibri";
    context.textAlign = "center";
    context.fillStyle = "#555";
    context.fillText("(" + width + "px wide)", x, y + 40);
}

function drawImage(canvas, context) {
    var imageObj = new Image();

    imageObj.onload = function() {
      // draw cropped image
      var sourceX = 150;
      var sourceY = 0;
      var sourceWidth = 150;
      var sourceHeight = 150;
      var destWidth = sourceWidth;
      var destHeight = sourceHeight;
      var destX = canvas.width / 2 - destWidth / 2;
      var destY = canvas.height / 2 - destHeight / 2;

      context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    };
    imageObj.src = "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";
}

function drawPattern(canvas, context) {
	var imageObj = new Image();
    imageObj.onload = function() {
		var pattern = context.createPattern(imageObj, "repeat");

		context.rect(10, 10, canvas.width - 20, canvas.height - 20);
		context.fillStyle = pattern;
		context.fill();
    };
    imageObj.src = "http://www.html5canvastutorials.com/demos/assets/wood-pattern.png";
}
function drawCircle(canvas, context) {
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 70;
    var startAngle = Math.PI;
    var endAngle = 2*Math.PI;

    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle, false);
    context.fillStyle = "#8ED6FF";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.closePath();
    context.stroke();
}

function drawRectangle(context) {
    context.beginPath();
    context.rect(188, 50, 200, 100);
	context.font="30px Georgia";
    context.fillStyle = '#8ED6FF';
    context.fillText("Rectangle", 225, 105);
    
    //context.fill();
    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.stroke();
}

function createLinearGradient(context) {
	var startX = 230, startY = 0, 
		endX = 370, endY = 200;

	// add linear gradient
	var gradient = context.createLinearGradient(startX, startY, endX, endY);
	// light blue
	gradient.addColorStop(0, "#8ED6FF");
	// dark blue
	gradient.addColorStop(1, "#004CB3");
	return gradient;
}

function createRadialGradient(context) {
	// add linear gradient
	var startX = 238, startY = 50,
		startRadius = 10,
		endX = 238, endY = 50,
		endRadius = 200;

	var gradient = context.createRadialGradient(startX, startY, startRadius, endX, endY, endRadius);
	// light blue
	gradient.addColorStop(0, "#8ED6FF");
	// dark blue
	gradient.addColorStop(1, "#004CB3");
	return gradient;
}

// boolean gradient: true = linear, false = gradient
function drawCustomShape(context, linear) {
    // begin custom shape
    context.beginPath();
    context.moveTo(170, 80);
    context.bezierCurveTo(130, 100, 130, 150, 230, 150);
    context.bezierCurveTo(250, 180, 320, 180, 340, 150);
    context.bezierCurveTo(420, 150, 420, 120, 390, 100);
    context.bezierCurveTo(430, 40, 370, 30, 340, 50);
    context.bezierCurveTo(320, 5, 250, 20, 250, 50);
    context.bezierCurveTo(200, 5, 150, 20, 170, 80);
    context.closePath();

    if (linear) {
    	context.fillStyle = createLinearGradient(context);
    } else {
    	context.fillStyle = createRadialGradient(context);
    }	

    // complete custom shape    
    context.lineWidth = 5;
    context.fill();
    context.strokeStyle = "black";
    context.stroke();
}

function drawRoundCornder(context) {
    var rectWidth = 200;
    var rectHeight = 100;
    var rectX = 189;
    var rectY = 50;
    var cornerRadius = 50;

    context.beginPath();
    context.moveTo(rectX, rectY);
    context.lineTo(rectX + rectWidth - cornerRadius, rectY);
    context.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + cornerRadius, cornerRadius);
    context.lineTo(rectX + rectWidth, rectY + rectHeight);
    context.lineWidth = 5;
    context.stroke();
}

function drawLineJoin(context) {
    // set line width for all lines
    context.lineWidth = 25;

    // miter line join (left)
    context.beginPath();
    context.moveTo(99, 150);
    context.lineTo(149, 50);
    context.lineTo(199, 150);
    context.lineJoin = "miter";
    context.stroke();

    // round line join (middle)
    context.beginPath();
    context.moveTo(239, 150);
    context.lineTo(289, 50);
    context.lineTo(339, 150);
    context.lineJoin = "round";
    context.stroke();

    // bevel line join (right)
    context.beginPath();
    context.moveTo(379, 150);
    context.lineTo(429, 50);
    context.lineTo(479, 150);
    context.lineJoin = "bevel";
    context.stroke();
}

function drawGraph(context) {
	// Draw Graph
    context.beginPath();
    context.moveTo(100, 20);
    // line 1
    context.lineTo(200, 160);
    // quadratic curve
    context.quadraticCurveTo(230, 200, 250, 120);
    // bezier curve
    context.bezierCurveTo(290, -40, 300, 200, 400, 150);
    // line 2
    context.lineTo(500, 90);
    context.lineWidth = 5;
    context.strokeStyle = "blue";
    context.stroke();
}

function drawBezierCurve(context) {
	// Bezier Curve params
	var controlX1 = 70;
	var controlY1 = 10;
	var controlX2 = 318;
	var controlY2 = 10;
	var endX = 318;
	var endY = 170;

	// Draw Bezier Curve
    context.beginPath();
    context.moveTo(188, 130);
    context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
    context.lineWidth = 10;
    context.strokeStyle = "yellow";
    context.stroke();
}

function drawQuadraticCurve(context) {
	// Quadratic Curve params
	var controlX = 288;
	var controlY = 0;
	var endX = 388;
	var endY = 150;

	// Draw Quadratic Curve	
    context.beginPath();
    context.moveTo(188, 150);
    context.quadraticCurveTo(controlX, controlY, endX, endY);
    context.lineWidth = 10;
    context.strokeStyle = "green";
    context.stroke();
}

function drawArc(canvas, context) {
	// Arc params
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 75;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 1.9 * Math.PI;
    var counterClockwise = false;

	// Draw Arc
	context.beginPath();
	context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
	context.lineWidth = 15;
	context.strokeStyle = "purple";
	context.stroke();
}

function drawLine(context) {
	// Draw Line
	context.beginPath();
	context.moveTo(100, 150);
	context.lineTo(450, 50);
	context.lineWidth = 5;
	context.strokeStyle = "#ff0000";
	context.lineCap = 'round';
	context.stroke();
}