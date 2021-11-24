//package stepDefination;
//
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class LoginStepDefination {
//
//	WebDriver driver;
//
//	@Given("^User is already on login page$")
//	public void user_already_on_login_page() {
//		System.setProperty("webdriver.chrome.driver", "C:\\Users\\hp\\Desktop\\se3\\chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.get("https://ui.cogmento.com/");
//
//	}
//
//	@When("^title of login page is Cogmento CRM$")
//	public void title_login_page() {
//		String title = driver.getTitle();
//		System.out.println("Title is: " + title);
//		Assert.assertEquals("Cogmento CRM", title);
//	}
//
//	@Then("^user enters \"(.*)\" and \"(.*)\"$")
//	public void user_enters_Username_and_Password(String uname, String pwd) {
//
//		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
//
//		driver.findElement(By.name("email")).sendKeys(uname);
//
//		driver.findElement(By.name("password")).sendKeys(pwd);
//
//	}
//
//	@Then("^User clicks on Login$")
//	public void user_clicks_on_Login() {
//
//		WebElement loginbtn = driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]"));
//
//		JavascriptExecutor js = (JavascriptExecutor) driver;
//		js.executeScript("arguments[0].click();", loginbtn);
//
//	}
//
//	@Then("^User is on homepage$")
//	public void user_is_on_homepage() {
//		String title_hp = driver.getTitle();
//		System.out.println("HomepageTitle is: " + title_hp);
//		Assert.assertEquals("Cogmento CRM", title_hp);
//
//	}
//
//	@Then("^User clicks on Contacts link$")
//	public void user_clicks_on_Contacts_link() {
//
//		driver.findElement(By.xpath("//a[@href='/contacts']")).click();
//
//	}
//
//	@Then("^User clicks create button$")
//	public void user_clicks_create_button() {
//
//		driver.findElement(By.xpath("//a[@href='/contacts/new']")).click();
//
//	}
//
//	@Then("^user enters contacts details \\\"(.*)\\\" and \\\"(.*)\\\" and \\\"(.*)\\\"$")
//	public void user_enters_firstname_lastname_position(String firstname, String lastname, String position) {
//
//		driver.findElement(By.name("first_name")).sendKeys(firstname);
//		driver.findElement(By.name("last_name")).sendKeys(lastname);
//		driver.findElement(By.name("position")).sendKeys(position);
//
//	}
//
//	@Then("^user click save$")
//	public void user_click_save() throws InterruptedException {
//		driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
//		Thread.sleep(3);
//
//	}
//
//	@Then("^user is on contact detail page$")
//	public void user_on_contact_detail_page() {
//
//		String ctitle = driver.getTitle();
//		System.out.println(ctitle);
//	}
//
//	
//
//}
