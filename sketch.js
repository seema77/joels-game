var bk;

function preload(){
bkImg=loadImage("bk.jpg");
r1Img=loadImage("r1.png");
r2Img=loadImage("r2.png");
}

function setup(){
createCanvas(1200,600); // width height

racket1=createSprite(130,300,10,10);
racket1.addImage(r1Img);
racket1.scale=0.5; // left or right button

racket2=createSprite(1000,280,10,10);
racket2.addImage(r2Img);
racket2.scale=0.3; // up or down button // create ball
}

function draw(){
background(bkImg);
drawSprites()
}