'use strict';

var Backbone = require('backbone');

var bbModel = require('./models/bb');

module.exports = Backbone.Collection.extend({
    model: bbModel,

    url: '',

    initialize: function() {
        // this.on('reset', function (collection) {
           
        // });
    },

    parse: function(response)  {
        return response;
    }
});