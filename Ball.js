class Ball{
    constructor(x,y,width,height){
        var options = {
            airFriction : 0.8        
        }
        this.ball = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("ball.png");
        this.width = width;
        this.height = height;

        World.add(world, this.ball);
    }
    display(){
        var position = this.ball.position;
        push();
        translate(position.x, position.y);
        imageMode(CENTER);
        image(image,0,0,this.width,this.height);
        pop();
    }
}