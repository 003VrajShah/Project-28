class Stone extends Mango{
    constructor(x,y,width,height,angle){
       super(x,y,height,angle);
       this.image=loadImage("sprites/stone.png");
       Matter.Body.setAngle(this.body, angle);
    }
}