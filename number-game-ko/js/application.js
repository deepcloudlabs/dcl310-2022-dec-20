import GameViewModel from "./game.js";

class Controller {
    #_viewModel = null;
    #_guess = $("#guess");
    #_tries = $("#tries");
    #_timeLeft = $("#timeout");
    #_playButton = $("#play");
    #_movesBody = $("#moves");
    #_timer = null;

    constructor(viewModel) {
        this.#_viewModel = viewModel;
        this.#_guess.change(() => {
            this.#_viewModel.guess = Number(this.#_guess.val());
        });
        this.#_playButton.click((event) => {
            this.#_viewModel.play();
            this.#updateView();
        });
        this.#_timer = setInterval(() => {
            this.#_viewModel.countDown();
            this.#updateView();
        }, 1_000);
    }

    #updateView() {
        this.#_tries.text(this.#_viewModel.movesLeft);
        this.#_timeLeft.text(this.#_viewModel.timeLeft);
        this.#_movesBody.empty();
        for (let move of this.#_viewModel.moves) {
            this.#_movesBody.append(
                `<tr>
                   <td>${move.step}</td>
                   <td>${move.guess}</td>
                   <td>${move.message}</td>
                 </tr>
                `
            );
        }
    }
};

jQuery(document).ready(() => {
    const viewModel = new GameViewModel();
    const controller = new Controller(viewModel);
});