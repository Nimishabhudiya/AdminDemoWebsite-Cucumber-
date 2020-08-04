@Discount
Feature: User able to get discount
  Scenario: User able to added discount successfully from Admin Website
    Given I am on the Login page
    When I click on the log in button
    And I click on promotion
    And I select discount from promotion
    And I click on Add new button on corner of the page
    And  I enter text in Name field
    And I click on UserPercentage
    And I enter 10 percentage discount in discount percentage field
    And I select startDate
    And I select EndDate
    And I enter text in Admin comment
    And I click on save button
    Then The new discount has been added successfully.
