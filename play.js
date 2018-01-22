// when window loads, a canvas will be created

window.onload = function() {

 var canvas = document.getElementById("canvas"),

 ctx = canvas.getContext("2d"),

 width = canvas.width = window.innerWidth,

 height = canvas.height = window.innerHeight;





               // trying to add a gradient effect to the lines

               var gradient=ctx.createLinearGradient(0,0,870,400)

               gradient.addColorStop("0.1","green");

               gradient.addColorStop("0.2","blue");

               gradient.addColorStop("1.0","red");

               ctx.lineWidth=5;



               // originally we just filled the rect            

               ctx.fillRect(0,0,width,height);

               ctx.fillStyle = "#FF0000";
               ctx.fillRect(600,400,150,75);
               ctx.strokeStyle = "green";

               ctx.moveTo(0,0);
               ctx.lineTo(200,100);
               ctx.stroke();




               // random lines drawn (100 of them)

               // for(var i=0; i<100; i+=1){

               //                 context.beginPath();

               //                context.moveTo(Math.random()*width, Math.random()*height);

               //                 context.lineTo(Math.random()*10, Math.random()*200);

               //                 context.strokeStyle=gradient;

               //                 context.stroke();

               // }  // end for loop




};  // end onload function