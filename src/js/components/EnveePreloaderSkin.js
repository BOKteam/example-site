/**
 * Created by Enveesoft.
 * User: Liu Xinyi
 * Date: 14-5-22
 * Time: 下午3:45
 * Write the description in this section.
 */
goog.provide("app.components.EnveePreloaderSkin");

goog.require("bok.apps.preloader.components.DefaultPreloaderSkin");

BOK.inherits(EnveePreloaderSkin, DefaultPreloaderSkin);
function EnveePreloaderSkin()
{
    DefaultPreloaderSkin.call(this);

    this.view.className = 'loaderWrapper';

    //add loader img
    this.img_ = document.createElement('img');
    this.img_.src = 'img/loading.png';
    this.img_.className = 'img-responsive img-candyLandLogo';
    //BOK.addClassName(this.img_, 'img-responsive');
    this.view.appendChild(this.img_);

    //add css ticker
    $(this.view).append($( '<div class="loaderBox">'+
        '<div class="loader-head"></div>' +
        '<div class="loader-body"></div>' +
        '<div class="loader-tail"></div></div>'));

    //add load progress
    this.progress_ = document.createElement('div');
    this.progress_.className = 'progressBox';
    this.view.appendChild(this.progress_)
}

/**
 * @override
 * @param {number} loadingPercentage 0 - 100
 * */
EnveePreloaderSkin.prototype.update = function(loadingPercentage)
{
    if(loadingPercentage > 100)
        loadingPercentage = 100;

    $(".loader-body").css({width:120*loadingPercentage/100});
    this.progress_.innerHTML = Math.floor(loadingPercentage) + '%';
};

/**
 * @override
 * */
EnveePreloaderSkin.prototype.finish = function()
{
    this.progress_.innerHTML = '';
    $(".loader-tail").css({visibility:"visible"});


    var self = this;
    setTimeout(function(){
        $(self.view).addClass('animated fadeOutDown');
        setTimeout(Delegate.create(self, self.skinDisplayFinish), 1200);
    }, 1200);
};
