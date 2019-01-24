package StepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import static StepDefs.Hooks.driver;

public class ExamplesStepDefs {
   // WebDriver driver;

    @Given("^I'm in Chrome Browser$")
    public void step1() {
        System.out.println("Multiple HomePages Test");
       // System.setProperty("webdriver.chrome.driver", ".\\src\\test\\java\\Utilities\\chromedriver.exe");
        //driver = new ChromeDriver();
    }

    @When("^I entered \"([^\"]*)\"$")
    public void step2(String arg) {
        driver.get(arg);
    }

    @Then("^open \"([^\"]*)\" HomePage$")
    public void step3(String arg) {
        System.out.println(arg + " launched in Chrome browser\n");
        System.out.println(driver.getTitle() + "\n");
        System.out.println(driver.getTitle().contains(arg) + "\n");
       // driver.quit();
        System.out.println("Close the browser\n");
    }


}

