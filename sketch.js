const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var cradle, BG;

function preload(){
	BG = loadImage("purple.jpg");
}

function setup() {
	createCanvas(600, 500);
	
	engine = Engine.create();
	world = engine.world;

	cradle = new Platform(300, 150, 310, 15);
	bob1 = new Bob(180, 350, 30); 
	bob2 = new Bob(240, 350, 30); 
	bob3 = new Bob(300, 350, 30); 
	bob4 = new Bob(360, 350, 30); 
	bob5 = new Bob(420, 350, 30); 

	rope1 = new Rope(bob1.body, cradle.body, -120, 0);
	rope2 = new Rope(bob2.body, cradle.body, -60, 0);
	rope3 = new Rope(bob3.body, cradle.body, 0, 0);
	rope4 = new Rope(bob4.body, cradle.body, 60, 0);
	rope5 = new Rope(bob5.body, cradle.body, 120, 0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(BG);
  
Engine.update(engine);

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

  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:600})
	}
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:700,y:-600})
	}
}