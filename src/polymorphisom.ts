class ParentPolymorphism{
    sleepTime(){
        console.log(`I'm sleeping 8 hours per day!`);
    }
}
class ChildPolymorphism extends ParentPolymorphism{
    sleepTime(){
        console.log(`I'm sleeping 10 hours per day!`);
    }
}
class CousinPolymorphism extends ParentPolymorphism{
    sleepTime(){
        console.log(`I'm sleeping 5 hours per day!`);
    }
}
function getSleepFunc(input: ParentPolymorphism){
    input.sleepTime()
}
const CheckResult1 = new ParentPolymorphism()
const CheckResult2 = new ChildPolymorphism()
const CheckResult3 = new CousinPolymorphism()
// CheckResult1.sleepTime()
// CheckResult2.sleepTime()
// CheckResult3.sleepTime()
getSleepFunc(CheckResult1)
getSleepFunc(CheckResult2)
getSleepFunc(CheckResult3)


class Shape {
    getArea() : number{
        return 0
    }
}

//area -> pi *r *r
class Circle extends Shape{
    radius : number;
    constructor(radius: number){
        super();
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape{
    height: number;
    width : number;
    constructor(height: number, width: number){
        super()
        this.height = height
        this.width = width
    }

    getArea(): number {
        return this.width * this.height
    }
}

function getAreaOfShape(input : Shape){
    console.log(input.getArea());
}

getAreaOfShape(new Circle(10))
getAreaOfShape(new Rectangle(10, 12))
