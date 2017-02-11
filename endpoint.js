class Endpoint
{
  constructor(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.length = height;
    this.width = width;
    this.boundingRect = new Rectangle(x, y, width, height);
  }
  
  draw(graphics, scalingFactor) {
      graphics.beginFill(0x009FE9, 1); // Random color
      graphics.drawRect(this.x * scalingFactor,this.y * scalingFactor,
                        this.width * scalingFactor, this.height * scalingFactor);
      graphics.endFill();
  }

  update(deltaTime){

  }
}
