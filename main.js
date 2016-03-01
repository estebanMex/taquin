/**
 * Created by esteban on 28/02/16.
 */

var App = App || {};

App.init = function () {

    new App.Routers.Taquin();

    Backbone.history.start();

};