class paper{
    constructor(x,y,width,height){
        var Option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
                  }
          this.body=Bodies.rectangle(x,y,width,height,Option);
          World.add(world,this.body);
          this.width=width;
          this.height=height;
          this.image=loadImage("paper.png")
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push() ;
        translate(pos.x,pos.y)
        rotate(angle);
        strokeWeight(4);
        stroke("red");
        fill("white");
        imageMode(CENTER);
        image (this.image,0,0,this.width,this.height);
        pop();
    }
}