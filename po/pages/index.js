const BasePage = require('./BasePage');
const Homepage = require('./homePage');
const LanguagePage = require('./languagePage');
const SearchResultsPage = require('./searchResultsPage');
const LoginPage = require('./loginPage');

function page(name) {
    const items = {
        homepage: new Homepage(),
        languagepage: new LanguagePage(),
        searchresultspage: new SearchResultsPage(),
        loginpage: new LoginPage(),
        basepage: new BasePage(),
    };
    return items[name.toLowerCase()];
}

module.exports = {
    Homepage,
    LanguagePage,
    SearchResultsPage,
    LoginPage,
    BasePage,
    page,
};
