const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var rectangle = canvas.getBoundingClientRect();
var currentColorValue = "black", currentStrokeValue = 1;

//fgetting color
function defcolor(c){
    currentColorValue = c; 
    document.getElementById('dispColor').innerHTML = currentColorValue;
}
 //getting Stroke
 function defstroke(s){
    currentStrokeValue = s;
    document.getElementById('dispStroke').innerHTML = currentStrokeValue;
 }

//resizing
canvas.height = window.innerHeight - 160;
canvas.width = window.innerWidth - 50;

//clear the canvas
let clear = document.getElementById('clear').addEventListener('click', clearCanvas);
function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//Checking either the user painting or not
let painting = false;

//start Function
function start(e){
    painting = true;
    draw(e);
}

//stop function
function stop(){
    painting = false;
    ctx.beginPath();
}

//drawing function
function draw({clientX: x, clientY: y}){
    if(!painting) return;
    ctx.lineWidth = currentStrokeValue;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColorValue;
    ctx.lineTo(x-8 ,y-8);       //margin 8 from top and left
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x-8, y-8);    
};

//main functin
canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);
