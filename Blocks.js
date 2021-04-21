class Blocks{
    constructor(x,y,width,height){
        var options = {
            density : 1.0,
            friction : 0.5
        }
        this.block = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.block);
    }
    display(){
        var position = this.block.position;
        push();
        translate(position.x, position.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}