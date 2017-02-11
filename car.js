class Car {

	constructor(x,y,width,height,container) {
		this.xPos = x;
		this.yPos = y;
		this.width = width;
		this.height = height;
		this.xVel = 0,this.xAccel = 0, this.yVel = 0, this.yAccel = 0;
		this.boundingRect = new Rectangle(x, y, width, height);
		this.newCar = PIXI.Sprite.fromImage('greencar.jpg');
		this.newCar.x = this.xPos * scalingFactor;
		this.newCar.y = this.yPos * scalingFactor;
		this.newCar.width = this.width * scalingFactor;
		this.newCar.height = this.height * scalingFactor;
		this.newCar.visible = true;
		console.log(container);
		container.addChild(this.newCar);
	}

	draw(scalingFactor) {
		this.newCar.x = this.xPos * scalingFactor;
		this.newCar.y = this.yPos * scalingFactor;
		this.newCar.width = this.width * scalingFactor;
		this.newCar.height = this.height * scalingFactor;
		this.newCar.visible = true;

		//carGraphic.lineStyle(0);
		//carGraphic.beginFill(0xe74c3c); // Red
		//carGraphic.drawCircle(this.xPos * scalingFactor,this.yPos * scalingFactor,this.radius * scalingFactor); // drawCircle(x, y, radius)
		//carGraphic.endFill();
	}

	update(deltaTime){
		// Motion Equations
		this.xVel = this.xVel + (this.xAccel * deltaTime);
		this.yVel = this.yVel + (this.yAccel * deltaTime);
		this.xPos = this.xPos + (this.xVel * deltaTime);
		this.yPos = this.yPos + (this.yVel * deltaTime);
		this.boundingRect.x = this.xPos;
		this.boundingRect.y = this.yPos;
	}

	getVelocity() {
		return [xVel, yVel];
	}

	accelerate(xAcc, yAcc) {
		this.xAccel = xAcc;
		this.yAccel = yAcc;
	}
}
