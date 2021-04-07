const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var ball;
var rope1;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  Box1 = new Box(300,275,30,40);
  Box2 = new Box(330,275,30,40);
  Box3 = new Box(360,275,30,40);
  Box4 = new Box(390,275,30,40);
  Box5 = new Box(420,275,30,40);
  Box6 = new Box(450,275,30,40);
  Box7 = new Box(480,275,30,40);
  Box8 = new Box(330,235,30,40);
  Box9 = new Box(360,235,30,40);
  Box10 = new Box(390,235,30,40);
  Box11 = new Box(420,235,30,40);
  Box12 = new Box(450,235,30,40);
  Box13 = new Box(360,195,30,40);
  Box14 = new Box(390,195,30,40);
  Box15 = new Box(420,195,30,40);
  Box16 = new Box(390,155,30,40);

  BoxR1 = new Box(640,175,30,40);
  BoxR2 = new Box(670,175,30,40);
  BoxR3 = new Box(700,175,30,40);
  BoxR4 = new Box(730,175,30,40);
  BoxR5 = new Box(760,175,30,40);
  BoxR6 = new Box(670,135,30,40);
  BoxR7 = new Box(700,135,30,40);
  BoxR8 = new Box(730,135,30,40);
  BoxR9 = new Box(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  rope1= new Rope(this.ball,{x:200,y:150});

}
function draw() {
  background("silver"); 
 
  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("red");
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  fill("yellow");
  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  Box12.display();
  fill("white");
  Box13.display();
  Box14.display();
  Box15.display();
  fill("purple");
  Box16.display();
  fill("blue");
  BoxR1.display();
  BoxR2.display();
  BoxR3.display();
  BoxR4.display();
  BoxR5.display();
  fill("pink");
  BoxR6.display();
  BoxR7.display();
  BoxR8.display();
  fill("red")
  BoxR9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  rope1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  rope1.fly();
}

function keyPressed(){
  if(keyCode === 32){
      rope1.attach(this.ball);
  }
}