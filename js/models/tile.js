/**
 * Created by esteban on 28/02/16.
 */
var App = App || {};

App.Models = {};

App.Models.Tile = Backbone.Model.extend({
    defaults: {
        num: null,
        id: null,
        pos :null
    }
});
