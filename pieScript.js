function drawPieChart()
{
    var myCanvas;
    var ctx;
    var myData={};
    myCanvas = document.getElementById("pieCanvas");
    myCanvas.width = 200;
    myCanvas.height = 300;
    ctx = myCanvas.getContext("2d");
            

    var myData={};
    var dataInput =document.getElementById("data").value;
    console.log(dataInput);
    var arrData= dataInput.split(',');
    for(var i=0; i<arrData.length; i++)
        {
            var arr2Data= arrData[i].split(' ');
            myData[arr2Data[0]]=parseInt(arr2Data[1]);
               
        }
    var data = myData;
    console.log(data);
    console.log(myData);
    //Define function to drawline
    function drawLine(ctx, startX, startY, endX, endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }

    function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.stroke();
    }

    function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX,centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }


    // {
    //      "ClassicalMusic": 12,
    //      "AlternativeRock": 20,
    //      "Pop": 5,
    //      "categazz": 12
    //  };


    // console.log('mydata', myData);
    // console.log('myInput', dataInput);
    //console.log('data', data);

    var Piechart = function(options){
        this.options = options;
        this.canvas = options.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.colors = options.colors;
        this.draw = function(){
            var total_value = 0;
            var color_index = 0;
            for (var categ in this.options.data){
                var val = this.options.data[categ];
                total_value += val;
            }
     
            var start_angle = 0;
            for (categ in this.options.data){
                val = this.options.data[categ];
                var slice_angle = 2 * Math.PI * val / total_value;
     
                drawPieSlice(
                    this.ctx,
                    this.canvas.width/2,
                    this.canvas.height/2,
                    Math.min(this.canvas.width/2,this.canvas.height/2),
                    start_angle,
                    start_angle+slice_angle,
                    this.colors[color_index%this.colors.length]
                );
     
                start_angle += slice_angle;
                color_index++;
            }

            //Add text to Pie Chart
            start_angle = 0;
        for (categ in this.options.data){
            val = this.options.data[categ];
            slice_angle = 2 * Math.PI * val / total_value;
            var pieRadius = Math.min(this.canvas.width/2,this.canvas.height/2);
            var labelX = this.canvas.width/2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle/2);
            var labelY = this.canvas.height/2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle/2);
            
            var labelText = Math.round(100 * val / total_value);
            this.ctx.fillStyle = "white";
            this.ctx.font = "bold 20px Arial";
            this.ctx.fillText(labelText+"%", labelX,labelY);
            start_angle += slice_angle;
        }
        }
            if (this.options.legend){
            color_index = 0;
            var legendHTML = "";
            for (categ in this.options.data){
                legendHTML += "<div><span style='display:inline-block;width:20px;background-color:"+this.colors[color_index++]+";'>&nbsp;</span> "+categ+"</div>";
            }
            this.options.legend.innerHTML = legendHTML;
        }

        }
    
            
    //Make instance(object) of Piechart class        
               
        var pieLegend = document.getElementById("legend");
        var myPiechart = new Piechart(
            {
                //var data={};
                canvas:myCanvas,
                data:data,
                colors:["#ff69B4","#cd5c5c", "#4b0082","#8fbc8f"],
                legend:pieLegend
            }
         );
        myPiechart.draw();

}
