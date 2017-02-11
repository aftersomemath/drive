class Obstacle
{
  constructor(x,y,length,width) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.width = width;
  }

  draw(graphics, scalingFactor) {
	  graphics.beginFill(0x709FE9, 1); // corresponds to light blue
	  graphics.drawRect(this.x * scalingFactor, this.y * scalingFactor,
                      this.length * scalingFactor, this.width * scalingFactor);
	  graphics.endFill();
  }

  update(deltaTime){

  }
}
