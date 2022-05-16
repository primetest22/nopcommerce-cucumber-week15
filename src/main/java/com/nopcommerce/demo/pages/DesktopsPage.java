package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DesktopsPage extends Utility {

    private static final Logger log = LogManager.getLogger(DesktopsPage.class.getName());

    public DesktopsPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Desktops']")
    WebElement desktopText;

    @CacheLookup
    @FindBy(xpath = "//select[@id='products-orderby']")
    WebElement sortBy;

    @CacheLookup
    @FindBy(xpath = "//select[@id='products-pagesize']")
    WebElement displayBy;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='List']")
    WebElement selectProductList;

    @CacheLookup
    @FindBy(xpath = "//div[@class='picture']")
    WebElement selectProductFromDesktopPage;

    @CacheLookup
    @FindBy(xpath = "//img[@alt='Picture of Build your own computer']")
    WebElement buildComputer;

    public void clickOnBuildYourComputer(){
        clickOnElement(buildComputer);
    }

    public String verifyDesktopText() {
        log.info("Verify Desktop text is displayed : " + desktopText.toString());
        return getTextFromElement(desktopText);

    }

    public void sortByProduct() {
        clickOnElement(sortBy);
        log.info("Verify products are getting sorted : " + sortBy.toString());
    }

    public void displayByProduct() {
        clickOnElement(displayBy);
        log.info("Verify product are displayed : " + displayBy.toString());
    }

    public void selectProductFromList() {
        clickOnElement(selectProductList);
        log.info("Verify product selected from list : " + selectProductList.toString());
    }

    public void productFromDesktopPage(String text) {
        clickOnElement(selectProductFromDesktopPage, text);
        log.info("Select product from desktop page : " + selectProductFromDesktopPage.toString());
    }


}
