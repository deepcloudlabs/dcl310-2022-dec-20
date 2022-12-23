class CrmViewModel {
    #_customer;
    #_fileData;

    constructor() {
        this.#_customer = new Customer({
            id: "74577790220",
            firstName: "jack",
            lastName: "bauer",
            email: "jack.bauer@example.com",
            photo: AppConfig.NO_IMAGE,
            phones: []
        });
        this.#_fileData = ko.observable({
            dataUrl: ko.observable(AppConfig.NO_IMAGE)
        });
    }

    addCustomer = () => {
        this.#_customer.photo(this.#_fileData().dataUrl());
        fetch(`${AppConfig.REST_API_BASE_URL}/customers`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: this.#_customer.toJSON()
            }
        ).then(res=>res.json())
            .then(() => alert("Customer is acquired!"))
    }
    get customer() {
        return this.#_customer;
    }
    get fileData() {
        return this.#_fileData;
    }
};