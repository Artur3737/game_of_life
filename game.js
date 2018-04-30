const Grid = require('./grid');

class Game {
    constructor(gridSize) {
        this.grid = new Grid(gridSize, true);
    }

    play() {
        return this.grid.compute().render();    //chain -цепочный вызов (для корр-ой рабоны из методов нужно возвращать this);
    }
}

module.exports = Game;