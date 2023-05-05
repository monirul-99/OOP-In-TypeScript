//interface
interface IVehicle{
    name : string;
    model : string;
}
const vehicle : IVehicle = {
    name : "Audi",
    model : "Di98"
}


interface IEngine {
    startEngine() : void
    stopEngine() : void
    move() : void
}
class Engine implements IEngine {
    constructor(public name: string, public brand : string, public model : string){
        
    }
    startEngine(): void {
        console.log(`I'm Starting Engine`);
    }
    stopEngine(): void {
        console.log(`I'm Stopping Engine`);
    }
    move(): void {
        console.log(`I'm Moving Engine`);
    }
    test(){
        console.log(`I'm For Testing Purpose!`);
    }
}
const vehicleOne = new Engine("Car", "Audi", "DFT8")

//abstraction class
interface IAbsEngine {
    startEngine() : void
    stopEngine() : void
    move() : void
}
abstract class AbsEngine {
    constructor(public name: string, public brand : string, public model : string){
        
    }
    abstract startEngine(): void
    abstract stopEngine(): void 
    move(): void {
        console.log(`I'm Moving Engine`);
    }
}

class NewCar extends AbsEngine{
    startEngine(): void {
        console.log(`I'm Starting Engine`);
    }
    stopEngine(): void {
        console.log(`I'm Stopping Engine`);
    }
}
// const AbsVehicleOne = new AbsEngine("Car", "Audi", "DFT8")
