const BaseComponent = require('../common/basecomponent.component');

class UserLoginFormComponent extends BaseComponent {
    constructor() {
        super('div[id="userloginForm"]');
    }

    data(type) {
        const selectors = {
            passwordInputBox: 'input[id="wpPassword1"]',
            usernameInputBox: 'input[id="wpName1"]',
            rememberMeCheckbox: 'input[name="wpRemember"]',
            loginSubmitBtn: '//button[@type=\'submit\']',
            helpBtn: 'a[href="https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Logging_in"]',
            forgotPasswordBtn: 'a[href="/wiki/Special:PasswordReset"]',
            joinWikipediaBtn: 'a[id="mw-createaccount-join"]',
        };
        return this.rootEl.$(selectors[type]);
    }
}

module.exports = UserLoginFormComponent;
