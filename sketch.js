//Name spaces
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//variables
var bob1, bob2, bob3, bob4, bob5;
var cradle, BG;

//loading the background image
function preload(){
	BG = loadImage("purple.jpg");
}

function setup() {
	createCanvas(600, 500);

	//creating and adding engine to world
	engine = Engine.create();
	world = engine.world;

	//creating all the required objects using their particular classes
	cradle = new Platform(300, 150, 310, 15);
	bob1 = new Bob(180, 350, 30); 
	bob2 = new Bob(240, 350, 30); 
	bob3 = new Bob(300, 350, 30); 
	bob4 = new Bob(360, 350, 30); 
	bob5 = new Bob(420, 350, 30); 

	//joining the cradle with the bobs, using the rope class
	rope1 = new Rope(bob1.body, cradle.body, -120, 0);
	rope2 = new Rope(bob2.body, cradle.body, -60, 0);
	rope3 = new Rope(bob3.body, cradle.body, 0, 0);
	rope4 = new Rope(bob4.body, cradle.body, 60, 0);
	rope5 = new Rope(bob5.body, cradle.body, 120, 0);

	//run the engine
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(BG);

  //required text
  fill(0)
  textFont("Gabriola");
  textSize(65);
  text("NEWTONS CRADLE", 95, 100);
  textSize(30);
  text("KEYS : ← & →", 30, 480);
  text("~DhRiTi♥", 490, 480);
  
  //engine update
  Engine.update(engine);

  //display objects one by one
  cradle.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //display output	
  drawSprites();
}

//Keypressed
function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:600})
	}
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:700,y:-600})
	}
}
//#DhRiTiD♥
//#DD
