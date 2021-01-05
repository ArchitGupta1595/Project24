var log1,log2,log3;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,370,1200,20);
    log1=new Dustbin(1000,370,200,20);
	log2=new Dustbin(1090,310,20,100);
    log3=new Dustbin(910,310,20,100);
	ball= new Paper(200,320);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  ball.display();
  log1.display();
  log2.display();
  log3.display();
 
  drawSprites();
 
}

function keyPressed(){
     if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80});
	 }
}

