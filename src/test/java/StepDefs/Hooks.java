package StepDefs;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Hooks {

    static WebDriver driver;
    static int x = 0;
    @Before
    public void beforeScenario(){
        if (x==0) {
            System.setProperty("webdriver.chrome.driver", ".\\src\\test\\java\\Utilities\\chromedriver.exe");
            x = 1;
        }
        driver = new ChromeDriver();


    }

    @After
    public void afterScenario(){
        driver.quit();

    }
}