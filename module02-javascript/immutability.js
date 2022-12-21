class Account {
    constructor(iban, balance) {
        this.iban = iban;
        this.balance = balance;
    }

    withdraw(amount) {
        return new Account(this.iban, this.balance - amount);
    }

    deposit(amount) {
        return new Account(this.iban, this.balance + amount);
    }
}

const acc1 = new Account("tr1", 10_000);
// acc1 = new Account("tr2", 20_000);
let acc2 = acc1.withdraw(5_000);
console.log(acc2);
const fullname = "kate austen";
// fullname = "james sawyer";
const upperCaseFullname = fullname.toUpperCase();
console.log(upperCaseFullname);
acc1.balance -= 1_000_000;