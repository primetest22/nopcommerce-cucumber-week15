package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h1[normalize-space()='Register']")
    WebElement registerPageText;

    @FindBy(xpath = "//div[@id='gender']")
    WebElement genderSelector;

    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement firstNameBox;

    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastNameBox;

    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailBox;

    @FindBy(xpath = "//input[@id='Password']")
    WebElement passwordBox;

    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement confirmPasswordBox;

    @FindBy(xpath = "//button[@id='register-button']")
    WebElement clickRegisterButton;

    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement registrationCompletedText;

    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continueButton;

    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement firstNameRequiredError;

    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement lastNameRequiredError;

    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement dateOfBirthDay;

    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement monthOfBirthMonth;

    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement yearOfBirthYear;

    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement emailRequiredError;

    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement passwordRequiredError;

    @FindBy(xpath = "//span[@id='ConfirmPassword-error']")
    WebElement confirmPasswordRequiredError;

    public String verifyRegisterPageText() {
        log.info("Verify register completed is displayed : " + registrationCompletedText.toString());
        return getTextFromElement(registrationCompletedText);
    }

    public void selectGender(String text) {
        clickOnElement(genderSelector, text);
        log.info("Select gender : " + genderSelector.toString());
    }

    public void firstNameClick(String text) {
        sendTextToElement(firstNameBox, text);
        log.info("Enter firstname : " + firstNameBox.toString());
    }

    public void lastNameClick(String text) {
        sendTextToElement(lastNameBox, text);
        log.info("Enter Lastname : " + lastNameBox.toString());
    }

    public void selectDay(String day) {
        selectByVisibleTextFromDropDown(dateOfBirthDay, day);
        log.info("select day : " + dateOfBirthDay.toString());
    }

    public void selectMonth(String monthDOB) {
        selectByVisibleTextFromDropDown(monthOfBirthMonth, monthDOB);
        log.info("select month " + monthOfBirthMonth.toString());
    }

    public void selectYear(String yeaDOB) {
        selectByVisibleTextFromDropDown(yearOfBirthYear, yeaDOB);
        log.info("select year " + yearOfBirthYear.toString());
    }

    public void enterEmailId(String text) {
        sendTextToElement(emailBox, text);
        log.info("Enter Email : " + emailBox.toString());
    }

    public void passwordClick(String text) {
        sendTextToElement(passwordBox, text);
        log.info("Enter Password : " + passwordBox.toString());
    }

    public void confirmPasswordClick(String text) {
        sendTextToElement(confirmPasswordBox, text);
        log.info("Enter Confirm Password : " + confirmPasswordBox.toString());
    }

    public void registerButtonClick() {
        clickOnElement(clickRegisterButton);
        log.info("Click in register button : " + clickRegisterButton.toString());
    }

    public String verifyRegisterText() {
        log.info("Verify Register Text is displayed : " + registerPageText.toString());
        return getTextFromElement(registerPageText);
    }

    public void clickContinueButton() {
        clickOnElement(continueButton);
        log.info("Click on continue butoon : " + continueButton.toString());
    }

    public String verifyFirstNameErrorMessage() {
        log.info("Verify First Name Required Error text : " + firstNameRequiredError.toString());
        return getTextFromElement(firstNameRequiredError);
    }

    public String verifyLastNameErrorMessage() {
        log.info("Verify First Name Required Error text : " + lastNameRequiredError.toString());
        return getTextFromElement(lastNameRequiredError);
    }

    public String verifyEmailErrorMessage() {
        log.info("Verify First Name Required Error text : " + emailRequiredError.toString());
        return getTextFromElement(emailRequiredError);
    }

    public String verifyPasswordErrorMessage() {
        log.info("Verify First Name Required Error text : " + passwordRequiredError.toString());
        return getTextFromElement(passwordRequiredError);
    }

    public String verifyConfirmedPasswordErrorMessage() {
        log.info("Verify First Name Required Error text : " + confirmPasswordRequiredError.toString());
        return getTextFromElement(confirmPasswordRequiredError);
    }


}
