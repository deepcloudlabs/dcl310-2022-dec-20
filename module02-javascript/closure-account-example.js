function Account(iban, balance) { // outer function/scope
    let _iban = iban;
    let _balance = balance;

    return {
        withdraw(amount) {
            _balance -= amount;
        },
        deposit(amount) {
            _balance += amount;
        },
        printAccount() {
            console.log(`Account[iban: ${_iban}, balance: ${_balance}]`);
        },
        getIban() {
            return _iban;
        },
        getBalance() {
            return _balance;
        }
    };
}

let acc1 = Account("tr1", 10_000);
acc1.withdraw(5_000);
acc1.printAccount();
let acc2 = Account("tr2", 20_000);
acc2.deposit(12_000);
acc2.printAccount();
