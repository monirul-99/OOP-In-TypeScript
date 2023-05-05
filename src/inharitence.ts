class Parent {
    name : string;
    age : number;
    address : string;

    constructor(name:string, age: number, address: string){
        this.name = name
        this.age = age
        this.address = address
    }

    makeSleep(hours: number) : string {
        return `My name is ${this.name} & age is ${this.age} and my regular sleep time ${hours} hours`;
    }
}

class Student extends Parent {

    //Comment Mean ALL code passing from Parent Class
    // name : string;
    // age : number;
    // address : string;
    constructor(name:string, age: number, address: string){
        super(name, age, address)
    }
    // makeSleep(hours: number) : string | void{
    //     console.log(`My name is ${this.name} & age is ${this.age} and my regular sleep time ${hours} hours`);
    // }
}

const firstBoy = new Student("Monirul Islam", 23, "Naogaon, Rajshahi")
firstBoy.makeSleep(7)

class Teacher extends Parent{
    // name: string;
    // age : number;
    // address: string;
    designation: string

    constructor(name:string,age:number,address:string,designation:string){
        super(name, age, address)
        // this.name = name
        // this.age = age
        // this.address = address
        this.designation = designation
    }

    // makeSleep(hours: number) : string | void{
    //     console.log(`My name is ${this.name} & age is ${this.age} and my regular sleep time ${hours} hours`);
    // }

    takeClasses(numberOfClass: number): string {
        return `This ${this.name} will take ${numberOfClass} class`
    }
}

const TeacherOne = new Teacher("Noah", 23, "Naogaon", "English")