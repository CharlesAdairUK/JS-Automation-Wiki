const CentralFeaturedComponent = require('../components/languagePage/centralFeatured.component');
const LangListDropComponent = require('../components/languagePage/langListDrop.component');

class LanguagePage {
    constructor() {
        this.centralFeaturedComponent = new CentralFeaturedComponent();
        this.langListDropComponent = new LangListDropComponent();
    }

    async open() {
        await browser.url('https://www.wikipedia.org/');
    }
}

module.exports = LanguagePage;
