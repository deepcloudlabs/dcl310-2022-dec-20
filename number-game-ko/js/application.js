import GameViewModel from "./game.js";

const viewModel = new GameViewModel();
$(document).ready(() => {
   ko.applyBindings(viewModel);
});

export default viewModel;