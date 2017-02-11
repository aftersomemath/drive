class Rectangle {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    isTouching(rect)
    {
        // Taken straight from https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
        if (this.x < rect.x + rect.width &&
            this.x + this.width > rect.x &&
            this.y < rect.y + rect.height &&
            this.height + this.y > rect.y) {
            // collision detected!
            return true;
        }
        return false;
    }
}