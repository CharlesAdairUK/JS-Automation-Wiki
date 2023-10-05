const HeaderComponent = require('../components/common/basecomponent.component');

class BasePage {
    constructor(url) {
        this.headerComponent = new HeaderComponent();
        this.url = url;
    }

    open() {
        browser.url(this.url);
    }

    async getPageTitle() {
        return await browser.getTitle();
    }

    async setCookies(data) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                browser.setCookies({name: key, value: data[key]});
            }
        }
    }

    async getCookies(cookieNames) {
        const cookies = {};
        const cookieData = await browser.getCookies(cookieNames);
        cookieNames.forEach((name) => {
            const cookie = cookieData.find((el) => el.name === name);
            cookies[currentCookie.name] = currentCookie.value;
        });
        return cookies;
    }

    async setToLocalStorage(key, value) {
        await browser.setToLocalStorage(key, value);
    }

    async getFromLocalStorage(key) {
        return await browser.getFromLocalStorage(key);
    }
}
module.exports = BasePage;
