var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png");
	bgImg = loadImage("starNight.png");

}

function setup() {
	createCanvas(800, 750);


	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.setCollider("rectangle", 0, 0, 1000, 200)

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	myengine = Engine.create();
	world = myengine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(myengine);

}


function draw() {
  background(bgImg);

  Engine.update(myengine);

  keyPressed();

  drawSprites();

}

function keyPressed() {

	fairy.velocityX=0
	
	if (keyDown("right")) {
		fairy.velocityX = 2;
	  }
	  if (keyDown("left")) {
		fairy.velocityX = -2;
	  }
	  if (keyDown("down")) {
		star.velocityY = 3;
	  }
	  if (star.isTouching(fairy)) {
		star.velocityY = 0;
	  }

}
