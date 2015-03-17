var app = require('ampersand-app');
var Router = require('ampersand-router');
var StartPage = require('./pages/start');
var PlayPage = require('./pages/play');

module.exports = Router.extend({
    routes: {
        '': 'start',
        'play': 'play',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    start: function () {
        app.trigger('page', new StartPage());
    },
    play: function () {
        // redirect to start page if names are not defined yet.
        if(typeof app.players === 'undefined') {
            app.router.redirectTo('start');

            return;
        }

        app.trigger('page', new PlayPage());
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
