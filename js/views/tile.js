/**
 * Created by esteban on 28/02/16.
 */

var App = App || {};

App.Views = App.Views || {};

App.Views.Tile = Backbone.View.extend({

    className: 'btn btn-default tile',
    model: App.Models.Tile,
    events: {
        'click': 'toggleVal'
    },
    toggleVal: function () {

        var tileCLickedModel = this.model,
            tileEmptyModel = this._getEmptyTileModel(),
            tempClicked = {
                num: tileCLickedModel.get('num')
            };

        // on a pas cliqué sur la case vide
        if (tileEmptyModel.get('num') !== this.model.get('num') &&
            this._tilesAroundEmptyTile(tileEmptyModel).indexOf(tileCLickedModel.get('id')) !== -1) {
            // changes values
            tileCLickedModel.set({num: tileEmptyModel.toJSON().num});
            tileEmptyModel.set(tempClicked);
        }

    },

    _getEmptyTileModel: function () {
        var output;

        _.each(this.collection.models, function (model) {
            if (model.get('num') === '--') {
                output = model;
            }
        });
        return output;
    },

    template: _.template("<%= num %>"),

    initialize: function () {
        var _self = this;
        this.listenTo(this.model, 'change:num', this.render);

    },

    render: function (callback) {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    _tilesAroundEmptyTile: function (tileEmptyModel) {
        var emptyTileId = tileEmptyModel.get('id'),
            tilesAround = [],
            top = emptyTileId - 4,
            bottom = emptyTileId + 4,
            left = emptyTileId - 1,
            right = emptyTileId + 1,
            limitIndexTiles = 16 - 1,
            checkLeft = _getNot([3, 7, 11, 15]),
            checkRight = _getNot([0, 4, 8, 12]);

        if (_tileVal(top, limitIndexTiles)) {
            tilesAround.push(top);
        }

        if (_tileVal(right, limitIndexTiles) && checkRight(right)) {
            tilesAround.push(right);
        }

        if (_tileVal(bottom, limitIndexTiles)) {
            tilesAround.push(bottom);
        }

        if (_tileVal(left, limitIndexTiles) && checkLeft(left)) {
            tilesAround.push(left);
        }

        return tilesAround;

        function _getNot(notVal) {

            return function (val) {
                if (notVal.indexOf(val) == -1) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        function _tileVal(val, limit) {
            return val >= 0 && val <= limit;
        }

    }

});
