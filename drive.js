class Drive
{
  constructor(app){
		this.app = app; // Save off pixie application
  }

  // This should take a callback to call when the simulation - when it what's Levi!
  startSimulation(userCallback) // Setup timed callback to call the user callback and the render function
  {
		var delay = 1000/60; // 1000 ms / 60 cycles = delay for 60 Hz functionality
		var timer = setTimeout(func, delay);
	  
		var carRadius = 4;
		var vehicle = new Car(0,0,carRadius);
		vehicle.drawCar();
	  
		function func() // kind of like an infinite while loop, where the loop is done @ 60 Hz
		{
			userCallback();

			vehicle.update();
			timer = setTimeout(func, delay); //kind of recursion
		}

  }
}
