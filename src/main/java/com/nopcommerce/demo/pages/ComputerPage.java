package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());

    public ComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h1[contains(text(),'Computers')]")
    WebElement computersPage;

    @FindBy(xpath = "//li[@class='inactive']//a[normalize-space()='Desktops']")
    WebElement desktopPageLink;

    @FindBy(xpath = "//li[@class='inactive']//a[normalize-space()='Notebooks']")
    WebElement notebooksPageLink;

    @FindBy(xpath = "//li[@class='inactive']//a[normalize-space()='Software']")
    WebElement softwarePageLink;


    public String verifyComputersText() {
        log.info("Verify Computer text is displayed : " + computersPage.toString());
        return getTextFromElement(computersPage);
    }
    public void clickOnDesktopLink() {
        clickOnElement(desktopPageLink);
        log.info("Verify Desktop text is displayed : " + desktopPageLink.toString());
    }
    public void clickOnNotebookLink() {
        clickOnElement(notebooksPageLink);
        log.info("Verify Notebook text is displayed : " + notebooksPageLink.toString());

    }

    public void clickOnSoftwareLink() {
        clickOnElement(softwarePageLink);
        log.info("Verify Software text is displayed : " + softwarePageLink.toString());

    }


}
