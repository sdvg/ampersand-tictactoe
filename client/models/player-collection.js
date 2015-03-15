// player Collection - player-collection.js
var AmpCollection = require('ampersand-rest-collection');
var player = require('./player');


module.exports = AmpCollection.extend({
    model: player
});