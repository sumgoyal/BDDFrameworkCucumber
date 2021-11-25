//package stepDefination;
//
//import java.util.List;
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class DealstepDefination {
//
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
//
//	@Then("^user enters username and password$")
//	public void user_enters_Username_and_Password(DataTable credential) {
//		
//		List<List<String>> data=credential.raw();
//		
//		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
//
//		driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
//
//		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
//
//	}
//
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
//	@Then("^User clicks on deals link$")
//	public void user_clicks_on_Contacts_link() {
//
//		driver.findElement(By.xpath("//a[@href='/deals']")).click();
//
//	}
//	
//	@Then("^User clicks create button$")
//	public void user_clicks_create_button() {
//
//		driver.findElement(By.xpath("//a[@href='/deals/new']")).click();
//
//	}
//	
//	@Then("^user enters deal details$")
//	public void user_enters_firstname_lastname_position(DataTable dealData) {
//		
//		List<List<String>> dealdat=dealData.raw();
//		
//		driver.findElement(By.name("title")).sendKeys(dealdat.get(0).get(0));
//		driver.findElement(By.name("amount")).sendKeys(dealdat.get(0).get(1));
//		driver.findElement(By.name("commission")).sendKeys(dealdat.get(0).get(2));
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
//	
//	
//}
