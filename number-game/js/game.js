class GameViewModel {
    #_secret;
    #_guess;
    #_movesLeft;
    #_moves;
    #_timeLeft;

    constructor() {
        this.#_secret = this.#createSecret();
        this.#_guess = 50;
        this.#_movesLeft = 7;
        this.#_moves = [];
        this.#_timeLeft = 60;
    }

    //region get/set
    get guess() {
        return this.#_guess;
    }

    get timeLeft() {
        return this.#_timeLeft;
    }

    get movesLeft() {
        return this.#_movesLeft;
    }

    get moves() {
        return [...this.#_moves];
    }

    set guess(value) {
        this.#_guess = Number(value);
    }
    //endregion

    
    #createSecret() {
        return Math.floor(100 * Math.random()) + 1;
    }
}