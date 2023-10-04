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
            // searchSubtmitBtn: 'button[class=".cdx-button.cdx-search-input__end-button');
            createAccountBtn: 'li[id="pt-createaccount-2"]',
            loginBtn: 'li[id="pt-login-2"]',
            optionsBtn: '.vector-user-links-dropdownpt-anonuserpage',
            loggedInUserNameBtn: 'li[id="pt-userpage-2"]',
        };
        return this.rootEl.$(selectors[type]);
    }

    // get rootEl() {
    //     return $('.vector-header');
    // }

    // get hamburgerMenuBtn() {
    //     return this.hamburgerMenuBtn
    // }

    // get wikiHomeIcon() {
    //     return this.rootEl.$('img[class="mw-logo-icon"]');
    // }

    // get searchInputBox() {
    //     return this.rootEl.$('input[name="search"]');
    // }

    // get searchSubmitBtn() {
    //     this.rootEl.$('button[class="cdx-button cdx-button--action-default cdx-button--weight-normal cdx-button--size-medium cdx-button--framed cdx-search-input__end-button"]');
    //     // return this.rootEl.$('//button[text()="Search"]');
    //     return this.rootEl.$('button').$('Search');
    // }

    // get createAccountBtn() {
    //     return this.rootEl.$('li[id="pt-createaccount-2"]');
    // }

    // get loginBtn() {
    //     return this.rootEl.$('li[id="pt-login-2"]');
    // }

    // get optionsBtn() {
    //     return this.rootEl.$('.vector-user-links-dropdownpt-anonuserpage');
    // }

    // get loggedInUserNameBtn() {
    //     return this.rootEl.$('li[id="pt-userpage-2"]');
    // }
}

module.exports = HeaderComponent;
