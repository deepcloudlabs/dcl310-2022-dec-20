import Move from "./move.js";

export default class GameViewModel {
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
            this.#initGame(true);
        } else {
            if (this.#_movesLeft === 0) {
                this.#initGame(false);
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
            this.#initGame(false);
        }
    }

    #initGame(wins) {
        let move= null;
        if (wins){
            move=new Move("",this.#_secret,"You win.");
        } else {
            move=new Move("",this.#_secret,"You lose.");
        }
        this.#_moves = [];
        this.#_moves.push(move);
        this.#_secret = this.#createSecret();
        this.#_timeLeft = 60;
        this.#_movesLeft = 7;
    }
}