class SearchResultsBodyContentComponent {
    get rootEl() {
        return $('div[id="bodyContent"]');
    }

    get searchDYMbtn() {
        return this.rootEl.$('a[id="mw-search-DYM-suggestion"]');
    }
}

module.exports = SearchResultsBodyContentComponent;
