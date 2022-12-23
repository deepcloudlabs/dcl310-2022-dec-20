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
}