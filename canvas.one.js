window.onload = function() {
	var canvas = document.getElementById("myCanvasOne");
	var context = canvas.getContext("2d");

	// do stuff here
	context.beginPath();
	context.moveTo(100, 150);
	context.lineTo(450, 50);
	context.stroke();

	//canvas.style.border = "red 1px solid";
};