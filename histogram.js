var Val_Max;
var Val_Min;
var sections;
var xScale;
var yScale;
var y;

function drawHistogram() {
//Get UserInput
var myData={};
var dataInput =document.getElementById("data").value;
console.log(dataInput);
var arrData= dataInput.split(',');
for(var i=0; i<arrData.length; i++)
{
  var arr2Data= arrData[i].split(' ');
  myData[arr2Data[0]]=parseInt(arr2Data[1]);
   
}
	var itemName =Object.keys(myData);
	var itemValue =Object.values(myData);
	sections =5;
	Val_Max =20;
	var stepSize =1;
	var columnSize =50;
	var rowSize =60;
	var margin =10;
	var header ="In Millon =N="; 	
	var hCanvas = document.getElementById("hCanvas");
	hCanvas.width = 500;
	hCanvas.height = 300;
	var ctx = hCanvas.getContext("2d");
    //set chart spacing and bg line colours
	ctx.fillStyle = "#5F9EA0;"
	yScale = (hCanvas.height - columnSize - margin) / (Val_Max);
	xScale = (hCanvas.width - rowSize) / (sections + 1);
	ctx.strokeStyle="#5F9EA0;"; // background dark lines
	ctx.fillStyle ="#5F9EA0";
	ctx.beginPath();
		// column names 
	ctx.font = "20 pt Arial;"
	ctx.fillText(header, 1,columnSize - margin);
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
		computeHeight(itemValue[i]);
		ctx.fillText(itemName[i], xScale * (i+1),y - margin);
	}
			
  // translate to bottom of graph  inorder to match the data 
  ctx.translate(0,hCanvas.height - margin);
	ctx.scale(xScale,-1 * yScale);
  
	// draw each Histogram bars	
	for (i=0;i<5;i++) {
	  ctx.fillStyle="#8FBC8F";
		ctx.fillRect(i+1, 0, 1.1, itemValue[i]);
	}

}

function computeHeight(value) {
	y = hCanvas.height - value * yScale ;	
}

//document.getElementById.innerHTML(init());

