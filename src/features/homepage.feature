Feature: Homepage

Scenario: 'Get Homepage Title'
    Given I open "Homepage" page
    Then Page title should be equal to "Wikipedia, the free encyclopedia"
    