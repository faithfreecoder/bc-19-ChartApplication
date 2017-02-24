document.getElementById("abutton").addEventListener("click",callAll); 

function callAll(){
	// console.log('docData',document.getElementById("data").value);
	// console.log('Upload',document.getElementById("fileUpload").value);
	var title =document.getElementById("form-title").value;
	document.getElementById("chartTitle").innerHTML = title;
	drawPieChart();
	drawBarChart();
	drawHistogram();
	drawLineGraph();

};

