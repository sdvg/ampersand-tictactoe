// player Model - player.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
    props: {
        name: ['string'],
        mark: ['number'],
        score: ['number']
    }
});