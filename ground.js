class ground{
    constructor(){
    var options ={
    isStatic: true
    }
    this.body = Bodies.rectangle(400,790,800,10,options);
    this.width = 800;
    this.height = 10;

    World.add(world,this.body);
    }

d(){
var pos = this.body.position;

push();
translate(pos.x,pos.y);
fill(255);
strokeWeight(5);
stroke("purple");
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();
}

}