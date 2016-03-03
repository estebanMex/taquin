'use strict';

var Backbone = require('backbone');
require('jquery');

var _ = require('lodash');
var key = require('keymaster');

$.bb = require('../lib/bb');

module.exports = Backbone.View.extend({
	el: '#bb',
    
	template: require('../templates/bb'),

    initialize: function() {
        this.listenTo(this.model, 'change:bb', this.render); 

        _.bindAll(this, 'bb');

        key('enter', 'app', _.bind(this.bb, this));

    },

    render: function() {
        console.log(this.model.toJSON());

        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    bb: function () {
        console.log('enter')
    }
});