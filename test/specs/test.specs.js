const { expect } = require("chai");

    describe("Test Suite", () => {

        //Homework Task #1

        it("First test - Get Homepage Title", async () => {
            await browser.url("");
            const pageTitle = await browser.getTitle();
            expect(pageTitle).to.equal("Wikipedia");
        });

        it( "Second test - Search for 'EPAM'", async () => {
            await browser.url("");
            await $('input[id="searchInput"]').setValue('Epam');
            await $("//button[@type='submit']").click();
            const pageTitle = await browser.getTitle()        
            expect(pageTitle).to.include("Epam");
        });

        it("Third test - Change language of website", async () => {
            await browser.url("");
            await $('button[id="js-lang-list-button"]').click();
            browser.pause(5000);
            await $('a[id="js-link-box-de"]').click();
            const pageTitle = await browser.getTitle();
            expect(pageTitle).to.equal("Wikipedia – Die freie Enzyklopädie");
        });

        it("Fourth test - Ensure language dropdown list appears", async () => {
            await browser.url("");
            await $('button[id="js-lang-list-button"]').click();
            const languageList = await $('div[id="js-lang-lists"');
            expect (languageList).to.exist;
        });

        it("Fifth test - wait for dialog box to image to be displayed until clicking", async () => {
            await browser.url("");
            const languageList = await $('button[id="js-lang-list-button"]');
            await languageList.waitForDisplayed();
            await $('button[id="js-lang-list-button"]').click();
        });


        it("Sixth test - Search for 'EPAM' but before hitting enter, add 'Offices in UK' to search'", async () => {
                await browser.url("");
                await $('input[id="searchInput"]').setValue('Epam');
                await $('input[id="searchInput"]').addValue(' offices in UK');
                await $("//button[@type='submit']").click();
                const pageTitle = await browser.getTitle();
                expect(pageTitle).to.include("Epam offices in UK");
                await browser.pause(3000);
        });

        it("Seventh test - Click on the hamburger menu logo and wait fo the dropdown list to be displayed'", async () => {
            await browser.url("/w/index.php?search=EPAM+offices+in+UK&title=Special%3ASearch&ns0=1");
            await $("//div/nav").click();
            const navDropdown = await $('div[class="vector-dropdown-content"]');
            await navDropdown.waitForDisplayed();
        });

        it("Eighth test - Click on the wikipedia logo to return to the homepage'", async () => {
            await browser.url("/w/index.php?search=EPAM+offices+in+UK&title=Special%3ASearch&ns0=1");
            const wikiHomeIcon = await $('img[class="mw-logo-icon"]');
            await wikiHomeIcon.click();
            const pageTitle = await browser.getTitle();
            expect(pageTitle).to.equal("Wikipedia, the free encyclopedia");
        });

        //Homework task #2

        it("Ninth task - Execute() task - Change border colour of wiki home icon to red", async () => {
            const wikiHomeIcon = await $('img[class="mw-logo-icon"]');
            await browser.execute(function (wikiHomeIcon) {
                wikiHomeIcon.style.border = 'red solid 2px';
            }, wikiHomeIcon);
            await browser.pause(3000);
            });

        it("Tenth task - waitUntil() task - Search for 'Dog' and assert that the title text is appropriate", async() =>{
            await browser.url("");
            await $('input[id="searchInput"]').setValue('Dog');
            await $("//button[@type='submit']").click();
            await browser.waitUntil(
                async () => (await browser.getTitle() === "Dog - Wikipedia"),
                {
                    timeout: 5000,
                    interval: 600,
                    timeoutMsg: "Title was not loaded"
                }
            )
        
        });

        it("Eleventh task - get and set cookies task", async() =>{
            await browser.pause(5000);
            await browser.setCookies([
                {
                    name: "customCookie",
                    value: "42",
                },
            ]);
            const cookie = await browser.getCookies(["customCookie"]);
            console.log("cookie value");
            console.dir(cookie);
        });

 });