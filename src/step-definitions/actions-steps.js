const {When} = require('@wdio/cucumber-framework');
const {page} = require('../po/pages/index');

When('I open {string} page', async function(pageName) {
    return page(pageName).open();
});

When('I click {string} link from Language Selector component', async function(buttonName) {
    return page('languagepage').centralFeaturedComponent.data(buttonName).click();
});
