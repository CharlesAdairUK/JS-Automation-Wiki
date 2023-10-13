const BaseComponent = require('../common/basecomponent.component');

class LangListDropComponent extends BaseComponent {
    constructor() {
        super('div[id="js-lang-lists"]');
    }

    data(type) {
        const selectors = {
            langDropBtn: 'button[id="js-lang-list-button"]',
            langDropContent: 'div[id="js-lang-lists"]',
        };
        return this.rootEl.$(selectors[type]);
    }
}

module.exports = LangListDropComponent;
