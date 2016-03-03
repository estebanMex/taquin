'use strict';

var Backbone = require('backbone');
require('jquery');

var _ = require('lodash');
var key = require('keymaster');

module.exports = Backbone.View.extend({

    className: 'tile btn btn-default',

    template: require('../templates/tile'),

    events: {
        'click': 'toggleVal'
    },

    toggleVal: function () {
        this.model.toggleVal();
    },

    initialize: function () {
        this.listenTo(this.model, "change", this.render);
        this.render();
    },

    render: function () {
        // @TODO: penser a rajouter un attribut pour faire ressortir les tilesAround à la creation
        //console.log(this.model._tilesAroundTileOfEmptyTile());
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }
});