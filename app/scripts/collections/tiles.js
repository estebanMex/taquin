'use strict';

var Backbone = require('backbone');

var TileModel = require('../models/tile');

module.exports = Backbone.Collection.extend({
    model: TileModel,

    url: 'http://localhost:8080/data/grid.js',

    initialize: function() {
        // this.on('reset', function (collection) {

        // });
    },

    parse: function(response)  {
        return response;
    }
});