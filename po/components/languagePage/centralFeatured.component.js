const BaseComponent = require('../common/basecomponent.component');

class CentralFeaturedComponent extends BaseComponent {
    constructor() {
        super('div[class="central-featured"]');
    }

    data(type) {
        const selectors = {
            germanBtn: 'a[id="js-link-box-de"]',
        };
        return this.rootEl.$(selectors[type]);
    }
}

module.exports = CentralFeaturedComponent;
