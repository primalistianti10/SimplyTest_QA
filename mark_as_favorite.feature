Feature: Mark as favorite

  Scenario: Mark movie as a favorite
    Given I am not login as user
    When I marked movie as favorite
    Then I have to login first
    Then I can mark movie as favorite
    Then The movie already on favorite list