class Mango {
    constructor(x,y,radius){

    var options = {
        restitution: 0,
        isStatic: true,
        friction: 2,
        density: 1
    }
    
    this.radius = radius;
    this.image = loadImage("images/mango.png");
    this.body = Bodies.circle(x,y,this.radius,options);
    World.add(world, this.body);


}

   display(){
   var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   rotate(this.body.angle);
   imageMode(CENTER);
   image(this.image,0,0,this.radius);
   pop();

   }

}