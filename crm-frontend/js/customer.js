class Customer {
    #_id;
    #_email;
    #_firstName;
    #_lastName;
    #_photo;
    #_phones;

    constructor({id, email, firstName, lastName, photo, phones}) {
        this.#_id = ko.observable(id);
        this.#_email = ko.observable(email);
        this.#_firstName = ko.observable(firstName);
        this.#_lastName = ko.observable(lastName);
        this.#_photo = ko.observable(photo);
        this.#_phones = ko.observable(phones);
    }

    toJSON = () => {
        return JSON.stringify({
            _id: this.id(),
            firstName: this.firstName(),
            lastName: this.lastName(),
            photo: this.photo(),
            email: this.email(),
            phones: this.phones(),
        });
    }

    get id() {
        return this.#_id;
    }

    get email() {
        return this.#_email;
    }

    get firstName() {
        return this.#_firstName;
    }

    get lastName() {
        return this.#_lastName;
    }

    get photo() {
        return this.#_photo;
    }

    get phones() {
        return this.#_phones;
    }

    update = (customer) => {
        this.id(customer._id);
        this.firstName(customer.firstName);
        this.lastName(customer.lastName);
        this.email(customer.email);
        this.photo(customer.phone);
        this.phones(customer.phones);
    }
}