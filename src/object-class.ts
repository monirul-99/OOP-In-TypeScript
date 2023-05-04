// Repeated work thats mean more code typing
class Animal {
    public name : string;
    readonly specialist : string;
    private sound : string ;
    constructor(name: string, specialist: string, sound: string){
        this.name = name
        this.specialist = specialist
        this.sound = sound
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

//parameters property No-Repeated Code Thats Mean Clean Code
class Animal2 {
    constructor(public name: string, public specialist: string,public sound: string){
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("Prom", "Dog", "Yea Yea")
const meaw = new Animal2("Persian", "Cat", "Meaw Meaw")

dog.makeSound()
meaw.makeSound()