const {Then} = require('@wdio/cucumber-framework');
const compareText = require("./utils/compare-text");
const {page} = require("../po/pages/index");
const { compare } = require("b4a");

Then('Page title should {string} {string}', async function (shouldBeParameter, titleText) {
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText, shouldBeParameter);
});
