const BasePage = require('./BasePage');
const CentralFeaturedComponent = require('../components/languagePage/centralFeatured.component');
const LangListDropComponent = require('../components/languagePage/langListDrop.component');

class LanguagePage extends BasePage {
    constructor() {
        super('https://www.wikipedia.org/');
        this.centralFeaturedComponent = new CentralFeaturedComponent();
        this.langListDropComponent = new LangListDropComponent();
    }

    async open() {
        await browser.url('https://www.wikipedia.org/');
    }
}

module.exports = LanguagePage;
