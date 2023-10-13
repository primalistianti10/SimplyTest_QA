Feature: Change language to Indonesia

  Scenario: Change language from English to Indonesia
    Given Language of the website is English
    When I visit the first page of website
    Then I change the language to Indonesia