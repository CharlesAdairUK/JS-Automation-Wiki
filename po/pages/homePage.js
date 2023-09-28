const HeaderComponent = require('../components/common/header.component');

class HomePage {
    constructor() {
        this.headerComponent = new HeaderComponent();
    }

    async open() {
        await browser.url('');
    }

    async getPageTitle() {
        return await browser.getTitle();
    }
}

module.exports = HomePage;
