// keyof guard
// Working For Runtime
type Alphanumerics = string | number
function add(num1: Alphanumerics , num2: Alphanumerics): Alphanumerics{
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    } else {
        return num1.toString() + num2.toString()
    }
}

// in Guard
// This Guard Use For Object
type NormanUserType = {
    name : string
}
type ADminUserType = {
    name: string,
    role: "admin"
}
const peopleOne : NormanUserType = {name: "Noah"}
const peopleTwo : ADminUserType = {name: "Monirul Islam", role: "admin"}
function GetUser(user: NormanUserType | ADminUserType) : string{
    if('role' in user){
        return ` I'm an admin and my role is ${user.role}`
    } else {
        return `I'm a Normal user`
    }
}
// console.log(GetUser(peopleTwo));

// instanceof guard
// Guard For Class || Object

class Lover {
    name : string;
    specialist  : string;

    constructor(name: string, specialist : string){
        this.name = name
        this.specialist = specialist
    }

    makeSound(){
        console.log(`I'm Making Sound`);
    }
}

class Cat extends Lover{
    constructor(name: string, specialist: string){
        super(name, specialist)
    }

    makeMeaw(){
        console.log("I'm Meawing");
    }
}
class Dog extends Lover{
    constructor(name: string, specialist: string){
        super(name, specialist)
    }

    makeBark(){
        console.log("I'm Barking");
    }
}

function isDog(animal: Lover):animal is Dog{
    return animal instanceof Dog
}
function isCat(animal: Lover):animal is Cat{
    return animal instanceof Cat
}

function getAnimal(animal: Lover){
    if(isDog(animal)){ // second Process
        animal.makeBark()
    }
    
    if(animal instanceof Cat){ // first process
        animal.makeMeaw()
    }
    else {
        animal.makeSound()
    }
    
}
const AnimalOne = new Dog("A", "Something") // instance --> Dog
const AnimalTwo = new Cat("B", "Nothing") // instance --> Cat

getAnimal(AnimalOne)