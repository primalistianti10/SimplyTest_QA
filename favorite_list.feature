Feature: Favorite List

  Scenario: User see the favorite movie on Favorite List page
    Given Marked as favorite movie, saved on Favorite List page
    When User mark as favorite movie
    Then The movie on the list favorite page