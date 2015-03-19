var app = require('ampersand-app');
var PageView = require('./base');
var templates = require('../templates');

module.exports = PageView.extend({
    pageTitle: 'Play',
    template: templates.pages.play,

    activePlayer: 0, //current player
    moveCount: 0, //current moves count

    render: function () {
        this.player0 = app.players.at(0);
        this.player1 = app.players.at(1);
        this.messageClass = 'alert-info';

        this.gameGrid = {};
        for(var y = 0; y <= 2; y++) {
            this.gameGrid[y] = {};
            for(var x = 0; x <= 2; x++) {
                this.gameGrid[y][x] = null;
            }
        }

        this.message = app.players.at(this.activePlayer).name + ', it\'s your turn.';

        this.renderWithTemplate(this);
        this.gameGridElem = this.el.querySelector('#gameGrid');

        return this;
    },

    props: {
        message: 'string',
        messageClass: 'string'
    },

    bindings: {
        message: {
            type: 'text',
            hook: 'message'
        },
        messageClass: {
            type: 'class',
            hook: 'message'
        }
    },

    events: {
        'click #gameGrid .gameCell.is-empty': 'setMark'
    },

    setMark: function (evt) {
        var markNames = {
            0: 'nought',
            1: 'cross'
        };

        evt.target.classList.remove('is-empty');
        evt.target.classList.add('is-' + markNames[this.activePlayer]);

        this.gameGridElem.classList.remove('active-nought');
        this.gameGridElem.classList.remove('active-cross');

        var targetData = evt.target.dataset;
        this.gameGrid[targetData.ypos][targetData.xpos] = this.activePlayer;
        var gameEnds = this.checkForWinner(targetData.ypos, targetData.xpos);

        if(!gameEnds) {
            this.activePlayer = this.activePlayer ? 0 : 1;
            this.gameGridElem.classList.add('active-' + markNames[this.activePlayer]);

            this.message = app.players.at(this.activePlayer).name + ', it\'s your turn.';

        }
    },

    //@return bool gameEnds
    checkForWinner: function (y, x) {
        var size = 3;
        this.moveCount += 1;

        //check column
        for(var i = 0; i < size; i++) {
            if(this.gameGrid[i][x] !== this.activePlayer) {
                break;
            }
            if(i === size - 1) {
                this.handleWin(this.activePlayer);
                return true;
            }
        }

        //check row
        for(var i = 0; i < size; i++) {
            if(this.gameGrid[y][i] !== this.activePlayer) {
                break;
            }
            if(i === size - 1) {
                this.handleWin(this.activePlayer);
                return true;
            }
        }

        //check diagonal
        for(var i = 0; i < size; i++) {
            if(this.gameGrid[i][i] !== this.activePlayer) {
                break;
            }
            if(i === size - 1) {
                this.handleWin(this.activePlayer);
                return true;
            }
        }

        //check reverse diagonal
        for(var i = 0; i < size; i++) {
            if(this.gameGrid[i][(size - 1) - i] !== this.activePlayer) {
                break;
            }
            if(i === size - 1) {
                this.handleWin(this.activePlayer);
                return true;
            }
        }

        if(this.moveCount === Math.pow(size, 2)) {
            this.handleDraw();
            return true;
        }

        return false;
    },

    handleWin: function (player) {
        this.message = app.players.at(this.activePlayer).name + ' wins!';
        this.messageClass = 'alert-success';
    },

    handleDraw: function () {
        this.message = 'Draw!';
        this.messageClass = 'alert-info';
    }
});