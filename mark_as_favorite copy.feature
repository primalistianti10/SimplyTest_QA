Feature: Mark as favorite more than one movie

  Scenario: User can mark more than 1 movie as favorite
    Given I am already login as user
    When I marked more than one movie as favorite
    Then I can mark movie as favorite
    Then The movie already on favorite list