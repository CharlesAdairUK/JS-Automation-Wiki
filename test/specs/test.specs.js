const { expect } = require("chai");

describe("Test Suite", () => {
    it("First test - Get Homepage Title", async () => {
        await browser.url("https://www.wikipedia.org/");
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.equal("Wikipedia");
    });

    it("Second test - Search for 'EPAM'", async () => {
        await browser.url("https://www.wikipedia.org/");
        await $('input[id="searchInput"]').setValue('Epam');
        await $("//button[@type='submit']").click();
        const pageTitle = await browser.getTitle()        
        expect(pageTitle).to.include("Epam");
    });

    it("Third test - Change language of website", async () => {
        await browser.url("https://www.wikipedia.org/");
        await $('button[id="js-lang-list-button"]').click();
        browser.pause(5000);
        await $('a[id="js-link-box-de"]').click();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.equal("Wikipedia – Die freie Enzyklopädie");
    });

    it("Fourth test - Ensure language dropdown list appears", async () => {
        await browser.url("https://www.wikipedia.org/");
        await $('button[id="js-lang-list-button"]').click();
        const languageList = await $('div[id="js-lang-lists"');
        expect (languageList).to.exist;
    });

    it("Fifth test - wait for dialog box to image to be displayed until clicking", async () => {
        await browser.url("https://www.wikipedia.org/");
        await $('button[id="js-lang-list-button"]').click();
        const languageList = await $('button[id="js-lang-list-button"]');
        await languageList.waitForDisplayed();
        await $('button[id="js-lang-list-button"]').click();
       
       // await languageList.waitForDisplayed({ reverse: true});
       // await $('button[id="js-lang-list-button"]').click();
      //  const languageList = await $('div[id="js-lang-lists"');
       // expect (languageList).isPresent();
        });


    it("Sixth test - Search for 'EPAM' but before hitting enter, add 'Offices in UK' to search'", async () => {
            await browser.url("https://www.wikipedia.org/");
            await $('input[id="searchInput"]').setValue('Epam');
            await $('input[id="searchInput"]').addValue(' offices in UK');
            await $("//button[@type='submit']").click();
            const pageTitle = await browser.getTitle();
            expect(pageTitle).to.include("Epam offices in UK");
        });

    it("Seventh test - Click on the hamburger menu logo and wait fo the dropdown list to be displayed'", async () => {
        await browser.url("https://en.wikipedia.org/w/index.php?search=EPAM+offices+in+UK&title=Special%3ASearch&ns0=1");
        await $("//div/nav").click();
        const navDropdown = await $('div[class="vector-dropdown-content"]');
        await navDropdown.waitForDisplayed();
    });

    it("Eigth test - Click on the wikipedia logo return to the homepage'", async () => {
        await browser.url("https://en.wikipedia.org/w/index.php?search=EPAM+offices+in+UK&title=Special%3ASearch&ns0=1");
        //await $("//div/nav").click();
        const wikiHomeIcon = await $('img[class="mw-logo-icon"]');
        await wikiHomeIcon.click();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).to.equal("Wikipedia, the free encyclopedia");
    });

    });