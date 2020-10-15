
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var blob1,blob2,blob3,blob4,blob5;
var roof;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	blob1 = new Blob(255,400,50);
	blob2 = new Blob(305,400,50);
	blob3 = new Blob(355,400,50);
	blob4 = new Blob(405,400,50);
	blob5 = new Blob(455,400,50);
	
	roof = new Roof(355,150,260,20);

	blobDiameter = 30;

	rope1 = new Rope(blob1.body,roof.body,-(blobDiameter*3.4),0);
	rope2 = new Rope(blob2.body,roof.body,-(blobDiameter*1.7),0);
	rope3 = new Rope(blob3.body,roof.body,0,0);
	rope4 = new Rope(blob4.body,roof.body,(blobDiameter*1.7),0);
	rope5 = new Rope(blob5.body,roof.body,(blobDiameter*3.4),0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(77, 250, 123);
  
  drawSprites();

  roof.display();

  blob1.display();
  blob2.display();
  blob3.display();
  blob4.display();
  blob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(blob1.body,blob1.body.position,{x:-165,y:45});
	  }
}


