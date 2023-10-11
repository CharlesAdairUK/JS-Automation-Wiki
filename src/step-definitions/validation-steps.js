const {Then} = require('@wdio/cucumber-framework');
const compareText = require('./utils/compare-text');

Then('Page title should {string} {string}', async function(shouldBeParameter, titleText) {
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText, shouldBeParameter);
});
