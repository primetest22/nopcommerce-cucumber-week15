$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Computer page test",
  "description": "As a user i want to navigate to computer page",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3957738200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to computer page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on computer link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I can see computer text on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 83288900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerLink()"
});
formatter.result({
  "duration": 634001500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iCanSeeComputerTextOnComputerPage()"
});
formatter.result({
  "duration": 44660800,
  "status": "passed"
});
formatter.after({
  "duration": 681684500,
  "status": "passed"
});
formatter.before({
  "duration": 2716980600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user should navigate to desktop page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on computer link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can see desktop text on desktop page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 17100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerLink()"
});
formatter.result({
  "duration": 521318700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 20531537200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iCanSeeDesktopTextOnDesktopPage()"
});
formatter.result({
  "duration": 36695700,
  "status": "passed"
});
formatter.after({
  "duration": 667113700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify user should build your own computer and should add to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-build-your-own-computer-and-should-add-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on computer link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select RAM ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD hdd \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS os \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-user-should-build-your-own-computer-and-should-add-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computer-page-test;verify-user-should-build-your-own-computer-and-should-add-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computer-page-test;verify-user-should-build-your-own-computer-and-should-add-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computer-page-test;verify-user-should-build-your-own-computer-and-should-add-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computer-page-test;verify-user-should-build-your-own-computer-and-should-add-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2664256100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify user should build your own computer and should add to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-build-your-own-computer-and-should-add-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on computer link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select RAM ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerLink()"
});
formatter.result({
  "duration": 503847700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 20482506100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1592883500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 30
    }
  ],
  "location": "ComputerPageTest.iSelectProcessorProcessor(String)"
});
formatter.result({
  "duration": 86348900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 18
    }
  ],
  "location": "ComputerPageTest.iSelectRAMRam(String)"
});
formatter.result({
  "duration": 65053400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 18
    }
  ],
  "location": "ComputerPageTest.iSelectHDDHdd(String)"
});
formatter.result({
  "duration": 53867200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 16
    }
  ],
  "location": "ComputerPageTest.iSelectOSOs(String)"
});
formatter.result({
  "duration": 51482400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 28
    }
  ],
  "location": "ComputerPageTest.iSelectSoftwareSoftware(String)"
});
formatter.result({
  "duration": 49385000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 41732800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.verifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 952528600,
  "status": "passed"
});
formatter.after({
  "duration": 653699300,
  "status": "passed"
});
formatter.before({
  "duration": 2007203300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify user should build your own computer and should add to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-build-your-own-computer-and-should-add-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on computer link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select RAM ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS os \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerLink()"
});
formatter.result({
  "duration": 534802300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 20559705900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1641985300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 30
    }
  ],
  "location": "ComputerPageTest.iSelectProcessorProcessor(String)"
});
formatter.result({
  "duration": 39404500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 18
    }
  ],
  "location": "ComputerPageTest.iSelectRAMRam(String)"
});
formatter.result({
  "duration": 56091100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 18
    }
  ],
  "location": "ComputerPageTest.iSelectHDDHdd(String)"
});
formatter.result({
  "duration": 50799500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 16
    }
  ],
  "location": "ComputerPageTest.iSelectOSOs(String)"
});
formatter.result({
  "duration": 45162800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 28
    }
  ],
  "location": "ComputerPageTest.iSelectSoftwareSoftware(String)"
});
formatter.result({
  "duration": 41562300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 36429700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.verifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 886838900,
  "status": "passed"
});
formatter.after({
  "duration": 682912900,
  "status": "passed"
});
formatter.before({
  "duration": 1871818700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify user should build your own computer and should add to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-build-your-own-computer-and-should-add-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on computer link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select RAM ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 71800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerLink()"
});
formatter.result({
  "duration": 501101900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 20538529600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1621320000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 30
    }
  ],
  "location": "ComputerPageTest.iSelectProcessorProcessor(String)"
});
formatter.result({
  "duration": 40238100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 18
    }
  ],
  "location": "ComputerPageTest.iSelectRAMRam(String)"
});
formatter.result({
  "duration": 55270000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 18
    }
  ],
  "location": "ComputerPageTest.iSelectHDDHdd(String)"
});
formatter.result({
  "duration": 46998000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 16
    }
  ],
  "location": "ComputerPageTest.iSelectOSOs(String)"
});
formatter.result({
  "duration": 45260300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 28
    }
  ],
  "location": "ComputerPageTest.iSelectSoftwareSoftware(String)"
});
formatter.result({
  "duration": 40969300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 37436000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.verifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 290037200,
  "status": "passed"
});
formatter.after({
  "duration": 664400900,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2665684000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 40500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 466323200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 24849900,
  "status": "passed"
});
formatter.after({
  "duration": 682286000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "login-test;verify-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 20,
      "id": "login-test;verify-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-test;verify-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 22,
      "id": "login-test;verify-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1885216000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 31600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 541755100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 60420100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 54836600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 397332100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 23384200,
  "status": "passed"
});
formatter.after({
  "duration": 653542100,
  "status": "passed"
});
formatter.before({
  "duration": 2686798300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 18300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 495224700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 57399000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 50247300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 429233000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 22225600,
  "status": "passed"
});
formatter.after({
  "duration": 646607300,
  "status": "passed"
});
formatter.before({
  "duration": 1839929700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 18300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 428097300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 56752000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 50845900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 402809600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 20551700,
  "status": "passed"
});
formatter.after({
  "duration": 654610600,
  "status": "passed"
});
formatter.before({
  "duration": 2713504400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should log in successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-log-in-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@regression"
    },
    {
      "line": 24,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter email \"jjj0@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should see log out link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 21600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 467987700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jjj0@yahoo.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 53816900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 49889500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 393104200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userShouldSeeLogOutLink()"
});
formatter.result({
  "duration": 20044611600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-19PL7GD\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [50517f3a272f2a453c5f4f0b745e9d71, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56272}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56272/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 50517f3a272f2a453c5f4f0b745e9d71\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.verifyThatElementIsDisplayed(Utility.java:300)\r\n\tat com.nopcommerce.demo.pages.HomePage.logoutLinkDisplayed(HomePage.java:92)\r\n\tat com.nopcommerce.demo.steps.LoginTest.userShouldSeeLogOutLink(LoginTest.java:52)\r\n\tat ✽.Then User should see log out link(login.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 888220200,
  "status": "passed"
});
formatter.before({
  "duration": 2948754100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User should log out successfully",
  "description": "",
  "id": "login-test;user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I enter email \"jjj0101@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User should see log in link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 29500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 494543200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jjj0101@yahoo.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 58509200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 54939200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 645509100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogOutLink()"
});
formatter.result({
  "duration": 833571300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userShouldSeeLogInLink()"
});
formatter.result({
  "duration": 29027300,
  "status": "passed"
});
formatter.after({
  "duration": 658108600,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Test",
  "description": "As a user i want to register on nop commerce website",
  "id": "registration-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1905094200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "registration-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see register text on registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 32500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 524969400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iShouldSeeRegisterTextOnRegistrationPage()"
});
formatter.result({
  "duration": 26316500,
  "status": "passed"
});
formatter.after({
  "duration": 643966200,
  "status": "passed"
});
formatter.before({
  "duration": 2753876200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify that FirstName LastName Email Password And ConfirmPassword fields are mandatory",
  "description": "",
  "id": "registration-test;verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see First name is required error message",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see Last name is required error message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see Email is required error message",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I should see Password is required error message",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see confirm password is required error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 15500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 501188100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 63742000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iShouldSeeFirstNameIsRequiredErrorMessage()"
});
formatter.result({
  "duration": 25806800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iShouldSeeLastNameIsRequiredErrorMessage()"
});
formatter.result({
  "duration": 27622100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iShouldSeeEmailIsRequiredErrorMessage()"
});
formatter.result({
  "duration": 26126500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iShouldSeePasswordIsRequiredErrorMessage()"
});
formatter.result({
  "duration": 27435100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iShouldSeeConfirmPasswordIsRequiredErrorMessage()"
});
formatter.result({
  "duration": 26363500,
  "status": "passed"
});
formatter.after({
  "duration": 638585500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "User should create account successfully",
  "description": "",
  "id": "registration-test;user-should-create-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter first name \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter last name \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select day \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select year \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "registration successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "registration-test;user-should-create-account-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "day",
        "month",
        "year",
        "email",
        "password",
        "confirmPassword"
      ],
      "line": 36,
      "id": "registration-test;user-should-create-account-successfully;;1"
    },
    {
      "cells": [
        "Mahendra",
        "Dhoni",
        "1",
        "October",
        "2010",
        "jjj01010@yahoo.com",
        "password",
        "password"
      ],
      "line": 37,
      "id": "registration-test;user-should-create-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2651091600,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "User should create account successfully",
  "description": "",
  "id": "registration-test;user-should-create-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter first name \"Mahendra\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter last name \"Dhoni\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select day \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select month \"October\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select year \"2010\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email \"jjj01010@yahoo.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"password\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter confirm password \"password\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "registration successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 49600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 490702900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahendra",
      "offset": 20
    }
  ],
  "location": "RegisterTest.iEnterFirstName(String)"
});
formatter.result({
  "duration": 71603800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhoni",
      "offset": 19
    }
  ],
  "location": "RegisterTest.iEnterLastName(String)"
});
formatter.result({
  "duration": 60117100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "RegisterTest.iSelectDay(String)"
});
formatter.result({
  "duration": 67661100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "October",
      "offset": 16
    }
  ],
  "location": "RegisterTest.iSelectMonth(String)"
});
formatter.result({
  "duration": 65939300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2010",
      "offset": 15
    }
  ],
  "location": "RegisterTest.iSelectYear(String)"
});
formatter.result({
  "duration": 65874300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jjj01010@yahoo.com",
      "offset": 15
    }
  ],
  "location": "LoginTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 66572500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 59214800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "RegisterTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 61515900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 20811507800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.registrationSuccessful()"
});
formatter.result({
  "duration": 46632100,
  "status": "passed"
});
formatter.after({
  "duration": 643161900,
  "status": "passed"
});
});