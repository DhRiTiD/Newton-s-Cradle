//fixed platform blu-print and display
class Platform {
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});
        this.width = width;
        this.height = height;
        this.image = loadImage("gradient.jpg");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop(); 
    }
} 
