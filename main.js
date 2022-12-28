status=""
Input=""
function setup(){
    canvas=createCanvas(480,380)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(480,380)
    video.hide()
}
function draw(){
    image(video,0,0,480,380)
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modalLoaded)
    document.getElementById("status").innerHTML="status:detecting Objects"
    Input="input"
}
function modalLoaded(){
    console.log("Modal is loaded")
    status=true
}