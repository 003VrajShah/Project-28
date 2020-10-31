class Tree extends Mango{
  constructor(x,y,width,height,angle){
      super(x,y,height,angle);
      this.image=loadImage("sprites/tree.png");
      Matter.Body.setAngle(this.body, angle);
  }
}