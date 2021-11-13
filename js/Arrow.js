class Arrow {
    constructor(x, y, width, height, arrowPos) {
        var options = {
          
            isStatic: true,
            density: 0.1
        };
    
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        this.image = loadImage("./assets/arrow.png");
        this.arrowPosition = arrowPos;
        World.add(world, this.body);
    }
    
    display() {
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height);
     pop();
  }
    }
