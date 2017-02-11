class Drive {
  constructor(app) {
    // Save off pixie application
    this.app = app;
  }

  // This should take a callback to call when the simulation
  startSimulation(userCallback) {
    // Setup timed callback to call the user call back and the render function
    userCallback();
  }


}
