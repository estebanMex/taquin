'use strict';

var Backbone = require('backbone');

var TileModel = require('../models/tile');
var _ = require('lodash');

module.exports = Backbone.Collection.extend({

    model: TileModel,

    initialize: function () {
    },

    toggleVal: function (modelClicked) {
        var tempNumModel = modelClicked.toJSON().num;

        if (this._tilesAroundTileOfEmptyTile().indexOf(modelClicked.get('position')) !== -1) {
            this._emptyTile().set({num: tempNumModel});
            modelClicked.set({num: '&nbsp;'});
        }

    },

    _tilesAroundTileOfEmptyTile: function () {
        var positionEmptyTile = this._emptyTile().get('position');
        var top = positionEmptyTile + 4;
        var bottom = positionEmptyTile - 4;
        var left = positionEmptyTile - 1;
        var right = positionEmptyTile + 1;

        var checkLeft = getnot([3, 7, 11, 15]);
        var checkRight = getnot([0, 4, 8, 12]);
        var tilesAroundValids = [];


        if (valid(top)) {
            tilesAroundValids.push(top);
        }

        if (valid(bottom)) {
            tilesAroundValids.push(bottom);
        }

        if (valid(left) && checkLeft(left)) {
            tilesAroundValids.push(left);
        }

        if (valid(right) && checkRight(right)) {
            tilesAroundValids.push(right);
        }

        return tilesAroundValids;

        // only des vals includs in 0 and nbTiles
        function valid(val) {
            var output;
            if (val <= 15 && val >= 0) {
                output = true;
            } else {
                output = false;
            }
            return output;
        }

        // to exclude sommes values
        function getnot(toIgnore) {
            var toIgnore = toIgnore || [];

            return function (val) {
                var output;
                if (toIgnore.indexOf(val) === -1) {
                    return (val == 0) ? 1 : val;
                }
            }
        }
    },

    _emptyTile: function () {
        var temp;

        _.each(this.models, function (curr) {
            if (curr.get('num') == '&nbsp;') {
                temp = curr;
            }
        }, this);

        return temp;
    },

    parse: function (response) {
        return response;
    }
});