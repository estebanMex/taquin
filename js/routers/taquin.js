/**
 * Created by esteban on 28/02/16.
 */

var App = App || {};

App.Routers = {};

var tilesCollection = new App.Collections.Tiles();
//var grid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var grid = [13, 2, 3, 12, 9, 11, 1, 10, 6, 4, 14, 15, 8, 7, 5];

// ajout d'un element dans le tableau apartir d'un index (5), sans supprimer (0), la valeur (--)
// dans la derniere case
//grid.splice(grid.length, 0, '--');

grid.splice(7, 0, '--');
// top right
//grid.splice(0, 0, '--');

_.each(grid, function (num, index) {
    tilesCollection.add(new App.Models.Tile({num: num, id: index, pos: index}));
});

App.Routers.Taquin = Backbone.Router.extend({
    initialize: function () {

        this.route("", "root", function () {
            this.mainRender();
        });

    },

    mainRender: function () {
        var taquinView = new App.Views.Taquin({el: "#game", collection: tilesCollection});
        taquinView.render();
    },

    routes: {
        'test': function () {
            alert('test');
        }
    }
});