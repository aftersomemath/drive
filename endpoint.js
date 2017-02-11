class Endpoint
{
  constructor(x,y,length,width) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.width = width;
  }
  
  draw(graphics, scalingFactor) {
      graphics.beginFill(0x009FE9, 1); // Random color
      graphics.drawRect(this.x * scalingFactor,this.y * scalingFactor,
                        this.length * scalingFactor, this.width * scalingFactor);
      graphics.endFill();
  }

  update(deltaTime){

  }
}
