goog.provide("modules.test.View");

modules.test.View = Backbone.View.extend({
    initialize: function () {
        this.template = _.template(tplContainer['tpl/test.html']);
    },
    events: {
    	
    },

    render: function () {
        this.$el.html(this.template());

        return this;
    }
});
