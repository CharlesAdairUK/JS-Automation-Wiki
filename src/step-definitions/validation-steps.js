const {Then} = require("wdio-cucumber-framework");
const compareText = require("./utils/compareText");
const { compare } = require("b4a");

Then('Page title should {string} {string}', async function (shouldBeParameter, expectedTtitleTextitle) {
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText, shouldBeParameter);
});