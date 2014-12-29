/**
 * Created by JetBrains PhpStorm.
 * User: Administrator
 * Date: 14-5-12
 * Time: 5:03
 * To change this template use File | Settings | File Templates.
 */
goog.provide("modules.shell.View");
goog.require("bok.Delegate");

modules.shell.View = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(tplContainer['tpl/shell.html']);
    },

    events: {
    },

    /**
     * @param {Backbone.View} view
     * */
    writeContent: function (view) {
        $('#shellContent', this.$el).html(view.el);
        AnimateHelper.animateOnce($('#shellContent', this.$el), 'fadeIn');

        view.delegateEvents();
    },

    render: function () {
        this.$el.html(this.template());

        return this;
    }

    /*************** Event handler *****************/

});
