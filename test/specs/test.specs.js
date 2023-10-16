const {expect} = require('chai');
const {page} = require('../../po/pages/index');
const userName = 'EpamTestCharlie';
const password = 'Tsotester123';

describe('Test Suite', () => {
    beforeEach(async () => {
        await page('homepage').open();
    });

    it('Get Homepage Title', async () => {
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.equal('Wikipedia, the free encyclopedia');
    });

    it('Search for \'EPAM\'', async () => {
        await page('homepage').headerComponent.data('searchInputBox').setValue('Epam');
        await page('homepage').headerComponent.data('searchSubmitBtn').waitAndClick();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.include('EPAM');
    });

    it('Change language of website', async () => {
        await page('languagepage').open();
        await page('languagepage').centralFeaturedComponent.data('germanBtn').waitAndClick();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.equal('Wikipedia – Die freie Enzyklopädie');
    });

    it('Ensure language dropdown list appears', async () => {
        await page('languagepage').open();
        await page('languagepage').langListDropComponent.data('langDropBtn').waitAndClick();
        const languageList = await page('languagepage').langListDropComponent.data('langDropContent');
        expect(languageList).to.exist;
    });

    it('Log into account', async () => {
        await page('loginpage').headerComponent.data('loginBtn').waitAndClick();
        await page('loginpage').userLoginFormComponent.data('usernameInputBox').setValue(userName);
        await page('loginpage').userLoginFormComponent.data('passwordInputBox').setValue(password);
        await page('loginpage').userLoginFormComponent.data('loginSubmitBtn').waitAndClick();
        await page('loginpage').headerComponent.data('loggedInUserNameBtn').waitAndClick();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.include('EpamTestCharlie');
    });

    it('Search for \'EPAM\' but before hitting enter, add \'Offices in USA\' to search\'', async () => {
        await page('homepage').headerComponent.data('searchInputBox').setValue('Epam');
        await page('homepage').headerComponent.data('searchInputBox').addValue(' offices in USA');
        await page('homepage').headerComponent.data('searchSubmitBtn').waitAndClick();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.include('Epam offices in USA');
    });

    // it('Search for content with no direct option, click on suggestion and assert suggested page has been opened', async () => {
    //     await page('homepage').headerComponent.data('searchInputBox').setValue('Epam');
    //     await page('homepage').headerComponent.data('searchInputBox').addValue(' offices in USA');
    //     await page('homepage').headerComponent.data('searchSubmitBtn').waitAndClick();
    //     const pageTitle = await browser.getTitle();
    //     expect(pageTitle).to.include('Epam offices in USA');
    //     await page('searchresultspage').SearchResultsBodyContentComponent.data('searchDYMbtn').waitAndClick();
    //     await page('searchresultspage').SearchResultsBodyContentComponent.data('searchDYMbtn').waitAndClick();
    //     const pageTitle2 = await browser.getTitle();
    //     expect(pageTitle2).to.include('epic office in usa');
    // });

    it('Execute() task - Change border colour of wiki home icon to red', async () => {
        const wikiHomeIcon = await page('homepage').headerComponent.data('wikiHomeIcon');
        await browser.execute(function(wikiHomeIcon) {
            wikiHomeIcon.style.borderColor = 'rgb(255, 0, 0)';
        }, wikiHomeIcon);
        const updatedWikiHomeIcon = await page('homepage').headerComponent.data('wikiHomeIcon');
        const borderStyle = await browser.execute(function(updatedWikiHomeIcon) {
            return window.getComputedStyle(updatedWikiHomeIcon).borderColor;
        }, updatedWikiHomeIcon);

        expect(borderStyle).to.equal('rgb(255, 0, 0)');
    });

    it('waitUntil() task - Search for \'Cat\' and assert that the title text is appropriate', async () => {
        await page('homepage').headerComponent.data('searchInputBox').setValue('Cat');
        await page('homepage').headerComponent.data('searchSubmitBtn').waitAndClick();
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

    // it('Log in and log username as cookie. Use .getCookies to return value', async () => {
    //     await page('homepage').headerComponent.data('loginBtn').waitAndClick();
    //     await page('loginpage').userLoginFormComponent.data('usernameInputBox').setValue(userName);
    //     await page('loginpage').userLoginFormComponent.data('passwordInputBox').waitAndClick();
    //     await page('loginpage').userLoginFormComponent.data('passwordInputBox').setValue(password);
    //     await page('loginpage').userLoginFormComponent.data('loginSubmitBtn').waitAndClick();
    //     await page('loginpage').headerComponent.data('loggedInUserNameBtn').waitAndClick();
    //     await browser.setCookies([
    //         {
    //             name: 'Username',
    //             value: userName,
    //         },
    //     ]);
    //     const cookie = await browser.getCookies(['Username']);
    //     console.log('Username logged as cookie');
    //     console.dir(cookie);
    // });
});
