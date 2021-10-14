package hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
public static WebDriver driver;
	
	@Before
	public void initialization() {
		System.setProperty("webdriver.chrome.driver", ".\\driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://realty-real-estatem1.upskills.in/admin/");
		driver.manage().window().maximize();
	}
	
	@After
	public void closeDriver(){
		driver.quit();
	}
}
