Feature: Sorting the favorite movie list 

  Scenario: User can sorting the favorite movie list 
    Given The movie on favorite list is not in order
    When I click the order button
    Then The movie ordered by ascending or descending
