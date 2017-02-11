class obstacle()
{
  constructor(x,y,length,width) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.width = width;
  }

  drawObstacle() {
	  var rect = new PIXI.Graphics();
	  rect.beginFill(0x709FE9, 1); // corresponds to light blue
	  rect.drawRect(this.x,this.y,this.length,this.width);
	  rect.endFill();
  }

  function update(){

  }
}
