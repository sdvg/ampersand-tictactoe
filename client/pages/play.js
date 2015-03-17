var app = require('ampersand-app');
var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.pages.play,
    initialize: function () {
        this.players = app.players;
    }
});