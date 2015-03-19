var app = require('ampersand-app');
var PageView = require('./base');
var templates = require('../templates');
var PlayerForm = require('../forms/player.js');
var Player = require('../models/player.js');
var PlayerCollection = require('../models/player-collection.js');

module.exports = PageView.extend({
    pageTitle: 'Start',
    template: templates.pages.start,
    render: function () {
        this.renderWithTemplate();
        this.form = new PlayerForm({
            data: {
                player0: "",
                player1: ""
            },
            el: this.el,
            submitCallback: function (data) {
                var players = new PlayerCollection();
                players.add(new Player({mark: app.MARK_NOUGHT, name: data.player0, score: 0}));
                players.add(new Player({mark: app.MARK_CROSS, name: data.player1, score: 0}));

                app.drawCount = 0;
                app.players = players;
                app.router.redirectTo('play');
            }
        });
    }
});
