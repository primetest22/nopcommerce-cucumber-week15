Feature: Computer page test
  As a user i want to navigate to computer page

  @smoke @regression
Scenario: Verify user should navigate to computer page successfully
  Given I am on homepage
  And I click on computer link
  Then I can see computer text on computer page

  @sanity @regression
Scenario: Verify user should navigate to desktop page successfully
  Given I am on homepage
  And I click on computer link
  And I click on desktop link
  Then I can see desktop text on desktop page

  @regression
Scenario Outline: Verify user should build your own computer and should add to cart successfully
  Given I am on homepage
  And I click on computer link
  And I click on desktop link
  And I click on build your own computer
  And I select processor processor "<processor>"
  And I select RAM ram "<ram>"
  And I select HDD hdd "<hdd>"
  And I select OS os "<os>"
  And I select Software software "<software>"
  And I click on ADD TO CART Button
  Then Verify message The product has been added to your shopping cart

Examples:
| processor                                       | ram           | hdd               | os                     | software                  |
| 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]   |Microsoft Office [+$50.00] |
| 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] |Vista Premium [+$60.00] | Acrobat Reader [+$10.00]  |
| 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]   | Total Commander [+$5.00]  |






