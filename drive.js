class Drive
{
  constructor(graphics){

     this.graphics = graphics;

  }

  // This should take a callback to call when the simulation - when it what's Levi!
  startSimulation(userCallback) // Setup timed callback to call the user callback and the render function
  {
		var delay = 1000.0/60.0; // 1000 ms / 60 cycles = delay for 60 Hz functionality

		var timer = setTimeout(func, delay);

		var carRadius = 100;
		var vehicle = new Car(100,100,carRadius);
		vehicle.drawCar(this.graphics);

		function func() // kind of like an infinite while loop, where the loop is done @ 60 Hz
		{
			userCallback();
      //this.graphics.clear

			timer = setTimeout(func, delay); //kind of recursion
		}

  }

}
