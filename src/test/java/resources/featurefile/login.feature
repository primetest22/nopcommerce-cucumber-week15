Feature: Login Test
  As user I want to login into nop commerce website

@smoke @regression
Scenario: User should navigate to login page successfully
  Given I am on homepage
  When I click on login link
  Then I should navigate to login page successfully

@smoke @regression
Scenario Outline: Verify error message with invalid credentials
  Given I am on homepage
  When I click on login link
  And I enter email "<email>"
  And I enter password "<password>"
  And I click on login button
  Then I should see error message "<errorMessage>"
  Examples:
      | email              | password | errorMessage  |
      | abcd123@gmail.com  | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | xyz123@gmail.com   | abc123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | adfafasd@gmail.com | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |

 @regression @sanity
Scenario: User should log in successfully with valid credentials
  Given I am on homepage
  When I click on login link
  And I enter email "jjj0@yahoo.com"
  And I enter password "password"
  And I click on login button
  Then User should see log out link

@regression
Scenario: User should log out successfully
  Given I am on homepage
  When I click on login link
  And I enter email "jjj0101@yahoo.com"
  And I enter password "password"
  And I click on login button
  And I click on log out link
  Then User should see log in link






