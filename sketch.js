const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  block1 = new Blocks(400,300,50,50);
  ball = new Ball(100,300,50,50);
  string = new String(ball.body, {x:200, y:150});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ball.display();
  block1.display();
  string.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
    sling.attach(ball.body);
  }
}