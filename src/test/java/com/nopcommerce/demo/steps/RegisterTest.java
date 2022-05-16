package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;


public class RegisterTest {
    @And("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }


    @Then("^I should see register text on registration page$")
    public void iShouldSeeRegisterTextOnRegistrationPage() {
        Assert.assertEquals("error","Register",new RegisterPage().verifyRegisterText());
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().registerButtonClick();
    }


    @Then("^I should see First name is required error message$")
    public void iShouldSeeFirstNameIsRequiredErrorMessage() {
       Assert.assertEquals("error","First name is required.", new RegisterPage().verifyFirstNameErrorMessage());
    }

    @Then("^I should see Last name is required error message$")
    public void iShouldSeeLastNameIsRequiredErrorMessage() {
        Assert.assertEquals("error","Last name is required.", new RegisterPage().verifyLastNameErrorMessage());
    }

    @Then("^I should see Email is required error message$")
    public void iShouldSeeEmailIsRequiredErrorMessage() {
        Assert.assertEquals("error","Email is required.", new RegisterPage().verifyEmailErrorMessage());
    }

    @Then("^I should see Password is required error message$")
    public void iShouldSeePasswordIsRequiredErrorMessage() {
        Assert.assertEquals("error","Password is required.", new RegisterPage().verifyPasswordErrorMessage());
    }

    @Then("^I should see confirm password is required error message$")
    public void iShouldSeeConfirmPasswordIsRequiredErrorMessage() {
        Assert.assertEquals("error","Password is required.", new RegisterPage().verifyConfirmedPasswordErrorMessage());
    }


    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstname)  {
        new RegisterPage().firstNameClick(firstname);

    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastname)  {
        new RegisterPage().lastNameClick(lastname);

    }

    @And("^I select day \"([^\"]*)\"$")
    public void iSelectDay(String day)  {
        new RegisterPage().selectDay(day);

    }

    @And("^I select month \"([^\"]*)\"$")
    public void iSelectMonth(String month)  {
        new RegisterPage().selectMonth(month);

    }

    @And("^I select year \"([^\"]*)\"$")
    public void iSelectYear(String year)  {
        new RegisterPage().selectYear(year);

    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirmPassword)  {
        new RegisterPage().confirmPasswordClick(confirmPassword);

    }

    @Then("^registration successful$")
    public void registrationSuccessful() {
      Assert.assertEquals("error","Your registration completed",new RegisterPage().verifyRegisterPageText());
    }
}

