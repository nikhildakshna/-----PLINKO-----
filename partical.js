class partical{
    constructor(x,y,radius){
    
    var options ={
    isStatic: false,
    'restitution': 0.6,
    'friction': 0.4,
    'density': 1
    }
    
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.random = random(0,255);
    this.r = random(0,255);
    this.rand = random(0,255);
    this.color = color(this.random,this.r,this.rand);
    console.log(this.random);
    console.log(this.r);
    console.log(this.rand);

    World.add(world, this.body);

    }

    display(){
    var pos = this.body.position;

    push();
    translate(pos.x,pos.y);
    fill(this.color);
    noStroke();
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius, this.radius);
    pop();
    }

};