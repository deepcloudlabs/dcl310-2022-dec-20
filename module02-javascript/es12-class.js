class Account {
    #_iban;
    #_balance;
    #_hiddenFun;

    constructor(iban, balance) {
        this.#_iban = iban;
        this.#_balance = balance;
        this.#_hiddenFun = (x,y) => {
            return x**y;
        };
    }

    get iban() {
        return this.#_iban;
    }

    get balance() {
        console.log("get balance(){} is working now...")
        return this.#_balance;
    }

    set balance(value) {
        console.log("set balance(value){} is working now...")
        if (value < 0.0) throw "illegal balance value";
        this.#_balance = value;
    }

    #withdraw(amount) {
        console.log("hidden withdraw")
        this.#_balance -= this.#_hiddenFun(amount,2);
    }

    deposit(amount) {
        this.#withdraw(11);
        this.#_balance += amount;
    }
}

let acc1 = new Account("tr1", 10_000);
//acc1.withdraw(7_000)
acc1.deposit(2_000)
acc1.balance = 1_000;
console.log(acc1.balance)
