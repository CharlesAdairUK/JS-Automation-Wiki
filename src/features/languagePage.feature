@wikiTestSuite
Feature: Language Page

@checkLanguages
    Scenario: Open the Wikipedia Language page and change the language
        When I open "LanguagePage" page
        And I click <LanguageButton> link from Language Selector component
        Then Page title should "be equal to" <TitleText>

    Examples:
        | LanguageButton | TitleText |
        | "englishBtn"    | "Wikipedia, the free encyclopedia" |
        | "germanBtn"   | "Wikipedia – Die freie Enzyklopädie" |
        | "frenchBtn"   | "Wikipédia, l'encyclopédie libre" |
        | "spanishBtn"   | "Wikipedia, la enciclopedia libre" |
        | "italianBtn"   | "Wikipedia, l'enciclopedia libera" |
        | "portugueseBtn"   | "Wikipédia, a enciclopédia livre" |
        | "japaneseBtn"   | "Wikipedia" |
        | "russianBtn"   | "Википедия — свободная энциклопедия" |
        | "chineseBtn"   | "维基百科，自由的百科全书" |
        | "arabicBtn"   | "ويكيبيديا، الموسوعة الحرة" |
