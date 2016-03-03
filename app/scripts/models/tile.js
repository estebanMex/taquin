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

    toggleVal: function () {
        var tempNumModel = this.toJSON().num;
        if (this._tilesAroundTileOfEmptyTile().indexOf(this.get('position')) !== -1) {

            this._emptyTile().set({num: tempNumModel});
            this.set({num: '&nbsp;'});
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
        var tilesAroundValides = [];


        if (valid(top)) {
            tilesAroundValides.push(top);
        }

        if (valid(bottom)) {
            tilesAroundValides.push(bottom);
        }

        if (valid(left) && checkLeft(left)) {
            tilesAroundValides.push(left);
        }

        if (valid(right) && checkRight(right)) {
            tilesAroundValides.push(right);
        }

        return tilesAroundValides;

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
                    return val;
                }
            }
        }
    },

    _emptyTile: function () {
        var temp;

        _.each(this.collection.models, function (curr) {
            if (curr.get('num') == '&nbsp;') {
                temp = curr;
            }
        }, this);

        return temp;
    },

    urlRoot: '',

    // validate: function(attrs, options) {

    // },

    parse: function (response) {
        return response;
    }
});