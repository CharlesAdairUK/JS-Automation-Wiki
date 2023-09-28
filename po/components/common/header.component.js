class HeaderComponent {
    get rootEl() {
        return $('.vector-header');
    }

    get hamburgerMenuBtn() {
        return this.rootEl.$('.vector-main-menu-landmark');
    }

    get wikiHomeIcon() {
        return this.rootEl.$('img[class="mw-logo-icon"]');
    }

    get searchInputBox() {
        return this.rootEl.$('input[name="search"]');
    }

    get searchSubmitBtn() {
        return this.rootEl.$('button[class="cdx-button cdx-button--action-default cdx-button--weight-normal cdx-button--size-medium cdx-button--framed cdx-search-input__end-button"]');
    }

    get createAccountBtn() {
        return this.rootEl.$('li[id="pt-createaccount-2"]');
    }

    get loginBtn() {
        return this.rootEl.$('li[id="pt-login-2"]');
    }

    get optionsBtn() {
        return this.rootEl.$('.vector-user-links-dropdownpt-anonuserpage');
    }

    get loggedInUserNameBtn() {
        return this.rootEl.$('li[id="pt-userpage-2"]');
    }
}

module.exports = HeaderComponent;
