class Car {
	
	constructor(x,y,radius) {
		this.xPos = x;
		this.yPos = y;
		this.radius = radius;
		this.xPos = 0, this.xVel = 0, this.xAccel = 0, this.yPos = 0, this.yVel = 0, this.yAccel = 0;
	}
  
	
	
	drawCar() {
		var circle = new PIXI.Graphics();
		circle.beginFill(0xe74c3c); // Red
		circle.drawCircle(this.x,this.y,this.radius); // drawCircle(x, y, radius)
		circle.endFill();
	}

	update(deltaTime){
		// Motion Equations
		this.xPos = this.xPos + this.xVel * deltaTime + 0.5 * this.xAccel * Math.pow(this.xAccel,2);
		this.yPos = this.yPos + this.yVel * deltaTime + 0.5 * this.yAccel * Math.pow(this.yAccel,2);
		this.xVel = this.xVel + this.xAccel * deltaTime;
		this.yVel = this.yVel + this.yAccel * deltaTime;
	}

	getVelocity() {
		return [xVel, yVel];
	}

	accelerate(xAcc, yAcc) {
		this.xAccel = xAcc;
		this.yAccel = yAcc;
	}
}
