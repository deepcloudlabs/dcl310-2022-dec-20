class Application {
    #_viewModel = null;
    #_guess = document.querySelector("#guess");
    #_tries = document.querySelector("#tries");
    #_timeLeft = document.querySelector("#timeout");
    #_playButton = document.querySelector("#play");
    #_movesBody = document.querySelector("#moves");
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
        emptyDOMElement(this.#_movesBody);
        for (let move of this.#_viewModel.moves){
            const row = this.#_movesBody.insertRow();
            const cellNo= row.insertCell(0);
            cellNo.appendChild(document.createTextNode(move.step));
            const cellGuess=row.insertCell(1);
            cellGuess.appendChild(document.createTextNode(move.guess));
            const cellMessage=row.insertCell(2);
            cellMessage.appendChild(document.createTextNode(move.message));
        }
    }
};

window.onload = () => {
    const viewModel = new GameViewModel();
    const application = new Application(viewModel);
}