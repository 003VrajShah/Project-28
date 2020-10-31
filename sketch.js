var Boy,BoyImage;
var MangoImg;
var TreeImg;
var slingShot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	BoyImage=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  Boy=new Boy(30,300,220,120);
     image(this.image,0,0,this.width,this.height);
	  MangoImg= new Mango(300,100,20,20);
	  TreeImg= new Tree(780,300,300,670);
	  slingShot=new Slingshot(stone.body,{x:200,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Boy.display();
  MangoImg.display();
  TreeImg.display();
  slingShot.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}


