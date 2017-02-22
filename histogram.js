/*get and assign canvas properties to a variable, set width and height and get 2d context.
*/
var hCanvas = document.getElementById("hCanvas");
hCanvas.width = 500;
hCanvas.height = 300;
var ctx = hCanvas.getContext("2d");


var Val_Max;
var Val_Min;
var sections;
var xScale;
var yScale;
var y;
		// values of each item on the graph
var itemName = [ "USA", "China", "India", "Japan" , "Germany"];
var itemValue = [ 14, 7, 4.2, 4, 3.5 ];

const setHeight = function setHeight(value) {
	y = hCanvas.height - value * yScale ;	
};


function drawHistogram() {
		// intialize values for each variables
	sections = 5;
	Val_Max = 14;
	var stepSize = 1;
	var columnSize = 50;
	var rowSize = 60;
	var margin = 10;
	var header = "In Millon ₦"; 
		//


	ctx.fillStyle = "#5F9EA0;"
	
	yScale = (hCanvas.height - columnSize - margin) / (Val_Max);
	xScale = (hCanvas.width - rowSize) / (sections + 1);
	
	ctx.strokeStyle="#5F9EA0;"; // background black lines
	ctx.fillStyle ="#5F9EA0";
	ctx.beginPath();
		// column names 
	ctx.font = "20 pt Arial;"
	ctx.fillText(header, 0,columnSize - margin);
		// draw lines in the background
	ctx.font = "20 pt Helvetica"
	var count =  0;
	for (scale=Val_Max;scale>=0;scale = scale - stepSize) {
		y = columnSize + (yScale * count * stepSize);
		ctx.fillStyle="#5F9EA0";
		ctx.fillText(scale, margin,y + margin);
		ctx.moveTo(rowSize,y)
		ctx.lineTo(hCanvas.width,y)
		count++;
	}
	ctx.stroke();
	
		// print names of each data entry
	ctx.font = "20 pt Verdana";
	ctx.textBaseline="bottom";
	for (i=0;i<5;i++) {
		setHeight(itemValue[i]);
		ctx.fillText("   "+itemName[i], xScale * (i+1),y - margin);
	}
	
  
		// translate to bottom of graph  inorder to match the data 
  ctx.translate(0,hCanvas.height - margin);
	ctx.scale(xScale,-1 * yScale);
  
		// draw each graph bars	
	for (i=0;i<5;i++) {
	  ctx.fillStyle="#5F9EA0";
		ctx.fillRect(i+1, 0,1.1, itemValue[i]);
	}
}


document.getElementById.innerHTML(drawHistogram());

