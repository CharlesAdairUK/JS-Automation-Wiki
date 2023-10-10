@wikiTestSuite
Feature: Language Page

@checkLanguages
    Scenario: Open the Language page and change language to German
        When I open "LanguagePage" page
        And I click "<LanguageButton>" link from Language Selector component
        Then Page title should "be equal to" <TitleText>

    Examples:
        | LanguageButton | TitleText
        | englishBtn    | "Wikipedia – The free encyclopedia"
        | germanBtn   | "Wikipedia – Die freie Enzyklopädie"    
