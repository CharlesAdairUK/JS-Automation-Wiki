const BasePage = require('./BasePage');
const HeaderComponent = require('../components/common/header.component');

class HomePage extends BasePage {
    constructor() {
        super('');
        this.headerComponent = new HeaderComponent();
    }
}

module.exports = HomePage;
