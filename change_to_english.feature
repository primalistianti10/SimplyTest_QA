Feature: Change language to English from Indonesia

  Scenario: Change language from Indonesia to English
    Given Language of the website is Indonesia
    When I visit the page of website
    Then I change the language to English