'use strict';


var Backbone = require('backbone');
var _ = require('lodash');
require('jquery');
Backbone.$ = $;

var bbView = require('./views/bb');
var bbModel = require('./models/bb');

var taquinView = require('./views/taquin');
var taquinModel = require('./models/taquin');

Backbone.pubSub = _.extend({}, Backbone.Events);

module.exports = Backbone.Router.extend({

    routes: {
        '': 'index',
        'taquin': 'taquin'
    },

    initialize: function () {
        this.history = [];
        this.on('route', function (name, params) {
            var route = {
                name: name,
                params: params,
                fragment: Backbone.history.fragment
            };
            this.history.push(route);
        }, this);
    },

    /*==============================
     =            Routes            =
     ==============================*/

    // # (/)
    index: function () {
        this.trigger('router:showView', new bbView({model: new bbModel()}));
    },

    // # (taquin)
    taquin: function () {
        this.trigger('router:showView', new taquinView({model: new taquinModel()}));
    }

});