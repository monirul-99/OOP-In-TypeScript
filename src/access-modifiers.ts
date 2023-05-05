class BankAccount {
    id: number;
    protected name : string; // protected but out site available
    private _balance : number; // out site not available

    constructor(id: number, name: string, balance: number){
        this.id = id
        this.name = name
        this._balance = balance
    }

    getBalance(){
        console.log(`My Current Balance is ${this._balance}`);
    }

    addDeposit(amount: number){
        this._balance = this._balance + amount
    }
}

class StudentAccount extends BankAccount{
    test(){
        this.name
    }
}

const myAccount = new BankAccount(234567, "Monirul Islam", 23978)
console.log(myAccount);