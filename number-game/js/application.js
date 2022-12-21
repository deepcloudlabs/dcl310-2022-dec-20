class Application {
    #_viewModel = null;
    #_guess = document.querySelector("#guess");
    #_tries = document.querySelector("#tries");
    #_timeLeft = document.querySelector("#timeout");
    #_playButton = document.querySelector("#play");
    #_timer = null;

    constructor(viewModel) {
        this.#_viewModel = viewModel;
        this.#_guess.addEventListener('change', (event) => {
            this.#_viewModel.guess = Number(event.target.value);
        });
        this.#_playButton.addEventListener('click', (event) => {
            this.#_viewModel.play();
            this.#updateView();
        });
        this.#_timer = setInterval(() => {
            this.#_viewModel.countDown();
            this.#updateView();
        }, 1_000);
    }

    #updateView() {
        this.#_tries.innerText = this.#_viewModel.movesLeft;
        this.#_timeLeft.innerText = this.#_viewModel.timeLeft;
    }
};

window.onload = () => {
    const viewModel = new GameViewModel();
    const application = new Application(viewModel);
}