var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var templates = require('../templates');
var ExtendedInput = InputView.extend({
    template: templates.includes.formInput()
});

module.exports = FormView.extend({
    fields: function () {
        //create fields for player 0 and 1 (labeled 1 and 2)
        var fields = [];
        for(var i = 0; i <= 1; i++) {
            fields.push(new ExtendedInput({
                label: 'Player ' + (i + 1),
                name: 'player' + i,
                value: this.data['player' + i] || '',
                required: true,
                placeholder: 'Player ' + (i + 1),
                parent: this
            }));
        }

        return fields;
    }
});