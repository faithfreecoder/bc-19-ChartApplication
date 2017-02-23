var dataObject =[];
var outputObject ={};

const getData= function getData(){
  var dataInput = document.getElementById("data");
  var txtOutput = document.getElementById("txtOutput");
  
  outputObject = dataInput.value.split(",");
  
  txtOutput.value = outputObject;
  
  };