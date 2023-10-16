const BaseComponent = require('../common/basecomponent.component');

class SearchResultsBodyContentComponent extends BaseComponent {
    constructor() {
        super('a[class="mw-logo"]');
    }

    data(type) {
        const selectors = {
            wikiIcon: 'img[class="mw-logo-icon"]',
        };
        return this.rootEl.$(selectors[type]);
    }
}

module.exports = SearchResultsBodyContentComponent;
