goog.provide("modules.shell.View");

goog.require("bok.Delegate");
goog.require('bok.backboneplus.BBPShellView');

modules.shell.View = function() {
    BBPView.call(this, tplContainer['tpl/shell.html']);
};
BOK.inherits(modules.shell.View, BBPShellView);

/**
 * @override
 * */
modules.shell.View.prototype.writeContent = function(view) {
    modules.shell.View.superClass_.writeContent.call(this, view);

    AnimateHelper.animateOnce($('#shellContent', this.$el), 'fadeInUp');
};

