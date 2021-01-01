var helicopterIMG, helicopterSprite, packageSprite, packageSprite2,packageIMG;
var packageBody, packageBody2 ,ground, boxGround, boxGroundSprite, boxS1, boxS2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageSprite2=createSprite(width/2, 200, 10,10);
	packageSprite2.addImage(packageIMG)
	packageSprite2.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);

	packageBody2 = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody2);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	//create the box
	boxGroundSprite = createSprite(400, 650, 200, 20);
	boxGroundSprite.shapeColor = color(0, 0, 255);

	boxGround = Bodies.rectangle(400,650,200,20, {isStatic: true});
	World.add(world, boxGround);

	boxS1 = createSprite(290, 610, 20, 100);
	boxS1.shapeColor = color(0, 0, 255);
	boxS1 = Bodies.rectangle(290, 610, 20, 100);
	World.add(world, boxS1);

	boxS2 = createSprite(510, 610, 20, 100);
	boxS2.shapeColor = color(0, 0, 255);
	boxS2 = Bodies.rectangle(510, 610, 20, 100);
	World.add(world, boxS2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite2.x= packageBody2.position.x 
  packageSprite2.y= packageBody2.position.y 

  keyPressed();

 console.log(packageBody2);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	//the first thing inside the brackets is for the body
	//the second thing is the true and false
	Matter.Body.setStatic(packageBody, false);
  }

if(keyCode === DOWN_ARROW && packageBody.position.y > 600){
	Matter.Body.setStatic(packageBody2, false);
}

}



