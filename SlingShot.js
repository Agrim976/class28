class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,//first object
            pointB : pointB,//second object
            stiffness : 0.2,//tightness
            length : 20
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);//creating constraint
        World.add(world,this.sling);//adding it to the world

    }

    fly(){
        this.sling.bodyA = null;//removing the constraint 
    }

    display(){
        if(this.sling.bodyA){

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);//displaying the line

        }

    }
}