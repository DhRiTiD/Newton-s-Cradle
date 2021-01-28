//Paper blu-print and display
class Bob{
    constructor(x, y, radius){
        this.body = Bodies.circle(x, y, radius, {'restitution': 1.1, 'friction': 0.1, 'density': 4.5});
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        translate(pos.x, pos.y);
        fill("steelblue");
        ellipse(0, 0, 60);
        pop();
    }
}