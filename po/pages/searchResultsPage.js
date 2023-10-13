const BasePage = require('./BasePage');
const HeaderComponent = require('../components/common/header.component');
const SearchResultsBodyContentComponent = require('../components/searchResultsPage/searchResultsBodyContent.component');

class SearchResultsPage extends BasePage {
    constructor() {
        super('');
        this.headerComponent = new HeaderComponent();
        this.searchResultsBodyContentComponent = new SearchResultsBodyContentComponent();
    }
}

module.exports = SearchResultsPage;
