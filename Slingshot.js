class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        this.pointB= pointB;
        //loading sling images
        this.image1= loadImage("sprites/sling1.png")
        this.image2= loadImage("sprites/sling2.png")
        this.image3= loadImage("sprites/sling3.png")
        World.add(world, this.slingshot);
    }

    fly(){
        this.slingshot.bodyA= null
    }

    display(){
        //adding sling images
        image(this.image1,230,25);
        image(this.image2,205,24)

        
        if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        //adding colours with the help of colorzilla
        stroke(48,22,8)

        //making the rubber band thinner 
        if(pointA.x<200){
            strokeWeight(3);
            line(pointA.x - 20, pointA.y, pointB.x + 20, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x - 20, pointB.y);
            
        }else{

            //making the rubber band thicker
            strokeWeight(7);
        line(pointA.x - 20, pointA.y, pointB.x + 20, pointB.y);
        line(pointA.x - 20, pointA.y, pointB.x - 20, pointB.y);
        
        }
        
        }
    }
    
}