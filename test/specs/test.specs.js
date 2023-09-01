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
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.include("EPAM");
    })

    it("Third test - Change language of website", async () => {
    await browser.url("https://www.wikipedia.org/");
    await $('button[id="js-lang-list-button"]').click();
    browser.pause(5000);
    await $('a[id="js-link-box-de"]').click();
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.equal("Wikipedia – Die freie Enzyklopädie");
    })

    it("Fourth test - Ensure language dropdown list appears", async () => {
    await browser.url("https://www.wikipedia.org/");
    await $('button[id="js-lang-list-button"]').click();
    const languageList = await $('div[id="js-lang-lists"');
    expect (languageList).to.exist;
    })
})