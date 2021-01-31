
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var world, engine, tree, boy, mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload(){
	boy = loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 1000);
	engine = Engine.create();
	world = engine.world;

  tree = new Tree(900,680);
  
  mango1 = new Mango(870,650,10);
  mango1.scale = 0.1;
	


}

function draw() {

  background(255);
  Engine.update(engine);

   
  tree.display();

  mango1.display();
  
  image(boy,100,750,160,280);
}
