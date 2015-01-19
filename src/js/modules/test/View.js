goog.provide("modules.test.View");

goog.require('bok.backboneplus.BBPView');

modules.test.View = function() {
    BBPView.call(this, tplContainer['tpl/test.html']);
};
BOK.inherits(modules.test.View, BBPView);
