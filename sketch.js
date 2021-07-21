

var a = prompt('Enter the first variable: ');
var b = prompt("Enter the second number: ");

function setup(){
 createCanvas(400,400);
  var b2 = createButton("click here to Swap");
  b2.mousePressed(swap);


  }


function swap(){
  [a,b] = [b,a];

  console.log("Number a is "+a)
  console.log("Number b is "+b)
}
