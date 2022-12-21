function Customer(identity, fullname, email, sms) {
    this.identity = identity;
    this.fullname = fullname;
    this.email = email;
    this.sms = sms;

    this.sendSmsMessage = function (message) {
        console.log(`Sending an sms message \"${message}\" to ${this.sms}`)
    }

}

let jack = new Customer("1", "jack bauer", "jack@example.com", "+90-555-555-5555");
console.log(jack)

class Employee {
    constructor(identity, fullname, iban, salary) {
        this.identity = identity;
        this.fullname = fullname;
        this.iban = iban;
        this.salary = salary;
    }

    increaseSalary(rate) {
        this.salary *= (1 + rate / 100);
        console.log(`New salary is ${this.salary}`);
    }
}

let kate = new Employee("2", "kate austen", "tr1", 200_000);
console.log(kate)
kate.salary = 500_000;
console.log(kate)
