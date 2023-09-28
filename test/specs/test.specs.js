const {expect} = require('chai');
const userName = 'EpamTestCharlie';
const password = 'Tsotester123';

const HomePage = require('../../po/pages/homePage');
const LoginPage = require('../../po/pages/loginPage');
const SearchResultsPage = require('../../po/pages/searchResultsPage');
const LanguagePage = require('../../po/pages/languagePage');

const homePage = new HomePage();
const loginPage = new LoginPage();
const searchResultsPage = new SearchResultsPage();
const languagePage = new LanguagePage();

describe('Test Suite', () => {
    beforeEach(async () => {
        await homePage.open();
    });

    it('Get Homepage Title', async () => {
        const pageTitle = await homePage.getPageTitle();
        expect(pageTitle).to.equal('Wikipedia, the free encyclopedia');
    });

    it('Search for \'EPAM\'', async () => {
        await homePage.headerComponent.searchInputBox.waitAndClick();
        await homePage.headerComponent.searchInputBox.setValue('Epam');
        await homePage.headerComponent.searchSubmitBtn.waitAndClick();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.include('EPAM');
    });

    it('Change language of website', async () => {
        await languagePage.open();
        await languagePage.centralFeaturedComponent.germanBtn.waitAndClick();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.equal('Wikipedia – Die freie Enzyklopädie');
    });

    it('Ensure language dropdown list appears', async () => {
        await languagePage.open();
        await languagePage.langListDropComponent.langDropBtn.waitAndClick();
        const languageList = await languagePage.langListDropComponent.langDropContent;
        expect(languageList).to.exist;
    });

    it('Log into account', async () => {
        await homePage.headerComponent.loginBtn.waitAndClick();
        await loginPage.userLoginFormComponent.usernameInputBox.waitAndClick();
        await loginPage.userLoginFormComponent.usernameInputBox.setValue(userName);
        await loginPage.userLoginFormComponent.passwordInputBox.waitAndClick();
        await loginPage.userLoginFormComponent.passwordInputBox.setValue(password);
        await loginPage.userLoginFormComponent.loginSubmitBtn.waitAndClick();
        await homePage.headerComponent.loggedInUserNameBtn.waitAndClick();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.include('EpamTestCharlie');
    });

    it('Search for \'EPAM\' but before hitting enter, add \'Offices in USA\' to search\'', async () => {
        await homePage.headerComponent.searchInputBox.waitAndClick();
        await homePage.headerComponent.searchInputBox.setValue('Epam');
        await homePage.headerComponent.searchInputBox.addValue(' offices in USA');
        await homePage.headerComponent.searchSubmitBtn.waitAndClick();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.include('Epam offices in USA');
    });

    it('Search for content with no direct option, click on suggestion and assert suggested page has been opened', async () => {
        await homePage.headerComponent.searchInputBox.waitAndClick();
        await homePage.headerComponent.searchInputBox.setValue('Epam');
        await homePage.headerComponent.searchInputBox.addValue(' offices in USA');
        await homePage.headerComponent.searchSubmitBtn.waitAndClick();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.include('Epam offices in USA');
        await searchResultsPage.SearchResultsBodyContentComponent.searchDYMbtn.waitAndClick();
        await searchResultsPage.SearchResultsBodyContentComponent.searchDYMbtn.waitAndClick();
        const pageTitle2 = await browser.getTitle();
        expect(pageTitle2).to.include('epic office in usa');
    });

    it('Execute() task - Change border colour of wiki home icon to red', async () => {
        const wikiHomeIcon = await homePage.headerComponent.wikiHomeIcon;
        await browser.execute(function(wikiHomeIcon) {
            wikiHomeIcon.style.border = 'red solid 2px';
        }, wikiHomeIcon);
        const updatedWikiHomeIcon = await homePage.headerComponent.wikiHomeIcon;
        const borderStyle = await browser.execute(function(updatedWikiHomeIcon) {
            return window.getComputedStyle(updatedWikiHomeIcon).border;
        }, updatedWikiHomeIcon);

        expect(borderStyle).to.equal('2px solid rgb(255, 0, 0)');
    });

    it('waitUntil() task - Search for \'Cat\' and assert that the title text is appropriate', async () => {
        await homePage.headerComponent.searchInputBox.setValue('Cat');
        await homePage.headerComponent.searchSubmitBtn.waitAndClick();
        await browser.waitUntil(
            async () => (await browser.getTitle() === 'Cat - Wikipedia'),
            {
                timeout: 5000,
                interval: 600,
                timeoutMsg: 'Title was not loaded',
            },
        );
        const title = await browser.getTitle();
        expect(title).to.equal('Cat - Wikipedia');
    });

    it('Log in and log username as cookie. Use .getCookies to return value', async () => {
        await homePage.headerComponent.loginBtn.waitAndClick();
        await loginPage.userLoginFormComponent.usernameInputBox.waitAndClick();
        await loginPage.userLoginFormComponent.usernameInputBox.setValue(userName);
        await loginPage.userLoginFormComponent.passwordInputBox.waitAndClick();
        await loginPage.userLoginFormComponent.passwordInputBox.setValue(password);
        await loginPage.userLoginFormComponent.loginSubmitBtn.waitAndClick();
        await homePage.headerComponent.loggedInUserNameBtn.waitAndClick();
        await browser.setCookies([
            {
                name: 'Username',
                value: userName,
            },
        ]);
        const cookie = await browser.getCookies(['Username']);
        console.log('Username logged as cookie');
        console.dir(cookie);
    });
});
