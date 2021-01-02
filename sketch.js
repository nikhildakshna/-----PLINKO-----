const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const render = Matter.render;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var g;
function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  g = new ground();
  c1 = new corner(0);
  c2 = new corner(800);

  for(var a = 0; a <= width;a = a + 80){
  divisions.push(new divider(a,650, 10, divisionHeight));
  }

  for(var b = 40;b <= width;b = b + 50){
  plinkos.push(new plinko(b,75,10));
  plinkos.push(new plinko(b,275,10));
  }

  for(c = 15;c <= width-10;c = c + 50){
  plinkos.push(new plinko(c,175,10));
  plinkos.push(new plinko(c,375,10));
  }

  
}

function draw() {
  background(0);  
  //drawSprites();
  Engine.update(engine);

  //creating the particles
  if(frameCount % 60 === 0){
    particles.push(new partical(random(50,750),10,10));
    }

g.d();
c1.d();
c2.d();
for(d = 0;d < divisions.length;d++){
divisions[d].display();
}

for(var e = 0;e < plinkos.length;e++){
plinkos[e].display();
}

for(var f = 0;f < particles.length;f++){
particles[f].display();
}
}