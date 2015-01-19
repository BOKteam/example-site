goog.provide("modules.home.View");

goog.require('bok.backboneplus.BBPView');

modules.home.View = function() {
    BBPView.call(this, tplContainer['tpl/home.html']);
};
BOK.inherits(modules.home.View, BBPView);