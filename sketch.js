const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  

b1=createImg("up.png");

b1.position(220,30);
b1.size(50,50)
b1.mouseClicked(vforce);



b2=createImg("right.png");

b2.position(300,30);
b2.size(50,50)
b2.mouseClicked(hforce);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var balloptions={
restitution:0.9

  }
  ball=Bodies.circle(200,100,20,balloptions)
World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}

function hforce(){

  Matter.Body.applyForce(
  ball,{
    x:0,y:0
  },{x:0.05,y:0}
  )

} 

function vforce(){

  Matter.Body.applyForce(
  ball,{
    x:0,y:0
  },{x:0,y:-0.05}
  )

} 
