
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground, box1, box2, box3;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,600,20);

	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	box1=createSprite(1150, 640, 200,20);

	
	box2=createSprite(1050,600,20,100);


	box3=createSprite(1250,600,20,100);


}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display();
  drawSprites();
  rect(ground.position.x, ground.position.y,width,10);
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
	
}

