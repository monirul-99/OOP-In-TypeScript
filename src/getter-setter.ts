class BankBalance {
    id: number;
    protected name : string; // protected but out site available
    private _balance : number; // out site not available

    // Make Getter
    get balance() : number {
        return this._balance
    }

    //Make Setter
    set deposit(amount:number) {
        this._balance = this._balance + amount
    }

    constructor(id: number, name: string, balance: number){
        this.id = id
        this.name = name
        this._balance = balance
    }

    getBalance(): number{
        return this._balance
    }

    addDeposit(amount: number) : number{
        return this._balance = this._balance + amount
    }
}


const UnknownAcc = new BankBalance(234567, "Monirul Islam", 2000)
console.log(UnknownAcc.id); // Here is Nothing Show _balance BCZ _balance is private
console.log(UnknownAcc.balance); // Now I Can Access _balance with getter use 
UnknownAcc.deposit = 90 // Extra Balance Added
console.log(UnknownAcc.balance); // Finally Result is Here