class Drive
{
  constructor(app, graphics, scalingFactor,container){
    this.objects = [new Obstacle(3,3,2,2), new Obstacle(7,7,0.5,0.5)];
    this.endpoint = new Endpoint(3, 0, 2, 2);
    this.scalingFactor = scalingFactor;
    this.userCallback = null;
    this.lastTimeStamp = 0;
    this.time = null;
    this.graphics = graphics;
    this.container = container;
    this.cars = [new Car(0, 0, 2, 1.2,this.container)];
    this.app = app;
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

    // Listen for animate update
    this.app.ticker.add(this.update, this);
  }

  update()
  {
      var currentTime = Date.now();
      var deltaTime = (currentTime - this.lastTimeStamp)/1000.0;
      this.lastTimeStamp = currentTime;

      this.graphics.clear();

      for(var i = 0; i < this.objects.length; i++)
      {
        var object = this.objects[i];
        object.draw(this.graphics, this.scalingFactor);
      }

      this.endpoint.draw(this.graphics, this.scalingFactor);

      for(var i = 0; i < this.cars.length; i++)
      {
        var car = this.cars[i];
        car.draw(this.scalingFactor);
      }

      for(var i = 0; i < this.objects.length; i++)
      {
        var object = this.objects[i];
        object.update(deltaTime);
      }

      // 0 is regular, 1 is over, 2 is won
      var gameState = 0;

      for(var i = 0; i < this.cars.length; i++)
      {
        var car = this.cars[i];
        this.userCallback(car);
        car.update(deltaTime);

        for(var i = 0; i < this.objects.length; i++)
        {
          var object = this.objects[i];
          var touch = object.boundingRect.isTouching(car.boundingRect);
          if(touch)
          {
            gameState = 1;
          }
        }

        if((gameState == 0) && this.endpoint.boundingRect.isTouching(car.boundingRect))
        {
          gameState = 2;
        }
      }

      if(gameState == 0)
      {
        //this.timer = setTimeout(this.update.bind(this), this.updateDelay);
      }
      else if(gameState == 1)
      {
        console.log("YOU CRASHED");
        this.app.ticker.remove(this.update, this);
      }
      else if(gameState == 2)
      {
        console.log("YOU WON");
        this.app.ticker.remove(this.update, this);
      }
      else
      {
        console.log("Impossible state, is the world ending?");
      }

  }

}
