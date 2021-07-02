var mouseEvent = "empty";
var last_position_of_x, last_position_of_y, current_x, current_y;
var NewWidth;
var width;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

colorName = "black";
width_of_line = 2;
width = screen.width;
NewWidth = screen.width - 70;
NewHieght = Screen.height - 300;
console.log(NewWidth)

if (width < 992) {
    document.getElementById("myCanvas").width = NewWidth;
    document.getElementById("myCanvas").height = NewHieght;
    document.body.style.overflow = hidden;
}

canvas.addEventListener("touchstart", touchStart);

function touchStart(e) {
    width_of_line = document.getElementById("width_of_line").value;
    console.log("Wodth Working")
    colorName = document.getElementById("colorB").value;
    console.log(colorName + " is the color")
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

};

canvas.addEventListener("touchmove", MyMoved);

function MyMoved(e) {
    console.log("My TouchMove Start")
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
    console.log(current_x, current_y);
    ctx.beginPath();
    ctx.strokeStyle = colorName;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();

    last_position_of_x = current_x;
    last_position_of_y = current_y;
};


function clearArea() {
    console.log("checking");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

};