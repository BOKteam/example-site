/**
 * Created by JetBrains PhpStorm.
 * User: Administrator
 * Date: 14-5-12
 * Time: 4:55
 * To change this template use File | Settings | File Templates.
 */
goog.provide("app.Router");

goog.require("modules.shell.View");
goog.require("modules.test.View");
goog.require("modules.home.View");

app.Router = Backbone.Router.extend({

    routes: {
        '': 'home',
        'test': 'test'
    },

    home: function(){
        this.home();
    },

    /**
     * @override
     * */
    execute: function (callback, args) {
        if('function' == typeof callback)
            callback.apply(this, args);
        else {
            var routeName = Backbone.history.getFragment().replace(/\/.*/, '');
            var defaultFunc = this[routeName];
            defaultFunc && defaultFunc.apply(this, args);
        }
    },

    /**
     * @override
     * */
    initialize: function () {
        this.views = {};
        this.views.shell = new modules.shell.View();
        $('body').html(this.views.shell.render().el);

        //create views
        this.createGenericView('test', new modules.test.View());
        this.createGenericView('home', new modules.home.View());
    },

    /**
     * @param {number} viewName
     * @param {number} view
     * */
    createGenericView: function(viewName, view) {
        this.views[viewName] = view;
        view.render();

        this[viewName] = Delegate.create(this, function() {
            var shell = this.views.shell;
            var routeArgs = arguments;
            shell.writeContent(view);
            view.refresh && view.refresh.apply(view, routeArgs);
       });
    },

    /**
     * Event listener
     * @private
     * */
    onOrientationChange_: function () {
        console.log('orientation change')
    }
});
