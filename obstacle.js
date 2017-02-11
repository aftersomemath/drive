class Obstacle
{
  constructor(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.boundingRect = new Rectangle(x, y, width, height);
  }

  draw(graphics, scalingFactor) {
	  graphics.beginFill(0x709FE9, 1); // corresponds to light blue
	  graphics.drawRect(this.x * scalingFactor, this.y * scalingFactor,
                      this.width * scalingFactor, this.height * scalingFactor);
	  graphics.endFill();
  }

  update(deltaTime){

  }
}
