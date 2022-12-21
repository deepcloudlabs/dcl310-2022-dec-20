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

    play = () => {
        this.#_movesLeft--;
        if (this.#_guess === this.#_secret) {
            //TODO: Player wins the game
        } else {
            if (this.#_movesLeft === 0) {
                //TODO: Player loses the game
            } else {
                let message = "Pick smaller one!";
                if (this.#_guess < this.#_secret) {
                    message = "Pick larger one!"
                }
                let move = new Move(
                    7 - this.#_movesLeft,
                    this.#_guess,
                    message);
                this.#_moves.push(move);
            }
        }
    }

    #createSecret() {
        return Math.floor(100 * Math.random()) + 1;
    }

    countDown() {
        this.#_timeLeft--;
        if (this.#_timeLeft <= 0){
           //TODO: Player loses the game
        }
    }
}