package stepdefinitionpackage;

import java.util.Set;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.Hooks;

public class RegisterLoginClass {
	WebDriver driver=Hooks.driver;
	SoftAssert obj=new SoftAssert();
	Actions act=new Actions(driver);
	JavascriptExecutor executor = (JavascriptExecutor) driver;
	
	@Given("^User is on the Real Estate Website$")
	public void user_is_on_the_Real_Estate_Website() {
		try{
			System.out.println("User naviagtes to the Real Estate Website.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to naviagte to the Real Estate Website because "+e);
		}	
	}

	@When("^User goes to the Register tab$")
	public void user_goes_to_the_Register_tab() {
		try {
			driver.findElement(By.xpath("//a[starts-with(text(),'Register')]")).click();
			System.out.println("User naviagtes to the Register tab.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to naviagte to the Register tab because "+e);
		}
	}

	@Then("^User enters \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" in the fields$")
	public void user_enters_in_the_fields(String email, String firstName, String lastName) {
		try{
			if(email.equals("blank")){
				email=email.replaceAll(email, " ");
			}
			if(firstName.equals("blank")){
				firstName=firstName.replaceAll(firstName, " ");
			}
			if(lastName.equals("blank")){
				lastName=lastName.replaceAll(lastName, " ");
			}
			driver.findElement(By.id("email")).sendKeys(email);
			driver.findElement(By.id("first-name")).sendKeys(firstName);
			driver.findElement(By.id("last-name")).sendKeys(lastName);
			Thread.sleep(1000);
			System.out.println("User enters details to register.");
		}
		catch(Exception e) {
			System.out.println("User could not enter details in the fields because "+e);
		}
	}

	@Then("^User clicks on Register button$")
	public void user_clicks_on_Register_button() {
		try {
			driver.findElement(By.xpath("//input[@class='register-button']")).click();
			System.out.println("User clicks on the Register button and gets the message-");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on the Register button because "+e);
		}
	}
	
	@Then("^User gets a \"([^\"]*)\" conformation message$")
	public void user_gets_a_conformation_message(String registration) {
		try{
			String actText = "a";
			if(registration.equals("You have successfully registered to Real Estate. We have emailed your password to the email address you entered.")) {
				String replacement=driver.findElement(By.xpath("//p[contains(text(),'You have successfully')]")).getText();
				actText=actText.replaceAll(actText, replacement);
			}
			else if(registration.equals("The email address you entered is not valid.")){
				String replacement=driver.findElement(By.xpath("//p[contains(text(),'The email')]")).getText();
				actText=actText.replaceAll(actText, replacement);
			}
			else if(registration.equals("The first and last name you entered is not valid.")){
				String replacement=driver.findElement(By.xpath("//p[contains(text(),'You have successfully')]")).getText();
				actText=actText.replaceAll(actText, replacement);
			}
			else if(registration.equals("An account exists with this email address.")){
				String replacement=driver.findElement(By.xpath("//p[contains(text(),'An account')]")).getText();
				actText=actText.replaceAll(actText, replacement);
			}
			boolean result=actText.equals(registration);
			if(result==true){
				System.out.println(actText);
			}
			obj.assertEquals(actText, registration);
			obj.assertAll();
			Thread.sleep(1000);		
		}
		catch(Exception e) {
			System.out.println("User could not register to the website because "+e);
			Assert.fail();
		}
	}

	@When("^User enters \"([^\"]*)\" , \"([^\"]*)\" in the fields$")
	public void user_enters_in_the_fields(String userName, String password) {
		try{
			if(userName.equals("blank")){
				userName=userName.replaceAll(userName, " ");
			}
			if(password.equals("blank")){
				password=password.replaceAll(password, " ");
			}
			
			driver.findElement(By.id("user_login")).sendKeys(userName);
			driver.findElement(By.id("user_pass")).sendKeys(password);
			Thread.sleep(1000);
			System.out.println("User enters details to login.");
		}
		catch(Exception e) {
			System.out.println("User could not enter details in the fields because "+e);
		}
	}
	
	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button() {
		try {
			driver.findElement(By.xpath("//input[@name='login']")).click();
			System.out.println("User clicks on the login button and gets-");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on the Login button because "+e);
		}
	}

	@Then("^User \"([^\"]*)\" confirmation message is displayed$")
	public void user_confirmation_message_is_displayed(String login) {
		try{
			String actText = "a";
			if(login.equals("Dashboard")) {
				String replace=driver.findElement(By.xpath("//div[@class='wrap']/descendant::h1")).getText();
				actText=actText.replaceAll(actText, replace);
			}
			else if(login.equals("We don't have any users with that email address. Maybe you used a different one when signing up?")){
				String replace=driver.findElement(By.xpath("//p[starts-with(text(),'We')]")).getText();
				actText=actText.replaceAll(actText, replace);
			}
			else if(login.equals("You do have an email address, right?")){
				String replace=driver.findElement(By.xpath("//p[starts-with(text(),'You do')]")).getText();
				actText=actText.replaceAll(actText, replace);
			}
			else if(login.equals("The password you entered wasn't quite right. Did you forget your password?")){
				String replace=driver.findElement(By.xpath("//p[starts-with(text(),'The password')]")).getText();
				actText=actText.replaceAll(actText, replace);
			}
			else if(login.equals("You need to enter a password to login.")){
				String replace=driver.findElement(By.xpath("//p[starts-with(text(),'You need')]")).getText();
				actText=actText.replaceAll(actText, replace);
			}
			
			boolean result1=actText.equals(login);
			if(result1==true){
				System.out.println(actText);
			}
			obj.assertEquals(actText, login);
			obj.assertAll();
			Thread.sleep(1000);		
		}
		catch(Exception e) {
			System.out.println("User could not login to the website because "+e);
			Assert.fail();
		}
	}
	
	@When("^User enters \"([^\"]*)\" , \"([^\"]*)\" to login$")
	public void user_enters_to_login(String userName, String password) {
		try{
			driver.findElement(By.id("user_login")).sendKeys(userName);
			driver.findElement(By.id("user_pass")).sendKeys(password);
			Thread.sleep(1000);
			System.out.println("User enters details to login.");
		}
		catch(Exception e) {
			System.out.println("User could not enter details in the fields because "+e);
		}
	}
	
	@Then("^User clicks the Login button$")
	public void user_clicks_the_Login_button() {
		try {
			driver.findElement(By.xpath("//input[@name='login']")).click();
			System.out.println("User gets to the dashboard.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on the Login button because "+e);
		}
	}

	@When("^User hovers on Profile icon$")
	public void user_hovers_on_Profile_icon() {
		try{
			WebElement source=driver.findElement(By.xpath("//a[starts-with(text(),'Howdy')]"));
			act.moveToElement(source);
			Thread.sleep(1000);
			System.out.println("User hovers on Profile icon.");
		}
		catch(Exception e) {
			System.out.println("User could not hover on Profile icon because "+e);
		}
	}

	@Then("^User clicks on Log Out option$")
	public void user_clicks_on_Log_Out_option() {
		try{
			WebElement destination=driver.findElement(By.xpath("//li[@id='wp-admin-bar-logout']//descendant::a"));
			act.moveToElement(destination);
			act.click().build().perform();
			Thread.sleep(1000);
			System.out.println("User clicks on Log Out option.");
		}
		catch(Exception e){
			System.out.println("User could not click on Log Out because "+e);
		}	
	}

	@Then("^User gets back to the Login page$")
	public void user_gets_back_to_the_Login_page() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="My Profile – Real Estate";
			obj.assertEquals(actualTitle,expectedTitle);
			obj.assertAll();
			Thread.sleep(1000);
			System.out.println("User gets back to the Login page.");
		}
		catch(Exception e){
			System.out.println("User could not get back to the Login page because "+e);
			Assert.fail();
		}	
	}

	@When("^User clicks on Lost Your Password link$")
	public void user_clicks_on_Lost_Your_Password_link() {
		try {
			driver.findElement(By.xpath("//a[contains(text(),'Lost Your Password?')]")).click();
			System.out.println("User clicks on Forget Your Password link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Forget Your Password link because "+e);
		}
	}

	@Then("^User gets to a Lost Password page$")
	public void user_gets_to_a_Lost_Password_page() {
		try{
			boolean lost=driver.findElement(By.xpath("//h2[contains(text(),'Lost Password')]")).isDisplayed();
			if(lost==true){
				System.out.println("User is on Forget Your Password page.");
			}
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User could not get on Forget Your Password page because "+e);
		}	
	}

	@When("^User enters \"([^\"]*)\" in the field$")
	public void user_enters_in_the_field(String email) {
		try{
			if(email.equals("blank")){
				email=email.replaceAll(email, " ");
			}
			driver.findElement(By.id("user_login")).sendKeys(email);
			Thread.sleep(1000);
			System.out.println("User enters email in the field.");
		}
		catch(Exception e) {
			System.out.println("User could not enter email in the field because "+e);
		}
	}

	@When("^User clicks on Reset Password button$")
	public void user_clicks_on_Reset_Password_button() {
		try {
			driver.findElement(By.xpath("//input[@name='submit']")).click();
			System.out.println("User clicks on Reset Password button.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Reset Password button because "+e);
		}
	}
	
	@Then("^User gets a \"([^\"]*)\" message$")
	public void user_gets_a_message(String conformation) {
		try{
			String actText = "a";
			if(conformation.equals("Password reset link has been sent to your mail id.")) {
				String replace=driver.findElement(By.xpath("//p[starts-with(text(),'The email')]")).getText();
				actText=actText.replaceAll(actText, replace);
			}
			else if(conformation.equals("Invalid password reset link.")){
				String replace=driver.findElement(By.xpath("//article[@id='post-124']")).getText();
				actText=actText.replaceAll(actText, replace);
			}
			boolean result1=actText.equals(conformation);
			if(result1==true){
				System.out.println(actText);
			}
			obj.assertEquals(actText, conformation);
			obj.assertAll();
			Thread.sleep(1000);		
		}
		catch(Exception e) {
			System.out.println("User could not reset password because "+e);
			Assert.fail();
		}
	}
	
	@When("^User clicks on the Real Estate link$")
	public void user_clicks_on_the_Real_Estate_link() {
		try { 
			driver.findElement(By.xpath("//a[@title='Real Estate']")).click();
			System.out.println("User clicks on Real Estate link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Real Estate link because "+e);
		}
	}

	@Then("^User sees a Search bar$")
	public void user_sees_a_Search_bar() {
		try {
			boolean searchbar=driver.findElement(By.xpath("//input[@title='Search input']")).isDisplayed();
			if(searchbar==true){
				System.out.println("User sees a Search bar.");
			}	
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to see a Search bar because "+e);
		}
	}

	@Then("^User sees Featured Properties$")
	public void user_sees_Featured_Properties() {
		try {
			boolean featured=driver.findElement(By.xpath("//h3[contains(text(),'Featured Properties')]")).isDisplayed();
			if(featured==true){
				System.out.println("User sees Featured Properties.");
			}	
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to see Featured Properties because "+e);
		}
	}

	@Then("^User sees Realty, Home Loan, Interiors and Legal icons$")
	public void user_sees_Realty_Home_Loan_Interiors_and_Legal_icons() {
		try {
			boolean realty=driver.findElement(By.xpath("//div[@class='icon-box-1']//descendant::h3")).isDisplayed();
			if(realty==true){
				System.out.println("User sees Realty icon.");
			}	
			boolean homeloan=driver.findElement(By.xpath("//h3[contains(text(),'Home Loan')]")).isDisplayed();
			if(homeloan==true){
				System.out.println("User sees Home Loan icon.");
			}	
			boolean interiors=driver.findElement(By.xpath("//h3[contains(text(),'Interiors')]")).isDisplayed();
			if(interiors==true){
				System.out.println("User sees Interiors icon.");
			}	
			boolean legal=driver.findElement(By.xpath("//h3[contains(text(),'Legal')]")).isDisplayed();
			if(legal==true){
				System.out.println("User sees Legal icon.");
			}	
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to see Realty, Home Loan, Interiors and Legal icon because "+e);
		}
	}

	@Then("^User sees Listings For Sale, Clients, Builders and Conversion information$")
	public void user_sees_Listings_For_Sale_Clients_Builders_and_Conversion_information() {
		try {
			boolean listings=driver.findElement(By.xpath("//p[contains(text(),'Listings For Sale')]")).isDisplayed();
			if(listings==true){
				System.out.println("User sees Listings For Sale number.");
			}	
			boolean clients=driver.findElement(By.xpath("//p[contains(text(),'Clients')]")).isDisplayed();
			if(clients==true){
				System.out.println("User sees Clients number.");
			}	
			boolean builders=driver.findElement(By.xpath("//p[contains(text(),'Builders')]")).isDisplayed();
			if(builders==true){
				System.out.println("User sees Builders number.");
			}	
			boolean conversion=driver.findElement(By.xpath("//p[contains(text(),'Conversion')]")).isDisplayed();
			if(conversion==true){
				System.out.println("User sees Conversion number.");
			}	
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to see Listings For Sale, Clients, Builders and Conversion information because "+e);
		}
	}

	@When("^User sees Comments of clients$")
	public void user_sees_Comments_of_clients() {
		try {
			boolean comments=driver.findElement(By.xpath("//h3[contains(text(),'What Our')]")).isDisplayed();
			if(comments==true){
				System.out.println("User sees Comments of clients.");
			}	
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to see Comments of clients because "+e);
		}
	}
	
	@Then("^User clicks on Arrow$")
	public void user_clicks_on_Arrow() {
		try {
			driver.findElement(By.xpath("//a[@class='wpmslider-next']")).click();
			System.out.println("User clicks on arrow to see next comment.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on arrow because "+e);
		}
	}

	@Then("^User sees next comments$")
	public void user_sees_next_comments() {
		try {
			boolean nextcomment=driver.findElement(By.xpath("//p[contains(text(),'Proin')]")).isDisplayed();
			if(nextcomment==true){
				System.out.println("User sees next comments of clients.");
			}	
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to see next comments of clients because "+e);
		}
	}
	
	@When("^User sees Realty News and Articles$")
	public void user_sees_Realty_News_and_Articles() {
		try {
			boolean rnaa=driver.findElement(By.xpath("//h3[contains(text(),'Realty News')]")).isDisplayed();
			if(rnaa==true){
				System.out.println("User sees Realty News and Articles.");
			}	
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to see Realty News and Articles because "+e);
		}
	}
	
	@Then("^User clicks on Arrow in that section$")
	public void user_clicks_on_Arrow_in_that_section() {
		try {
			driver.findElement(By.xpath("//button[@class='slick-next slick-arrow']")).click();
			System.out.println("User clicks on arrow to see next article.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on arrow because "+e);
		}
	}

	@Then("^User sees next articles$")
	public void user_sees_next_articles() {
		try {
			boolean article=driver.findElement(By.xpath("//a[contains(text(),'Hiiii')]")).isDisplayed();
			if(article==true){
				System.out.println("User sees next article.");
			}	
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to see next articles because "+e);
		}
	}
	
	@When("^User goes to Real Estate page$")
	public void user_goes_to_Real_Estate_page() {
		try { 
			driver.findElement(By.xpath("//a[@title='Real Estate']")).click();
			System.out.println("User clicks on Real Estate link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Real Estate link because "+e);
		}
	}
	
	@Then("^User clicks on Realty icon$")
	public void user_clicks_on_Realty_icon() {
		try {
			WebElement source=driver.findElement(By.xpath("//i[@class='im im-icon-Building']"));
			act.moveToElement(source);
			WebElement destination=driver.findElement(By.xpath("//a[@title='Realty']"));
			act.moveToElement(destination);
			act.click().build().perform();
			System.out.println("User clicks on Realty link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Realty link because "+e);
		}
	}

	String parent=driver.getWindowHandle();
	@Then("^User gets to Realty Website$")
	public void user_gets_to_Realty_Website() {
		try{
			Set <String>s=driver.getWindowHandles();
			for(String child :s)
			{
				if(!parent.equals(child)){
					driver.switchTo().window(child);
					String actualTitle=driver.getTitle();
					String expectedTitle="Realty – Real Estate";
					obj.assertEquals(actualTitle,expectedTitle);
				}
			}
			Thread.sleep(1000);
			System.out.println("User gets to Realty Website.");
		}
		catch(Exception e){
			System.out.println("User could not get to Realty Website because "+e);
			Assert.fail();
		}	
	}

	@When("^User gets back to Real Estate website$")
	public void user_gets_back_to_Real_Estate_website() {
		try { 
			driver.switchTo().window(parent);
			System.out.println("User gets back to Real Estate website.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to get back to Real Estate Realty website because "+e);
		}
	}

	@Then("^User clicks on Home Loan icon$")
	public void user_clicks_on_Home_Loan_icon() {
		try {
			WebElement source=driver.findElement(By.xpath("//i[@class='im im-icon-Home-2']"));
			act.moveToElement(source);
			WebElement destination=driver.findElement(By.xpath("//a[@title='Home Loan']"));
			act.moveToElement(destination);
			act.click().build().perform();
			System.out.println("User clicks on Home Loan link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Home Loan icon because "+e);
		}
	}

	@Then("^User gets to Home Loan Website$")
	public void user_gets_to_Home_Loan_Website() {
		try{
			Set <String>s=driver.getWindowHandles();
			for(String child :s)
			{
				if(!parent.equals(child)){
					driver.switchTo().window(child);
					String actualTitle=driver.getTitle();
					String expectedTitle="Home Loan – Real Estate";
					obj.assertEquals(actualTitle,expectedTitle);
				}
			}
			Thread.sleep(1000);
			System.out.println("User gets to Home Loan Website.");
		}
		catch(Exception e){
			System.out.println("User could not get to Home Loan Website because "+e);
			Assert.fail();
		}	
	}
	
	@Then("^User clicks on Interiors icon$")
	public void user_clicks_on_Interiors_icon() {
		try {
			WebElement source=driver.findElement(By.xpath("//i[@class='im im-icon-Embassy']"));
			act.moveToElement(source);
			WebElement destination=driver.findElement(By.xpath("//a[@title='Interiors']"));
			act.moveToElement(destination);
			act.click().build().perform();
			System.out.println("User clicks on Interiors link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Interiors icon because "+e);
		}
	}

	@Then("^User gets to Interiors Website$")
	public void user_gets_to_Interiors_Website() {
		try{
			Set <String>s=driver.getWindowHandles();
			for(String child :s)
			{
				if(!parent.equals(child)){
					driver.switchTo().window(child);
					String actualTitle=driver.getTitle();
					String expectedTitle="Interiors – Real Estate";
					obj.assertEquals(actualTitle,expectedTitle);
				}
			}
			Thread.sleep(1000);
			System.out.println("User gets to Interiors Website.");
		}
		catch(Exception e){
			System.out.println("User could not get to Interiors Website because "+e);
			Assert.fail();
		}	
	}

	@Then("^User clicks on Legal icon$")
	public void user_clicks_on_Legal_icon() {
		try {
			WebElement source=driver.findElement(By.xpath("//i[@class='im im-icon-Testimonal']"));
			act.moveToElement(source);
			WebElement destination=driver.findElement(By.xpath("//a[@title='Legal']"));
			act.moveToElement(destination);
			act.click().build().perform();
			System.out.println("User clicks on Legal link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Legal icon because "+e);
		}
	}

	@Then("^User gets to Legal Website$")
	public void user_gets_to_Legal_Website() {
		try{
			Set <String>s=driver.getWindowHandles();
			for(String child :s)
			{
				if(!parent.equals(child)){
					driver.switchTo().window(child);
					String actualTitle=driver.getTitle();
					String expectedTitle="Legal – Real Estate";
					obj.assertEquals(actualTitle,expectedTitle);
				}
			}
			Thread.sleep(1000);
			System.out.println("User gets to Legal Website.");
		}
		catch(Exception e){
			System.out.println("User could not get to Legal Website because "+e);
			Assert.fail();
		}	
	}

	@Then("^User clicks on Browse Properties link$")
	public void user_clicks_on_Browse_Properties_link() {
		try{
			driver.findElement(By.xpath("//a[@class='flip-banner parallax']")).click();
			Thread.sleep(1000);
			System.out.println("User clicks on Browse Properties link.");
		}
		catch(Exception e) {
			System.out.println("User could not click on Browse Properties link because "+e);
		}
	}

	@Then("^User gets a list of properties$")
	public void user_gets_a_list_of_properties() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="Browse Properties – Real Estate";
			obj.assertEquals(actualTitle,expectedTitle);
			Thread.sleep(1000);
			System.out.println("User gets a list of properties.");
		}
		catch(Exception e){
			System.out.println("User could not get a list of properties because "+e);
			Assert.fail();
		}
	}

	@When("^User gets back to main website$")
	public void user_gets_back_to_main_website() {
		try { 
			driver.navigate().back();
			System.out.println("User gets back to main website.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to get back to main website because "+e);
		}
	}

	@Then("^User hovers to the Property Management picture$")
	public void user_hovers_to_the_Property_Management_picture() {
		try {
			WebElement source=driver.findElement(By.xpath("//div[@class='vc-hoverbox']"));
			act.moveToElement(source);
			System.out.println("User hovers to the Property Management picture.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to hover to the Property Management picture because "+e);
		}
	}
	
	@Then("^User clicks on the Share Details link$")
	public void user_clicks_on_the_Share_Details_link() {
		try {
			WebElement destination=driver.findElement(By.xpath("//h2[@class='vc_custom_heading']/descendant::a"));
			act.moveToElement(destination);
			act.click().build().perform();
			System.out.println("User clicks on the Share Details link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on the Share Details link because "+e);
		}
	}

	@Then("^User gets to a Contact Us Page$")
	public void user_gets_to_a_Contact_Us_Page() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="Contact – Real Estate";
			obj.assertEquals(actualTitle,expectedTitle);
			obj.assertAll();
			Thread.sleep(1000);
			System.out.println("User gets to a Contact Us Page.");
		}
		catch(Exception e){
			System.out.println("User could not get to a Contact Us Page because "+e);
			Assert.fail();
		}
	}
	
	@When("^User clicks on Contact Us link$")
	public void user_clicks_on_Contact_Us_link() {
		try {
		    executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//a[contains(text(),'Contact Us')]")));
			System.out.println("User clicks on Contact Us link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Contact Us link because "+e);
		}
	}

	@Then("^User finds an office address with a map$")
	public void user_finds_an_office_address_with_a_map() {
		try {
			boolean address=driver.findElement(By.xpath("//div[@class='office-address']/descendant::ul/descendant::li")).isDisplayed();
			boolean map=driver.findElement(By.xpath("//div[@tabindex='0']")).isDisplayed();
			if(address==true && map==true){
				System.out.println("User finds an office address with a map.");
			}	
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to find an office address with a map because "+e);
		}
	}

	@Then("^User finds phone number, web and email address$")
	public void user_finds_phone_number_web_and_email_address() {
		try {
			boolean phone=driver.findElement(By.xpath("//strong[contains(text(),'Phone:')]")).isDisplayed();
			boolean web=driver.findElement(By.xpath("//strong[contains(text(),'Web:')]")).isDisplayed();
			boolean email=driver.findElement(By.xpath("//strong[contains(text(),'E-Mail:')]")).isDisplayed();
			if(phone==true && web==true && email==true){
				System.out.println("User finds phone number, web and email address.");
			}	
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to find phone number, web and email address because "+e);
		}
	}

	@When("^User clicks on Web link$")
	public void user_clicks_on_Web_link() {
		try {
			driver.findElement(By.xpath("//ul[@class='contact-details']/descendant::li[2]/descendant::a")).click();
			System.out.println("User clicks on Web link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Web link because "+e);
		}
	}

	@Then("^User gets more information$")
	public void user_gets_more_information() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="Web Link – Real Estate";
			obj.assertEquals(actualTitle,expectedTitle);
			Thread.sleep(1000);
			System.out.println("User gets more information.");
		}
		catch(Exception e){
			System.out.println("User could not get more information because "+e);
			Assert.fail();
		}	
	}
	
	@Then("^User gets back to contact page$")
	public void user_gets_back_to_contact_page() {
		try { 
			driver.navigate().back();
			System.out.println("User gets back to contact page.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to get back to contact page because "+e);
		}
	}

	@When("^User clicks on email address link$")
	public void user_clicks_on_email_address_link() {
		try {
			driver.findElement(By.xpath("//ul[@class='contact-details']/descendant::li[3]/descendant::a")).click();
			System.out.println("User clicks on email address link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on email address because "+e);
		}
	}

	@Then("^User is able to send an email$")
	public void user_is_able_to_send_an_email() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="Email – Real Estate";
			obj.assertEquals(actualTitle,expectedTitle);
			obj.assertAll();
			Thread.sleep(1000);
			System.out.println("User is able to send an email.");
		}
		catch(Exception e){
			System.out.println("User is not able to send an email because "+e);
			Assert.fail();
		}	
	}

	@Then("^User enters \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" in the contact form$")
	public void user_enters_in_the_contact_form(String name, String email, String subject, String message) throws Throwable {
		try{
			if(name.equals("blank")){
				name=name.replaceAll(name, " ");
			}
			if(email.equals("blank")){
				email=email.replaceAll(email, " ");
			}
			if(subject.equals("blank")){
				subject=subject.replaceAll(subject, " ");
			}
			if(message.equals("blank")){
				message=message.replaceAll(message, " ");
			}
			driver.findElement(By.xpath("//input[@name='name']")).sendKeys(name);
			driver.findElement(By.xpath("//input[@name='email']")).sendKeys(email);
			driver.findElement(By.xpath("//input[@name='subject']")).sendKeys(subject);
			driver.findElement(By.xpath("//textarea[@name='id:comments']")).sendKeys(email);
			Thread.sleep(1000);
			System.out.println("User enters details in Contact Form.");
		}
		catch(Exception e) {
			System.out.println("User could not enter details in Contact Form because "+e);
		}
	}

	@Then("^User clicks on Send button$")
	public void user_clicks_on_Send_button() {
		try {
			driver.findElement(By.xpath("//input[@value='Send']")).click();
			System.out.println("User clicks on Send button.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Send button because "+e);
		}
	}

	@Then("^User gets a \"([^\"]*)\" for sending message$")
	public void user_gets_a_for_sending_message(String conformation) {
		try{
			String actText = "a";
			if(conformation.equals("Your message has been sent successfully.")) {
				String replacement=driver.findElement(By.xpath("//div[@class='wpcf7']/descendant::form/descendant::div[10]")).getText();
				actText=actText.replaceAll(actText, replacement);
			}
			else if(conformation.equals("One or more fields have an error. Please check and try again.")){
				String replacement=driver.findElement(By.xpath("//div[@class='wpcf7']/descendant::form/descendant::div[10]")).getText();
				actText=actText.replaceAll(actText, replacement);
			}
			else if(conformation.equals("Some field has an error. Please check and try again.")){
				String replacement=driver.findElement(By.xpath("//div[@class='wpcf7']/descendant::form/descendant::div[10]")).getText();
				actText=actText.replaceAll(actText, replacement);
			}
			boolean result=actText.equals(conformation);
			if(result==true){
				System.out.println(actText);
			}
			obj.assertEquals(actText, conformation);
			obj.assertAll();
			Thread.sleep(1000);		
		}
		catch(Exception e) {
			System.out.println("User could not submit the contact form because "+e);
			Assert.fail();
		}
	}
	
	@Then("^User finds a phone number and email address$")
	public void user_finds_a_phone_number_and_email_address() {
		try{
			boolean phone=driver.findElement(By.xpath("//span[contains(text(),'Call')]")).isDisplayed();
			boolean email=driver.findElement(By.xpath("//span[contains(text(),'E-mail')]")).isDisplayed();
			if(phone==true && email==true){
				System.out.println("User finds a phone number and email address.");
			}
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User could not find a phone number and email address because "+e);
		}	
	}

	@Then("^User clicks on Facebook icon$")
	public void user_clicks_on_Facebook_icon() {
		try {
			driver.findElement(By.xpath("//a[@title='facebook']")).click();
			System.out.println("User clicks on Facebook icon.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Facebook icon because "+e);
		}
	}

	@Then("^User gets to Facebook login page$")
	public void user_gets_to_Facebook_login_page() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="Facebook – log in or sign up";
			obj.assertEquals(actualTitle,expectedTitle);
			Thread.sleep(1000);
			System.out.println("User gets to Facebook login page.");
		}
		catch(Exception e){
			System.out.println("User could not get to Facebook login page because "+e);
			Assert.fail();
		}
	}

	@When("^User clicks on Twitter icon$")
	public void user_clicks_on_Twitter_icon() {
		try {
		    driver.findElement(By.xpath("//a[@title='twitter']")).click();
		    System.out.println("User clicks on Twitter icon.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Twitter icon because "+e);
		}
	}

	@Then("^User gets to Twitter login page$")
	public void user_gets_to_Twitter_login_page() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="Twitter";
			obj.assertEquals(actualTitle,expectedTitle);
			Thread.sleep(1000);
			System.out.println("User gets to Twitter login page.");
		}
		catch(Exception e){
			System.out.println("User could not get to Twitter login page because "+e);
			Assert.fail();
		}
	}

	@When("^User clicks on Google\\+ icon$")
	public void user_clicks_on_Google_icon() {
		try {
			driver.findElement(By.xpath("//a[@title='gplus']")).click();
			System.out.println("User clicks on Google+ icon.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Google+ icon because "+e);
		}
	}

	@Then("^User gets to Google\\+ login page$")
	public void user_gets_to_Google_login_page() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="Google+";
			obj.assertEquals(actualTitle,expectedTitle);
			Thread.sleep(1000);
			System.out.println("User gets to Google+ login page.");
		}
		catch(Exception e){
			System.out.println("User could not get to Google+ login page because "+e);
			Assert.fail();
		}
	}

	@When("^User clicks on Wifi icon$")
	public void user_clicks_on_Wifi_icon() {
		try {
			driver.findElement(By.xpath("//a[@title='rss']")).click();
			System.out.println("User clicks on Wifi icon.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Wifi icon because "+e);
		}
	}

	@Then("^User gets to Wifi login page$")
	public void user_gets_to_Wifi_login_page() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="Real Estate";
			obj.assertEquals(actualTitle,expectedTitle);
			Thread.sleep(1000);
			System.out.println("User gets to more information page.");
		}
		catch(Exception e){
			System.out.println("User could not get to more information page because "+e);
			Assert.fail();
		}
	}

	@When("^User clicks on Invest In Overseas link$")
	public void user_clicks_on_Invest_In_Overseas_link() {
		try {
			driver.findElement(By.xpath("//li[@id='menu-item-781']/a")).click();
			System.out.println("User clicks on Invest In Overseas link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Invest In Overseas link because "+e);
		}
	}

	@Then("^User gets to Invest In Overseas page$")
	public void user_gets_to_Invest_In_Overseas_page() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="Invest in Overseas – Real Estate";
			obj.assertEquals(actualTitle,expectedTitle);
			Thread.sleep(1000);
			System.out.println("User gets to Invest In Overseas page.");
		}
		catch(Exception e){
			System.out.println("User could not get to Invest In Overseas page because "+e);
			Assert.fail();
		}
	}

	@When("^User clicks on Blogs link$")
	public void user_clicks_on_Blogs_link() {
		try {
			driver.findElement(By.xpath("//li[@id='menu-item-617']/a")).click();
			System.out.println("User clicks on Blogs link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Blogs link because "+e);
		}
	}

	@Then("^User gets to Blogs page$")
	public void user_gets_to_Blogs_page() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="Blog – Real Estate";
			obj.assertEquals(actualTitle,expectedTitle);
			Thread.sleep(1000);
			System.out.println("User gets to Blog page.");
		}
		catch(Exception e){
			System.out.println("User could not get to Blog page because "+e);
			Assert.fail();
		}
	}

	@Then("^User finds latest news and blogs$")
	public void user_finds_latest_news_and_blogs() {
		try {
			driver.findElement(By.xpath("//div[@class='col-md-12']/span")).click();
			System.out.println("User finds latest news and blogs.");
			Thread.sleep(1000);
			obj.assertAll();
		}
		catch(Exception e) {
			System.out.println("User is not able to find latest news and blogs because "+e);
		}
	}
	
	@Then("^User finds address, phone number and email address$")
	public void user_finds_address_phone_number_and_email_address() {
		try{
			boolean address=driver.findElement(By.xpath("//div[contains(text(),'Jay')]")).isDisplayed();
			boolean phone=driver.findElement(By.xpath("//div[contains(text(),'Phone:')]")).isDisplayed();
			boolean email=driver.findElement(By.xpath("//div[contains(text(),'Email:')]")).isDisplayed();
			if(address==true && phone==true && email==true){
				System.out.println("User finds address, phone number and email address.");
			}
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User could not find address, phone number and email address because "+e);
		}	
	}

	@Then("^User clicks on About Us link$")
	public void user_clicks_on_About_Us_link() {
		try {
			executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//a[contains(text(),'About')]")));
			System.out.println("User clicks on About Us link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on About Us link because "+e);
		}
	}

	@Then("^User gets to About Us page$")
	public void user_gets_to_About_Us_page() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="About Us – Real Estate";
			obj.assertEquals(actualTitle,expectedTitle);
			Thread.sleep(1000);
			System.out.println("User gets to About Us page.");
		}
		catch(Exception e){
			System.out.println("User could not get to About Us page because "+e);
			Assert.fail();
		}	
	}

	@Then("^User gets to Contact Us page$")
	public void user_gets_to_Contact_Us_page() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="Contact – Real Estate";
			obj.assertEquals(actualTitle,expectedTitle);
			Thread.sleep(1000);
			System.out.println("User gets to Contact Us page.");
		}
		catch(Exception e){
			System.out.println("User could not get to Contact Us page because "+e);
			Assert.fail();
		}	
	}

	@When("^User clicks on Compare Properties link$")
	public void user_clicks_on_Compare_Properties_link() {
		try {
			executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//a[contains(text(),'Compare Properties')]")));
			System.out.println("User clicks on Compare Properties link.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Compare Properties link because "+e);
		}
	}

	@Then("^User gets to Compare Properties page$")
	public void user_gets_to_Compare_Properties_page() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="Compare Properties – Real Estate";
			obj.assertEquals(actualTitle,expectedTitle);
			Thread.sleep(1000);
			System.out.println("User gets to Contact Us page.");
		}
		catch(Exception e){
			System.out.println("User could not get to Contact Us page because "+e);
			Assert.fail();
		}	
	}
	
	@When("^User clicks on Facebook icon at page's bottom$")
	public void user_clicks_on_Facebook_icon_at_page_s_bottom() {
		try {
			executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//aside[@id='pt-social-icons-4']/ul/li[1]/a")));
			System.out.println("User clicks on Facebook icon at page's bottom.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Facebook icon at page's bottom because "+e);
		}
	}

	@When("^User clicks on Twitter icon at page's bottom$")
	public void user_clicks_on_Twitter_icon_at_page_s_bottom() {
		try {
			executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//aside[@id='pt-social-icons-4']/ul/li[2]/a")));
			System.out.println("User clicks on Twitter icon at page's bottom.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Twitter icon at page's bottom because "+e);
		}
	}

	@When("^User clicks on Google\\+ icon at page's bottom$")
	public void user_clicks_on_Google_icon_at_page_s_bottom() {
		try {
			executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//aside[@id='pt-social-icons-4']/ul/li[3]/a")));
			System.out.println("User clicks on Google+ icon at page's bottom.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Google+ icon at page's bottom because "+e);
		}
	}

	@Then("^User clicks on Wifi icon at page's bottom$")
	public void user_clicks_on_Wifi_icon_at_page_s_bottom() {
		try {
			executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//aside[@id='pt-social-icons-4']/ul/li[4]/a")));
			System.out.println("User clicks on Wifi icon at page's bottom.");
			Thread.sleep(1000);
		}
		catch(Exception e) {
			System.out.println("User is not able to click on Wifi icon at page's bottom because "+e);
		}
	}
	
	@Then("^User gets to that page$")
	public void user_gets_to_that_page() {
		try{
			String actualTitle=driver.getTitle();
			String expectedTitle="More Information";
			obj.assertEquals(actualTitle,expectedTitle);
			Thread.sleep(1000);
			System.out.println("User gets to more information page.");
			obj.assertAll();
		}
		catch(Exception e){
			System.out.println("User could not get to more information page because "+e);
			Assert.fail();
		}
	}
}
