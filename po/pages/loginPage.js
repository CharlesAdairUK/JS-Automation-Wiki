const BasePage = require('./BasePage');
const HeaderComponent = require('../components/common/header.component');
const UserLoginFormComponent = require('../components/loginPage/userLoginForm.component');

class LoginPage extends BasePage {
    constructor() {
        super('w/index.php?returnto=Main+Page&title=Special:UserLogin&centralAuthAutologinTried=1&centralAuthError=Not+centrally+logged+in');
        this.headerComponent = new HeaderComponent();
        this.userLoginFormComponent = new UserLoginFormComponent();
    }

    async open() {
        await browser.url('w/index.php?returnto=Main+Page&title=Special:UserLogin&centralAuthAutologinTried=1&centralAuthError=Not+centrally+logged+in');
    }
}

module.exports = LoginPage;
