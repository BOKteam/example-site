goog.provide("modules.home.View");

modules.home.View = Backbone.View.extend({
    initialize: function () {
        this.template = _.template(tplContainer['tpl/home.html']);
    },
    events: {
    	
    },

    render: function () {
        this.$el.html(this.template());

        return this;
    }
});
