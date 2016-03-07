'use strict';

var Backbone = require('backbone');
require('jquery');

var _ = require('lodash');
var key = require('keymaster');
var TileView = require('./tile');
var TileModel = require('../models/tile');
var TilesCollection = require('../collections/tiles');


module.exports = Backbone.View.extend({
    el: '#content',

    template: require('../templates/taquin'),

    toggleVal: function (modelClicked) {

    },

    initialize: function () {
        var _self = this;
        var tiles = [];
        var grid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        grid.splice(0, 0, '&nbsp;');

        this._tileView = TileView;
        this._tilesCollection = new TilesCollection;

        Backbone.pubSub.on('tile:clicked', function (modelClicked) {
            _self._tilesCollection.toggleVal(modelClicked);
        });

        // hydrate collection
        _.each(grid, function (curr, index) {
            tiles.push({num: curr, position: index});
        }, this);

        this._tilesCollection.reset(tiles);
        this.render();

    },

    render: function () {
        var tiles = [];
        this.$el.html(this.template(this.model.toJSON()));

        var targetTilesElement = this.$el.find('.explantion');

        _.each(this._tilesCollection.models, function (model) {
            tiles.push(new this._tileView({model: model}).render().el);
        }, this);

        targetTilesElement.append(tiles);


    },


    swapContent: function (view) {
        view.render();
    }
});