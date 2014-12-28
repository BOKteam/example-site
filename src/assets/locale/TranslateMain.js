/**
 * Created by Enveesoft.
 * User: Liu Xinyi
 * Date: 14-5-22
 * Time: 上午9:54
 * Write the description in this section.
 */
var Translations = {}, TRANSLATION;

Translations.DEFAULT = {

};

/**
 * @param {string} lang The language code which follows ISO 639-1
 *          @see http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 * */
Translations.setLang = function(lang) {
    TRANSLATION = Translations['Translate'+lang.toUpperCase()] || Translations.DEFAULT;
};
