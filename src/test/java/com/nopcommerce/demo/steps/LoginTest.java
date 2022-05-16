package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        Assert.assertEquals("Login page not displayed", "Welcome, Please Sign In!",
                new LoginPage().getWelcomeText());
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new LoginPage().enterEmailId(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see error message \"([^\"]*)\"$")
    public void iShouldSeeErrorMessage(String errorMessage) {
        Assert.assertEquals("Error", errorMessage, new LoginPage().getErrorMessage());

    }

    @Then("^User should see log out link$")
    public void userShouldSeeLogOutLink() throws InterruptedException {
        new HomePage().logoutLinkDisplayed();
        Thread.sleep(1500);
    }

    @And("^I click on log out link$")
    public void iClickOnLogOutLink() {
        new HomePage().clickOnLogoutLink();
    }

    @Then("^User should see log in link$")
    public void userShouldSeeLogInLink() {
        new HomePage().loginLinkDisplayed();
    }
}
