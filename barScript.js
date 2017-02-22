
//var barCanvas = document.getElementById("barCanvas");
//barCanvas.width = 400;
//barCanvas.height = 300;
//var ctx = barCanvas.getContext("2d");

function drawline() {
      ctx.beginPath();
      ctx.moveTo(100, 10);
      ctx.lineTo(100, 390);
      ctx.strokeStyle = "brown";
      ctx.stroke();
}

var canvas ;
var context ;
var Val_Max;
var Val_Min;
var sections;
var xScale;
var yScale;
var y;
		// values of each item on the graph
var itemName = [ "USA", "China", "India", "Japan" , "Germany"];
var itemValue = [ 14, 7, 4.2, 4, 3.5 ];

function init() {
		// intialize values for each variables
	sections = 5;
	Val_Max = 14;
	var stepSize = 1;
	var columnSize = 50;
	var rowSize = 60;
	var margin = 10;
	var header = "In Millon ₦" 
		//
		
var barCanvas = document.getElementById("barCanvas");
barCanvas.width = 500;
barCanvas.height = 300;
var ctx = barCanvas.getContext("2d");

	ctx.fillStyle = "#5F9EA0;"
	
	yScale = (barCanvas.height - columnSize - margin) / (Val_Max);
	xScale = (barCanvas.width - rowSize) / (sections + 1);
	
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
		ctx.lineTo(barCanvas.width,y)
		count++;
	}
	ctx.stroke();
	
		// print names of each data entry
	ctx.font = "20 pt Verdana";
	ctx.textBaseline="bottom";
	for (i=0;i<5;i++) {
		computeHeight(itemValue[i]);
		ctx.fillText(itemName[i], xScale * (i+1),y - margin);
	}
	
		// shadow for graph's bar lines with color and offset
  
	ctx.fillStyle="#5F9EA0;";
  ctx.shadowColor = 'rgba(18,18,18, 0.4)';
  
  //shadow offset along X and Y direction 
	ctx.shadowOffsetX = 9;
	ctx.shadowOffsetY = 3;
  
		// translate to bottom of graph  inorder to match the data 
  ctx.translate(0,barCanvas.height - margin);
	ctx.scale(xScale,-1 * yScale);
  
		// draw each graph bars	
	for (i=0;i<5;i++) {
	  ctx.fillStyle="#5F9EA0";
		ctx.fillRect(i+1, 0, 0.3, itemValue[i]);
	}
}

function computeHeight(value) {
	y = barCanvas.height - value * yScale ;	
}

document.getElementById.innerHTML(init());

