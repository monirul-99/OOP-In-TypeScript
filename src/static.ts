class Counter {
    static counter : number = 0;

    // constructor(counter : number){ // when you use static here is nothing to need constructor
    //     this.counter = counter
    // }

    static increment() : number{
        return Counter.counter = Counter.counter + 1
    }
    static decrement() : number{
        return Counter.counter = Counter.counter - 1
    }
}

// const instanceOne = new Counter()
// const instanceTwo = new Counter()
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());