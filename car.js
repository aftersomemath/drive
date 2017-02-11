class Car {
	var msInDay = 24*60*60*1000; //ms
	var oldTime; //a Date.UTC
	var xPos = 0, xVel = 0, xAccel = 0, yPos = 0, yVel = 0, yAccel = 0;
	
  constructor(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  function drawCar(){

    var circle = new Graphics();
    circle.beginFill(0xe74c3c); // Red
    circle.drawCircle(this.x,this.y,this.radius); // drawCircle(x, y, radius)
    circle.endFill();
  }

  function update(){
	var newTime = new Date.UTC(); // current time in universal time (no timezone)
	var deltaTime = newTime - oldTime;
	oldTime = newTime; // updating old time to be current time
	
	//Motion Equations
	xPos = xPos + xVel * deltaTime + 0.5 * xAccel * Math.pow(xAccel,2);
	yPos = yPos + yVel * deltaTime + 0.5 * yAccel * Math.pow(yAccel,2);
	xVel = xVel + xAccel * deltaTime;
	yVel = yVel + yAccel * deltaTime;
  }

  getVelocity() {
    return [xVel, yVel];
  }

  accelerate(xAcc, yAcc) {
	this.xAccel = xAcc;
	this.yAccel = yAcc;
  }
}
