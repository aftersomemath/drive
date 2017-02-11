class Drive {
  constructor(app) {
    // Save off pixie application
    this.app = app;
  }

  // This should take a callback to call when the simulation
  startSimulation() {
    // load the texture we need
    PIXI.loader.add('bunny', 'bunny.jpg').load(function(loader, resources) {
        // This creates a texture from a 'bunny.png' image.
        var bunny = new PIXI.Sprite(resources.bunny.texture);

        // Setup the position of the bunny
        bunny.x = app.renderer.width / 2;
        bunny.y = app.renderer.height / 2;

        // Rotate around the center
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        // Add the bunny to the scene we are building.
        app.stage.addChild(bunny);

        // Listen for frame updates
        app.ticker.add(function() {
             // each frame we spin the bunny around a bit
            bunny.rotation += 0.01;
        });
    });
  }
}