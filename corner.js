class corner{
    constructor(x){
    var options = {
    isStatic: true
    }
    this.body = Bodies.rectangle(x,400,10,800,options);
    this.width = 10;
    this.height = 800;

    World.add(world,this.body);
    }

d(){
var pos = this.body.position;
push();
translate(pos.x,pos.y);
strokeWeight(2);
stroke("purple");
fill(255);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();
}

}