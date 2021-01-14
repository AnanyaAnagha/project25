class Paper{

    constructor(x,y,radius)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(x,y,radius,options);
        // super(x,y,50,50);
         this.image=loadImage("sprites/paper.png");
        this.radius=140;
        
       
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("PINK");
        ellipse(0,0,this.diameter);
        pop();
      }

     
    };