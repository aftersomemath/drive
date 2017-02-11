class Car {

	constructor(x,y,radius,carGraphic) {
		this.xPos = x;
		this.yPos = y;
		this.radius = radius;
		this.xVel = 0,this.xAccel = 0, this.yVel = 0, this.yAccel = 0;
	}
  
	static getCar()
	{
		return new Car(0,0,0);
	}

	drawCar(carGraphic) {
    	carGraphic.lineStyle(0);
		carGraphic.beginFill(0xe74c3c); // Red
		carGraphic.drawCircle(this.x,this.y,this.radius); // drawCircle(x, y, radius)
		carGraphic.endFill();
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
