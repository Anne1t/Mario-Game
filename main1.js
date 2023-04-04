function preload(){

}

function setup(){
    canvas=createCanvas(1240, 336);
    video=createCapture(VIDEO);
    video.size(800, 400);
    video.hide();
    video.parent('game_console');
}

function draw(){
    background("#d9e7ff");
    image(video, marioX, marioY, 40, 70);
    
}