var lCanvas = document.getElementById("lineCanvas");
var cxt = lCanvas.getContext("2d");
lCanvas.width =500;
lCanvas.height =300;
cxt.fillStyle = "#8b4513";
cxt.font = "20 pt Verdana";
	

var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;
		// Values for the Data Plot, they can also be obtained from a external file
var Apple =  [100, 102, 87,120, 100, 123, 100, 90, 87, 91, 93, 88];
var Samsung = [30, 50, 70, 80, 90, 100, 95, 91, 85, 92, 99, 130];
var Nokia =   [20, -10, -20, -25, -40, 5, 10, 28, 30, 43, 65, 80];

function drawLineGraph() {
		// set these values for your data 
	sections = 12;
	Val_max = 130;
	Val_min = -40;
	var stepSize = 10;
	var columnSize = 50;
	var rowSize = 50;
	var margin = 10;
	var xAxis = [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] 
		
		//Calculate spacing between parameters on the X and Y axis

	yScale = (lCanvas.height - columnSize - margin) / (Val_max - Val_min);
	xScale = (lCanvas.width - rowSize) / sections;
	
	cxt.strokeStyle="#708090"; // color of grid lines
	cxt.beginPath();
		// print Parameters on X axis, and grid lines on the graph
	for (i=1;i<=sections;i++) {
		var x = i * xScale;
		cxt.fillText(xAxis[i], x,columnSize - margin);
		cxt.moveTo(x, columnSize);
		cxt.lineTo(x, lCanvas.height - margin);
	}
		// print row header and draw horizontal grid lines
	var count =  0;
	for (scale=Val_max;scale>=Val_min;scale = scale - stepSize) {
		var y = columnSize + (yScale * count * stepSize); 
		cxt.fillText(scale, margin,y + margin);
		cxt.moveTo(rowSize,y)
		cxt.lineTo(lCanvas.width,y)
		count++;
	}
	cxt.stroke();
	
	cxt.translate(rowSize,lCanvas.height + Val_min * yScale);
	cxt.scale(1,-1 * yScale);
	
		// Color of each dataplot items
		
	cxt.strokeStyle="#FF0066";
	plotData(Apple);
	cxt.strokeStyle="#9933FF";
	plotData(Samsung);
	cxt.strokeStyle="#000";
	plotData(Nokia);
}

function plotData(dataSet) {
	cxt.beginPath();
	cxt.moveTo(0, dataSet[0]);
	for (i=1;i<sections;i++) {
		cxt.lineTo(i * xScale, dataSet[i]);
	}
	cxt.stroke();
}
document.getElementById.innerHTML(drawLineGraph())
document.getElementById("lineLegend");
