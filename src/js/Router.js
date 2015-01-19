/**
 * Created by JetBrains PhpStorm.
 * User: Administrator
 * Date: 14-5-12
 * Time: 4:55
 * To change this template use File | Settings | File Templates.
 */
goog.provide("app.Router");

goog.require("bok.backboneplus.BBPRouter");
goog.require("modules.shell.View");
goog.require("modules.test.View");
goog.require("modules.home.View");

app.Router = function() {
    BBPRouter.call(this, new modules.shell.View());

    //init routes
    this.regRoutes({
        '': function() {
            this.viewFunc.home();
        },
        test: ''
    });

    //create managed views
    this.createGenericView('test', new modules.test.View());
    this.createGenericView('home', new modules.home.View());
};
BOK.inherits(app.Router, BBPRouter);

