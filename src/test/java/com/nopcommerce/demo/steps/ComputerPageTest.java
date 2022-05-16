package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class ComputerPageTest {
    @And("^I click on computer link$")
    public void iClickOnComputerLink() {
        new HomePage().clickOnComputerLink();
    }

    @Then("^I can see computer text on computer page$")
    public void iCanSeeComputerTextOnComputerPage() {
        Assert.assertEquals("error","Computers",new ComputerPage().verifyComputersText());
    }

    @And("^I click on desktop link$")
    public void iClickOnDesktopLink() {
        new ComputerPage().clickOnDesktopLink();
    }

    @Then("^I can see desktop text on desktop page$")
    public void iCanSeeDesktopTextOnDesktopPage() {
    Assert.assertEquals("error","Desktops",new DesktopsPage().verifyDesktopText());
    }


    @And("^I click on build your own computer$")
    public void iClickOnBuildYourOwnComputer() {
        new DesktopsPage().clickOnBuildYourComputer();
    }

    @And("^I select processor processor \"([^\"]*)\"$")
    public void iSelectProcessorProcessor(String processor)  {
        new BuildYourOwnComputerPage().selectProcessorFromDropDown(processor);
    }

    @And("^I select RAM ram \"([^\"]*)\"$")
    public void iSelectRAMRam(String ram)  {
        new BuildYourOwnComputerPage().selectRAMFromDropDown(ram);
    }

    @And("^I select HDD hdd \"([^\"]*)\"$")
    public void iSelectHDDHdd(String hdd)  {
        new BuildYourOwnComputerPage().selectHDDRadioButton(hdd);
    }

    @And("^I select OS os \"([^\"]*)\"$")
    public void iSelectOSOs(String os)  {
        new BuildYourOwnComputerPage().selectOSRadioButton(os);
    }

    @And("^I select Software software \"([^\"]*)\"$")
    public void iSelectSoftwareSoftware(String software)  {
        new BuildYourOwnComputerPage().selectSoftwareCheckBox(software);
    }

    @And("^I click on ADD TO CART Button$")
    public void iClickOnADDTOCARTButton() {
        new BuildYourOwnComputerPage().clickAddToCart();
    }

    @Then("^Verify message The product has been added to your shopping cart$")
    public void verifyMessageTheProductHasBeenAddedToYourShoppingCart() {
    Assert.assertEquals("error","The product has been added to your shopping cart",new BuildYourOwnComputerPage().verifyAddToCartText());
    }
}
