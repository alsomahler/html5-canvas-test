window.onload = function() {

	drawCanvasOne();
	drawCanvasTwo();
	drawCanvasThree();
 	drawCanvasFour();
// 	drawCanvasFive();
// 	drawCanvasSix();
// 	drawCanvasSeven();
};

function drawCanvasOne() {
	var canvas = document.getElementById("myCanvasOne");
	var context = canvas.getContext("2d");
    context.beginPath();
    context.rect(188, 50, 200, 100);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.stroke();
};

function drawCanvasTwo() {
	var canvas = document.getElementById("myCanvasTwo");
	var context = canvas.getContext("2d");

    var centerX = 0;
    var centerY = 0;
    var radius = 50;

    // save state
    context.save();

    // translate context
    context.translate(canvas.width / 2, canvas.height / 2);

    // scale context horizontally
    context.scale(2, 1);

    // draw circle which will be stretched into an oval
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

    // restore to original state to avoid other items to be scaled
    context.restore();

    // apply styling
    context.fillStyle = "#FFD68E";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
};

function drawCanvasThree() {
	var canvas = document.getElementById("myCanvasThree");
	var context = canvas.getContext("2d");
	drawShapes(canvas, context);
};

function drawCanvasFour() {
	// var canvas = document.getElementById("myCanvasFour");
	// var context = canvas.getContext("2d");
	drawModel();
};

function drawCanvasFive() {
	var canvas = document.getElementById("myCanvasFive");
	var context = canvas.getContext("2d");
	drawRectangle(canvas, context);
};

function drawCanvasSix() {
	var canvas = document.getElementById("myCanvasSix");
	var context = canvas.getContext("2d");
	drawRectangle(canvas, context);
};

function drawCanvasSeven() {
	var canvas = document.getElementById("myCanvasSeven");
	var context = canvas.getContext("2d");
	drawRectangle(canvas, context);
};

function drawRectangle(context, startX, startY, color) {
    context.beginPath();
    context.rect(startX, startY, 100, 50);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
};

function drawOval(context, centerX, centerY, color) {
    var radius = 25;

    // save state
    context.save();

    // scale context horizontally
    context.scale(2, 1);

    // draw circle which will be stretched into an oval
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

    // restore to original state to avoid other items to be scaled
    context.restore();

    // apply styling
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.stroke();
};

function drawShapes(canvas, context) {
	drawRectangle(context, 75, 10, '#CCFF00');
	drawRectangle(context, 75, 75, '#3300CC');
	drawRectangle(context, 75, 140, '#FF9900');
	drawOval(context, 125, 35,  "#FF00CC");
	drawOval(context, 125, 100, "#00CCCC");
	drawOval(context, 125, 165, "#CCCCCC");
	drawRectangle(context, 320, 10, '#663399');
	drawRectangle(context, 320, 75, '#666600');
	drawRectangle(context, 320, 140, '#0099FF');
	drawOval(context, 245, 35,  "#FFFF66");
	drawOval(context, 245, 100, "#FF0033");
	drawOval(context, 245, 165, "#33CC66");
};

