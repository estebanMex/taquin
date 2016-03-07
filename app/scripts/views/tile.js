'use strict';

var Backbone = require('backbone');
require('jquery');

var _ = require('lodash');
var key = require('keymaster');

module.exports = Backbone.View.extend({

    className: 'tile btn btn-default',

    template: require('../templates/tile'),

    initialize: function () {
        this.listenTo(this.model, "change", this.render);
        
        this.render();
    },

    events: {
        'click': 'toggleVal'
    },

    toggleVal: function () {
        Backbone.pubSub.trigger('tile:clicked', this.model);
    },

    render: function () {
        // @TODO: penser a rajouter un attribut pour faire ressortir les tilesAround à la creation
        //console.log(this.model._tilesAroundTileOfEmptyTile());
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }
});