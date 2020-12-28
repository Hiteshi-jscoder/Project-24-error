var paperball, dustbin, groundline;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paper(250,100,43);
	groundline = new Ground(500,350,1000,10)

	Engine.run(engine);


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperball.display();
  groundline.display();
 }



