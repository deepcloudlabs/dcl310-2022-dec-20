class Employee {
    constructor(fullname, salary) {
        this.fullname = fullname;
        this.salary = salary;
        this.increaseSalary = this.increaseSalary.bind(this);
    }

    increaseSalary = () => {
        console.log(`increaseSalary(): ${JSON.stringify(this)}`); // this -> jack
        let rate = 50;
        this.salary *= (1.0 + rate / 100.0);
    }
}

let jack = new Employee("jack bauer", 100_000);

jack.increaseSalary(75); // increaseSalary(jack,75)

setTimeout(() => {jack.increaseSalary();}, 5_000)
setTimeout(()=>{
    console.log(jack)
}, 7_000)