function drawModel() {
	var $ = go.GraphObject.make;  // for conciseness in defining templates

	myDiagram =
		$(go.Diagram, "myCanvasFour",  // must be the ID or reference to div
			{ contentAlignment: go.Spot.Center });

	// define all of the gradient brushes
	var graygrad = new go.Brush(go.Brush.Linear);
	graygrad.addColorStop(0, "#F5F5F5");
	graygrad.addColorStop(1, "#F1F1F1");

	var bluegrad = new go.Brush(go.Brush.Linear);
	bluegrad.addColorStop(0, "#CDDAF0");
	bluegrad.addColorStop(1, "#91ADDD");

	var yellowgrad = new go.Brush(go.Brush.Linear);
	yellowgrad.addColorStop(0, "#FEC901");
	yellowgrad.addColorStop(1, "#FEA200");

	var lavgrad = new go.Brush(go.Brush.Linear);
	lavgrad.addColorStop(0, "#EF9EFA");
	lavgrad.addColorStop(1, "#A570AD");

	// define the Node template for non-terminal nodes
	myDiagram.nodeTemplate =
		$(go.Node, go.Panel.Auto,
			{ isShadowed: true },
			new go.Binding("text", "key"),
		// define the node's outer shape
		$(go.Shape,
			{ figure: "RoundedRectangle",
			fill: graygrad,
			stroke: "#D8D8D8" },
	  		new go.Binding("fill", "color")),
		// define the node's text
		$(go.TextBlock,
			{ margin: 5, font: "bold 11px Helvetica, bold Arial, sans-serif" },
			new go.Binding("text", "key")));

	// define the Link template
	myDiagram.linkTemplate =
		$(go.Link,  // the whole link panel
			{ selectable: false },
			$(go.Shape));  // the link shape

	// create the model for the double tree
	var model = new go.GraphLinksModel();
	model.nodeDataArray = [
	  { key: "CenterCause", color: lavgrad },
	  { key: "Barrier", dir: "left", color: bluegrad },
	    { key: "task1", dir: "left" },
	    { key: "task2", dir: "left" },
	    { key: "Task3", dir: "left", color: bluegrad },
	      { key: "delivery1", dir: "left" },
	      { key: "delivery2", dir: "left" },
	  { key: "Right1", dir: "right", color: yellowgrad },
	    { key: "Right2", dir: "right", color: yellowgrad },
	      { key: "leaf5", dir: "right" },
	      { key: "leaf6", dir: "right" },
	      { key: "leaf7", dir: "right" },
	    { key: "leaf8", dir: "right" },
	    { key: "leaf9", dir: "right" }
	];
	model.linkDataArray = [
	  { from: "CenterCause", to: "Barrier" },
	    { from: "Barrier", to: "task1" },
	    { from: "Barrier", to: "task2" },
	    { from: "Barrier", to: "Task3" },
	      { from: "Task3", to: "delivery1" },
	      { from: "Task3", to: "delivery2" },
	  { from: "CenterCause", to: "Right1" },
	    { from: "Right1", to: "Right2" },
	      { from: "Right2", to: "leaf5" },
	      { from: "Right2", to: "leaf6" },
	      { from: "Right2", to: "leaf7" },
	    { from: "Right1", to: "leaf8" },
	    { from: "Right1", to: "leaf9" }
	];
	myDiagram.model = model;

	// split the nodes and links into two Sets, depending on direction
	var leftParts = new go.Set(go.Part);
	var rightParts = new go.Set(go.Part);
	separatePartsByLayout(myDiagram, leftParts, rightParts);

	// create and perform two TreeLayouts, one in each direction,
	// on the different subsets of nodes and links
	var layout1 =
	  $(go.TreeLayout,
	    { angle: 180,
	      arrangement: go.TreeLayout.ArrangementFixedRoots,
	      setsPortSpot: false });

	var layout2 =
	  $(go.TreeLayout,
	    { angle: 0,
	      arrangement: go.TreeLayout.ArrangementFixedRoots,
	      setsPortSpot: false });

	layout1.doLayout(leftParts);
	layout2.doLayout(rightParts);
}

function separatePartsByLayout(diagram, leftParts, rightParts) {
	var nit = diagram.nodes;
	while (nit.next()) {
		var node = nit.value;
		var dir = node.data.dir;
		if (dir === "left" || dir === undefined) leftParts.add(node);
		if (dir === "right" || dir === undefined) rightParts.add(node);
		// note that the ROOT node will be in both Sets
	}
	var lit = diagram.links;
	while (lit.next()) {
		var link = lit.value;
		// decide on layout based on Link.toNode's direction
		var dir = link.toNode.data.dir;
		if (dir === "left" || dir === undefined) leftParts.add(link);
		if (dir === "right" || dir === undefined) rightParts.add(link);
	}
}