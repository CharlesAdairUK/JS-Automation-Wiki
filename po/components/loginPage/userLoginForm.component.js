class UserLoginFormComponent {
    get rootEl() {
        return $('div[id="userloginForm"]');
    }

    get usernameInputBox() {
        return this.rootEl.$('input[id="wpName1"]');
    }

    get passwordInputBox() {
        return this.rootEl.$('input[id="wpPassword1"]');
    }

    get rememberMeCheckbox() {
        return this.rootEl.$('input[name="wpRemember"]');
    }

    get loginSubmitBtn() {
        return this.rootEl.$('//button[@type=\'submit\']');
    }

    get helpBtn() {
        return this.rootEl.$('a[href="https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Logging_in"]');
    }

    get forgotPasswordBtn() {
        return this.rootEl.$('a[href="/wiki/Special:PasswordReset"]');
    }

    get joinWikipediaBtn() {
        return this.rootEl.$('a[id="mw-createaccount-join"]');
    }
}

module.exports = UserLoginFormComponent;
