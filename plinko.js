class plinko{
    
        constructor(x,y,radius){
        
        var options ={
        isStatic: true,
        'restitution': 0.6,
        'friction': 0.4,
        'density': 1
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
    
        World.add(world, this.body);
    
        }
    
        display(){
        var pos = this.body.position;
    
        push();
        translate(pos.x,pos.y);
        fill("");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius, this.radius);
        pop();
        }
    
    };