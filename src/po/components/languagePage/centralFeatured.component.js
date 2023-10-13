const BaseComponent = require('../common/basecomponent.component');

class CentralFeaturedComponent extends BaseComponent {
    constructor() {
        super('div[class="central-featured"]');
    }

    data(type) {
        const selectors = {
            englishBtn: 'a[id="js-link-box-en"]',
            germanBtn: 'a[id="js-link-box-de"]',
            frenchBtn: 'a[id="js-link-box-fr"]',
            spanishBtn: 'a[id="js-link-box-es"]',
            italianBtn: 'a[id="js-link-box-it"]',
            portugueseBtn: 'a[id="js-link-box-pt"]',
            japaneseBtn: 'a[id="js-link-box-ja"]',
            russianBtn: 'a[id="js-link-box-ru"]',
            chineseBtn: 'a[id="js-link-box-zh"]',
            arabicBtn: 'a[id="js-link-box-ar"]',
        };
        return this.rootEl.$(selectors[type]);
    }
}

module.exports = CentralFeaturedComponent;
