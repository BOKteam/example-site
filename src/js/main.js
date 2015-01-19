/**
 * Created by JetBrains PhpStorm.
 * User: xliu
 * Date: 04/10/13
 * Time: 16:18
 * To change this template use File | Settings | File Templates.
 */

//normally no need to change this root name space
goog.provide("root.main");

goog.require("bok.apps.preloader.PreloaderApp");
goog.require("app.components.EnveePreloaderSkin");
goog.require("app.Router");
goog.require("app.assetsList");


var preloaderApp, mainPage, imgContainer = {}, tplContainer = {};
$(document).ready(start);

function start()
{
    mainPage = document.getElementById('mainPage');
    preloaderApp = new PreloaderApp(app.assetsList.img, imgContainer, mainPage, new EnveePreloaderSkin());
    preloaderApp.setLoadInterval(10);
    preloaderApp.preloadTemplates(app.assetsList.tpl, tplContainer);
    preloaderApp.addEventListener(Event.COMPLETE, assetsLoaded);

    preloaderApp.start();
}

function assetsLoaded()
{
    //init multi-lang support
    Translations.setLang(Cookie.get('lang') || 'en');

    //init backbone
    var mainRouter = new app.Router();
    Backbone.history.start();

    //init fast click
    FastClick.attach(document.body);
}

