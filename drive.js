class Drive
{
  constructor(graphics, scalingFactor){
    this.cars = [new Car(5, 5, 0.5)];
    this.objects = [new Obstacle(3,3,2,2)];
    this.endpoint = new Endpoint(1, 1, 2, 2);
    this.scalingFactor = scalingFactor;
    this.updateDelay = 1000.0/60.0; // 1000 ms / 60 cycles = delay for 60 Hz functionality
    this.userCallback = null;
    this.lastTimeStamp = 0;
    this.time = null;
    this.graphics = graphics;
  }

  setScalingFactor(scalingFactor)
  {
    this.scalingFactor = scalingFactor;
  }

  // This should take a callback to call when the simulation - when it what's Levi!
  startSimulation(userCallback) // Setup timed callback to call the user callback and the render function
  {
    this.userCallback = userCallback;
		this.lastTimeStamp = Date.now();
    this.timer = setTimeout(this.update.bind(this), this.updateDelay);
  }

  update()
  {
      var currentTime = Date.now();
      var deltaTime = (currentTime - this.lastTimeStamp)/1000.0;
      this.lastTimeStamp = currentTime;
      console.log("FPS: " + 1.0/deltaTime);

      this.graphics.clear();

      for(var i = 0; i < this.cars.length; i++)
      {
        var car = this.cars[i];
        this.userCallback(car);
        car.update(deltaTime);
        car.draw(this.graphics, this.scalingFactor);
      }

      for(var i = 0; i < this.objects.length; i++)
      {
        var object = this.objects[i];
        object.update(deltaTime);
        object.draw(this.graphics, this.scalingFactor);
      }

      this.endpoint.draw(this.graphics, this.scalingFactor);
      this.timer = setTimeout(this.update.bind(this), this.updateDelay);
  }

}
