var app = require('ampersand-app');
var Router = require('ampersand-router');
var StartPage = require('./pages/start');

module.exports = Router.extend({
    routes: {
        '': 'home',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        app.trigger('page', new StartPage({
        }));
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
