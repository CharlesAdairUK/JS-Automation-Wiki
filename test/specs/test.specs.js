const {expect} = require('chai');
const userName = 'EpamTestCharlie';
const password = 'Tsotester123';

describe('Test Suite', () => {
  it('First test - Get Homepage Title', async () => {
    await browser.url('');
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.equal('Wikipedia');
  });

  it('Second test - Search for \'EPAM\'', async () => {
    await browser.url('');
    const inputBox = await $('input[id="searchInput"]');
    const submitButton = await $('//button[@type=\'submit\']');
    inputBox.waitAndClick();
    await inputBox.setValue('Epam');
    await submitButton.waitAndClick();
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.include('EPAM');
  });

  it('Third test - Change language of website', async () => {
    await browser.url('');
    const langListButton = await $('button[id="js-lang-list-button"]');
    const deButton = await $('a[id="js-link-box-de"]');
    await langListButton.waitForClickable({timeout: 5000});
    await langListButton.waitAndClick();
    await deButton.waitAndClick();
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.equal('Wikipedia – Die freie Enzyklopädie');
  });

  it('Fourth test - Ensure language dropdown list appears', async () => {
    await browser.url('');
    const langListButton = await $('button[id="js-lang-list-button"]');
    await langListButton.waitForClickable({timeout: 5000});
    await langListButton.waitAndClick();
    const languageList = await $('div[id="js-lang-lists"');
    expect(languageList).to.exist;
  });

  it('Fifth test - log into account', async () => {
    await browser.url('/w/index.php?returnto=Main+Page&title=Special:UserLogin&centralAuthAutologinTried=1&centralAuthError=Not+centrally+logged+in');
    const userNameInputBox = await $('input[id="wpName1"]');
    const passwordInputBox = await $('input[id="wpPassword1"]');
    const submitButton = await $('//button[@type=\'submit\']');
    await userNameInputBox.waitAndClick();
    await userNameInputBox.setValue(userName);
    await passwordInputBox.waitAndClick();
    await passwordInputBox.setValue(password);
    await submitButton.waitAndClick();
    const profileButton = await $('li[id="pt-userpage-2');
    await profileButton.waitAndClick();
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.include('EpamTestCharlie');
  });

  it('Sixth test - Search for \'EPAM\' but before hitting enter, add \'Offices in USA\' to search\'', async () => {
    await browser.url('');
    const inputBox = await $('input[id="searchInput"]');
    const submitButton = await $('//button[@type=\'submit\']');
    await inputBox.waitAndClick();
    await inputBox.setValue('Epam');
    await inputBox.addValue(' offices in USA');
    await submitButton.waitAndClick();
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.include('Epam offices in USA');
  });

  it('Seventh test - Search for content with no direct option, click on suggestion and assert suggested page has been opened', async () => {
    await browser.url('');
    const inputBox = await $('input[id="searchInput"]');
    const submitButton = await $('//button[@type=\'submit\']');
    await inputBox.waitAndClick();
    await inputBox.setValue('Epam');
    await inputBox.addValue(' offices in USA');
    await submitButton.waitAndClick();
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.include('Epam offices in USA');
    const suggestionButton = await $('a[id="mw-search-DYM-suggestion"]');
    await suggestionButton.waitAndClick();
    const pageTitle2 = await browser.getTitle();
    expect(pageTitle2).to.include('epic office in usa');
  });

  it('Eighth test - Execute() task - Change border colour of wiki home icon to red', async () => {
    const wikiHomeIcon = await $('img[class="mw-logo-icon"]');
    await browser.execute(function(wikiHomeIcon) {
      wikiHomeIcon.style.border = 'red solid 2px';
    }, wikiHomeIcon);

    const updatedWikiHomeIcon = await $('img[class="mw-logo-icon"]');
    const borderStyle = await browser.execute(function(updatedWikiHomeIcon) {
      return window.getComputedStyle(updatedWikiHomeIcon).border;
    }, updatedWikiHomeIcon);

    expect(borderStyle).to.equal('2px solid rgb(255, 0, 0)');
  });

  it('Nineth test - waitUntil() task - Search for \'Cat\' and assert that the title text is appropriate', async () => {
    await browser.url('');
    const inputBox = await $('input[id="searchInput"]');
    const submitButton = await $('//button[@type=\'submit\']');
    await inputBox.setValue('Cat');
    await submitButton.waitAndClick();
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

  it('Tenth test - Log in and log username as cookie. Use .getCookies to return value', async () => {
    await browser.url('/w/index.php?returnto=Main+Page&title=Special:UserLogin&centralAuthAutologinTried=1&centralAuthError=Not+centrally+logged+in');
    const userNameInputBox = await $('input[id="wpName1"]');
    const passwordInputBox = await $('input[id="wpPassword1"]');
    const submitButton = await $('//button[@type=\'submit\']');
    await userNameInputBox.waitAndClick();
    await userNameInputBox.setValue(userName);
    await passwordInputBox.waitAndClick();
    await passwordInputBox.setValue(password);
    await submitButton.waitAndClick();
    const profileButton = await $('li[id="pt-userpage-2');
    await profileButton.waitAndClick();
    await browser.setCookies([
      {
        name: 'Username',
        value: userName,
      },
    ]);
    const cookie = await browser.getCookies(['Username']);
    console.log('USername logged as cookie');
    console.dir(cookie);
  });
});
