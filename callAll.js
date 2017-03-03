document.getElementById("abutton").addEventListener("click",validateForm); 

//Validate User Data Input
function validateForm() {
    var input = document.getElementById("data").value;
    if (input == "") {
    	document.getElementById("alertbox").style.display="block";
        //alert("Please enter valid input data e.g 2013 20,2014 18,2015 10,2016 12");
        return false;
    }
    else 
    return callAll();	
};

function callAll(){
	// console.log('Upload',document.getElementById("fileUpload").value);
	var title =document.getElementById("form-title").value;
	document.getElementById("chartTitle").innerHTML = title;
	drawPieChart();
	drawBarChart();
	drawHistogram();
	drawLineGraph();

};

