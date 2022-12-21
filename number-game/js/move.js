export default class Move { // immutable class
    #_step;
    #_guess;
    #_message;

    constructor(step, guess, message) {
        this.#_step = step;
        this.#_guess = guess;
        this.#_message = message;
    }

    get step() {
        return this.#_step;
    }

    get guess() {
        return this.#_guess;
    }

    get message() {
        return this.#_message;
    }
}