class CrmViewModel {
    #_customer;

    constructor() {
        this.#_customer = new Customer({
            id: "74577790220",
            firstName: "jack",
            lastName: "bauer",
            email: "jack.bauer@example.com",
            photo: AppConfig.NO_IMAGE,
            phones: []
        })
    }

    get customer() {
        return this.#_customer;
    }
};