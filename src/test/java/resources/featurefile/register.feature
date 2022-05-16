Feature: Registration Test
  As a user i want to register on nop commerce website

  @smoke @regression
 Scenario: User should navigate to register page successfully
  Given I am on homepage
  And I click on register link
  Then I should see register text on registration page

    @sanity @regression
 Scenario: verify that FirstName LastName Email Password And ConfirmPassword fields are mandatory
  Given I am on homepage
  And I click on register link
  And I click on register button
  Then I should see First name is required error message
  Then I should see Last name is required error message
  Then I should see Email is required error message
  Then I should see Password is required error message
  Then I should see confirm password is required error message

      @regression
  Scenario Outline: User should create account successfully
    Given I am on homepage
    When I click on register link
    And I enter first name "<firstname>"
    And I enter last name "<lastname>"
    And I select day "<day>"
    And I select month "<month>"
    And I select year "<year>"
    And I enter email "<email>"
    And I enter password "<password>"
    And I enter confirm password "<confirmPassword>"
    And I click on register button
    Then registration successful
    Examples:
      |  firstname| lastname|day |  month  |year|email          |password  |confirmPassword|
      | Mahendra  | Dhoni   |  1 | October |2010|jjj01010@yahoo.com  | password | password      |
