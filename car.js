class Car {

	constructor(x,y,radius,carGraphic) {
		this.xPos = x;
		this.yPos = y;
		this.radius = radius;
		this.xVel = 0,this.xAccel = 0, this.yVel = 0, this.yAccel = 0;
		var width = radius; var height = radius;
		this.boundingRect = new Rectangle(x, y, width, height);
	}

	draw(carGraphic, scalingFactor) {
		carGraphic.lineStyle(0);
		carGraphic.beginFill(0xe74c3c); // Red
		carGraphic.drawCircle(this.xPos * scalingFactor,this.yPos * scalingFactor,this.radius * scalingFactor); // drawCircle(x, y, radius)
		carGraphic.endFill();
	}

	update(deltaTime){
		// Motion Equations
		this.xVel = this.xVel + (this.xAccel * deltaTime);
		this.yVel = this.yVel + (this.yAccel * deltaTime);
		this.xPos = this.xPos + (this.xVel * deltaTime);
		this.yPos = this.yPos + (this.yVel * deltaTime);
	}

	getVelocity() {
		return [xVel, yVel];
	}

	accelerate(xAcc, yAcc) {
		this.xAccel = xAcc;
		this.yAccel = yAcc;
	}
}
