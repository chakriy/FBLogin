package StepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FBLoginStepDefs {

    WebDriver driver;


    @Given("^I'm in a Chrome Browser$")
    public void step() {
        System.out.println(" I am in GIVEN");
        System.setProperty("webdriver.chrome.driver", ".\\src\\test\\java\\Utilities\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    @When("^I entered facebook$")
    public void facebookWhen() {
        System.out.println(" I am in WHEN" + "\n");
        driver.get("https://www.facebook.com//");
    }

    @Then("^open facebook HomePage$")
    public void facebookThen() {
        System.out.println("I am in FB THEN" + "\n");
        System.out.println(driver.getTitle() + "\n");
        Assert.assertEquals(true, driver.getTitle().contains("Facebook"));
        driver.quit();


    }

    @When("^I Entered gmail$")
    public void gmailWhen() {
        System.out.println(" I am in gmail WHEN" + "\n");
        driver.get("https://www.google.com/intl/en-GB/gmail/about/#//");
    }

    @Then("^open gmail$")
    public void gmailThen() {
        System.out.println("I am in Gmail THEN");
        System.out.println(driver.getTitle() + "\n");
        Assert.assertEquals(true, driver.getTitle().contains("Gmail"));
        driver.quit();


    }

    @When("^I entered bbc$")
    public void bbcWhen() {
        System.out.println(" I am in bbc WHEN" + "\n");
        driver.get("https://www.bbc.co.uk/");
    }

    @Then("^Open bbc Homepage$")
    public void bbcThen() {
        System.out.println("I am in BBC THEN" + "\n");
        System.out.println(driver.getTitle() + "\n");
        Assert.assertEquals(true, driver.getTitle().contains("BBC"));
        driver.quit();


    }

    @When("^I Entered sky$")
    public void skyWhen() {
        System.out.println(" I am in SKY  WHEN" + "\n");
        driver.get("https://www.sky.com//");
    }

    @Then("^Open sky Homepage$")
    public void skyThen() {
        System.out.println("I am in Sky THEN" + "\n");
        System.out.println(driver.getTitle() + "\n");
        Assert.assertEquals(true, driver.getTitle().contains("Sky"));
        driver.quit();


    }

    @When("^I Entered cricinfo$")
    public void cricinfoWhen() {
        System.out.println(" I am in Cricinfo WHEN" + "\n");
        driver.get("https://www.cricinfo.com//");
    }

    @Then("^Open cricinfo$")
    public void cricinfoThen() {
        System.out.println("I am in Cricinfo THEN" + "\n");
        System.out.println(driver.getTitle() + "\n");
        Assert.assertEquals(true, driver.getTitle().contains("cricinfo"));
        driver.quit();


    }


}

