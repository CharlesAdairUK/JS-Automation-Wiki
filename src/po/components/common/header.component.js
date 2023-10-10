const BaseComponent = require('./basecomponent.component');

class HeaderComponent extends BaseComponent {
    constructor() {
        super('.vector-header');
    }

    data(type) {
        const selectors = {
            hamburgerMenuBtn: '.vector-main-menu-landmark',
            wikiHomeIcon: 'img[class="mw-logo-icon"]',
            searchInputBox: 'input[name="search"]',
            searchSubmitBtn: 'button[class="cdx-button cdx-button--action-default cdx-button--weight-normal cdx-button--size-medium cdx-button--framed cdx-search-input__end-button"]',
            createAccountBtn: 'li[id="pt-createaccount-2"]',
            loginBtn: 'li[id="pt-login-2"]',
            optionsBtn: '.vector-user-links-dropdownpt-anonuserpage',
            loggedInUserNameBtn: 'li[id="pt-userpage-2"]',
        };
        return this.rootEl.$(selectors[type]);
    }
}

module.exports = HeaderComponent;
