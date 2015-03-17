var app = require('ampersand-app');
var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.pages.play,
    initialize: function () {
        this.player0 = app.players.at(0);
        this.player1 = app.players.at(1);

        this.gameGrid = {};
        for(var x = 0; x <= 2; x++) {
            this.gameGrid[x] = {};
            for(var y = 0; y <= 2; y++) {
                this.gameGrid[x][y] = null;
            }
        }
    }
});