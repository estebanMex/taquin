/**
 * Created by esteban on 28/02/16.
 */

var App = App || {};

App.Views = App.Views || {};

App.Views.Taquin = Backbone.View.extend({

    collection: App.Collections.Tiles,

    render: function () {
        var tiles = [],
            _self = this;

        this.collection.models.forEach(function (model) {
            tiles.push(new App.Views.Tile({model: model, collection: _self.collection}).render().el);
        });

        this.$el.append(tiles);

        return this;
    }

});