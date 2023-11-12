const canvas = document.querySelector("#myCanvas");
const context = canvas.getContext("2d");

context.fillStyle = "#a82203";
context.beginPath();

context.arc(150, 100, 50, 0, 2 * 3.14);
context.fill();

context.strokeStyle = "black";
context.strokeRect(0, 0, 300, 200);
