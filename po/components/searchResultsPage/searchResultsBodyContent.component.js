const BaseComponent = require('../common/basecomponent.component');

class SearchResultsBodyContentComponent extends BaseComponent {
    constructor() {
        super('div[id="bodyContent"]');
    }

    data(type) {
        const selectors = {
            searchDYMbtn: 'a[id="mw-search-DYM-suggestion"]',
        };
        return this.rootEl.$(selectors[type]);
    }
}

module.exports = SearchResultsBodyContentComponent;
