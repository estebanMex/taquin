'use strict';

var Backbone = require('backbone');
var _ = require('lodash');

module.exports = Backbone.Model.extend({
    defaults: {
        num: '&nbsp;',
        position: null
    },

    initialize: function () {

    },

    urlRoot: '',

    // validate: function(attrs, options) {

    // },

    parse: function (response) {
        return response;
    }
});