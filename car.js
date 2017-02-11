class Car {
	
	constructor(x,y,radius) {
		this.xPos = x;
		this.yPos = y;
		this.radius = radius;
		this.oldTime = new Date.UTC();
		this.xPos = 0, this.xVel = 0, this.xAccel = 0, this.yPos = 0, this.yVel = 0, this.yAccel = 0;
	}
  
	
	
	drawCar() {
		var circle = new Graphics();
		circle.beginFill(0xe74c3c); // Red
		circle.drawCircle(this.x,this.y,this.radius); // drawCircle(x, y, radius)
		circle.endFill();
	}

	update(){
		var newTime = new Date.UTC(); // current time in universal time (no timezone)
		var deltaTime = newTime - oldTime;
		oldTime = newTime; // updating old time to be current time
		
		// Motion Equations
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
