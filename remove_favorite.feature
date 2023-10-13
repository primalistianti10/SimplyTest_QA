Feature: Remove movie from favorite list

  Scenario: User remove movie from favorite list
    Given I remove the movie from favorite list
    When I click remove button
    Then The movie deleted from favorite list
