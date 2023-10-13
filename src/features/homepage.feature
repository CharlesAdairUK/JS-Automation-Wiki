@wikiTestSuite
Feature: Homepage

    @homeTitle
    Scenario: Get Homepage Title
        When I open "Homepage" page
        Then Page title should "be equal to" "Wikipedia, the free encyclopedia"

    