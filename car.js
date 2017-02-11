class Car {
  constructor(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  function drawCar(){

    var circle = new Graphics();
    circle.beginFill(0xe74c3c); // Red
    circle.drawCircle(this.x,this.y,this.radius); // drawCircle(x, y, radius)
    circle.endFill();
  }

  function update(){

  }

  getSpeed() {
    return 0.0;
  }

  accelerate(x, y) {

  }
}
