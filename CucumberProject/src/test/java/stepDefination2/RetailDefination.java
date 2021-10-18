package stepDefination2;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class RetailDefination {
	
	

//----------------------------------------------------------BACKGROUND-----------------------------------------------------------------------------------------
	
	
	
	WebDriver driver;
	
	@Given("Admin is on the login page")
	public void user_is_on_the_login_page() throws InterruptedException {

		System.setProperty("webdriver.chrome.driver", ".\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://retailm1.upskills.in/admin/");
		driver.manage().window().maximize();
		Thread.sleep(5000);
		
	}
	

	@Given("Admin enters Username {string} and Password {string}")
	public void admin_enters_Username_and_Password(String uname, String pass) throws InterruptedException {
		Thread.sleep(3000);
		try {
				driver.findElement(By.name("username")).sendKeys(uname);
				driver.findElement(By.name("password")).sendKeys(pass);
		}
		catch(Exception e) {
			System.out.println("unable to enter"+e);
			Assert.fail();
			
		}
		Thread.sleep(4000);
	}

	@When("Admin clicks on Login button")
	public void admin_clicks_on_Login_button() throws InterruptedException {
		try {
			driver.findElement(By.xpath("//button[@type='submit']")).click();
		}
		catch(Exception e) {
			System.out.println("unable to click"+e);
			 Assert.fail();
		}
		Thread.sleep(2000);
	}

	@Then("Admin should be logged in sucessfully to the Retail dashboard")
	public void user_should_be_logged_in_sucessfully_to_the_Retail_dashboard() throws InterruptedException {
		String dashTitle=driver.getTitle();
		System.out.println("Retail dashbord Title is: "+dashTitle);
		Thread.sleep(3000);
}

	@Then("Admin clicks on Customers icon")
	public void user_clicks_on_Customers_icon() {
		 try {
			 driver.findElement(By.id("button-menu")).click();
	            System.out.println("Menu Bar");
	            Thread.sleep(3000);
	            driver.findElement(By.xpath("//span[text()='Customers']")).click();
	            Thread.sleep(3000);
	            
		 }
		   catch(Exception e) {
				System.out.println("unable to click"+e);
				Assert.fail();
			}
	}

	@Then("Admin clicks Customers")
	public void user_clicks_Customers() {
		 try {
			 driver.findElement(By.xpath("//*[@id=\'menu-customer\']/ul/li[1]/a")).click();
		   }
		   catch(Exception e) {
				System.out.println("unable to click"+e);
				Assert.fail();
			}
	}

	@Then("Admin will be redirected to Customers Dashboard")
	public void user_will_be_redirected_to_Customers_Dashboard() {
		 try {
			 if (driver.getTitle().equals("Customers"))
				{
					System.out.println(" Customer page title is : "+driver.getTitle());
				}
				else
				{
					System.out.println("Title is not Customers");
				}
		   }
		   catch(Exception e) {
				System.out.println("unable to get title" +e);
				 Assert.fail();
			}
		 
	}

	
	
//-----------------------------------------------------TEST-1--------------------------------------------------------------------------------------------	
	
	
	
	
	@Given("Admin is on the Customer page of Retail Website")
	public void user_is_on_the_Customer_page_of_Retail_Website() throws InterruptedException {
		 try {
			 if (driver.getTitle().equals("Customers"))
				{
					System.out.println(" Customer page title is : "+driver.getTitle());
				}
			 else
				{
					System.out.println("Title is not Customers");
				}
		   }
		   catch(Exception e) {
				System.out.println("unable to get title" +e);
				 Assert.fail();
		   }
		 Thread.sleep(3000);
	}

	@Given("Admin enters {string} ,{string},{string},{string},{string},{string},{string}")
	public void user_enters(String custname, String custgrp, String appv, String add_date, String email, String status, String ip) throws InterruptedException {
		 try {
			   	driver.findElement(By.name("filter_name")).sendKeys(custname);
			   	
			    Select cusgrp=new Select(driver.findElement(By.name("filter_customer_group_id")));
					cusgrp.selectByVisibleText(custgrp);
					
				Select app=new Select(driver.findElement(By.name("filter_approved")));
					app.selectByVisibleText(appv);
					
				driver.findElement(By.name("filter_date_added")).sendKeys(add_date);
				
				Thread.sleep(1000);
				
				driver.findElement(By.name("filter_email")).sendKeys(email);
				
				Thread.sleep(3000);
				
				Select stus =new Select(driver.findElement(By.name("filter_status")));
				stus.selectByVisibleText(status);
				
				driver.findElement(By.name("filter_ip")).sendKeys(ip);
				
				Thread.sleep(1000);
				
		   }
		   catch(Exception e) {
				System.out.println("expection occured"+e);
				 Assert.fail();
			}
		 	Thread.sleep(3000);
		 
	}

	@Given("Admin clicks filter button")
	public void user_clicks_filter_button() throws InterruptedException {
		 try {
			 	driver.findElement(By.xpath("//button[@id='button-filter']")).click();
		   }
		   catch(Exception e) {
				System.out.println("expection occured"+e);
				 Assert.fail();
			}
		 Thread.sleep(2000);
	}

	@Then("Admin gets the details of the required customer")
	public void user_gets_the_details_of_the_required_customer() {
		 try {
			 
             	String actualText = driver.findElement(By.xpath("//input[@id='input-name']")).getAttribute("value");    
             	String expectedText= driver.findElement(By.xpath("//form[@id='form-customer']/div/table/tbody/tr/td[2]")).getText();
             	Assert.assertEquals(actualText,expectedText);
             	System.out.println("CustomerName is  (Actual) :"+actualText + "   (Expected) : "+expectedText);
             	
             	String actualText2 = driver.findElement(By.xpath("//select[@id='input-customer-group']/option[text()='Default']")).getText();
             	String expectedText2 = driver.findElement(By.xpath("//*[@id=\"form-customer\"]/div/table/tbody/tr/td[4]")).getText();
             	Assert.assertEquals(actualText2,expectedText2);
             	System.out.println("Customergrp (Actual) : "+actualText2 + "   (Expected) : "+expectedText2);
             	 
             	
             	String actualText4 = driver.findElement(By.name("filter_email")).getAttribute("value");
             	String expectedText4= driver.findElement(By.xpath("//form[@id='form-customer']/div/table/tbody/tr/td[3]")).getText();
             	Assert.assertEquals(actualText4,expectedText4);
             	System.out.println("CustomerEmail (Actual) : "+actualText4 + "    (Expected) : "+expectedText4);
             	
             	String actualText5 = driver.findElement(By.xpath("//select[@id='input-status']/option[text()='Enabled']")).getText();          	
             	String expectedText5= driver.findElement(By.xpath("//form[@id='form-customer']/div/table/tbody/tr/td[5]")).getText();
             	System.out.println("Status (Actual) : "+actualText5 + "     (Expected) : "+expectedText5);
             	
             	String actualText6 = driver.findElement(By.name("filter_ip")).getAttribute("value");
             	String expectedText6= driver.findElement(By.xpath("//form[@id='form-customer']/div/table/tbody/tr/td[6]")).getText();
             	Assert.assertEquals(actualText6,expectedText6);
             	System.out.println("ip (Actual) : "+actualText6 + "    (Expected) : "+expectedText6);
             	
		 }
		   catch(Exception e) {
				System.out.println("expection occured"+e);
				 Assert.fail();
			}
	}
	
	
	
	
//-------------------------------------------------------------TEST-2--------------------------------------------------------------------------------------	
	
	
	
	@Given("Admin enters data in {string} ,{string},{string},{string},{string},{string},{string}")
	public void user_enters_data_in(String string, String string2, String string3, String string4, String string5, String string6, String string7) throws InterruptedException {
		 try {
			   	driver.findElement(By.name("filter_name")).sendKeys(string);
			   	
			    Select cusgrp=new Select(driver.findElement(By.name("filter_customer_group_id")));
					cusgrp.selectByVisibleText(string2);
					
				Select app=new Select(driver.findElement(By.name("filter_approved")));
					app.selectByVisibleText(string3);
					
				driver.findElement(By.name("filter_date_added")).sendKeys(string4);
				
				Thread.sleep(1000);
				
				driver.findElement(By.name("filter_email")).sendKeys(string5);
				
				Thread.sleep(3000);
				
				Select stus =new Select(driver.findElement(By.name("filter_status")));
				stus.selectByVisibleText(string6);
				
				driver.findElement(By.name("filter_ip")).sendKeys(string7);
				
				Thread.sleep(1000);
				
		   }
		   catch(Exception e) {
				System.out.println("expection occured"+e);
				 Assert.fail();
			}
		 	Thread.sleep(3000);

	}

	@Given("Admin clicks Filter button")
	public void user_clicks_Filter_button() throws InterruptedException {
		 try {
			 	driver.findElement(By.xpath("//button[@id='button-filter']")).click();
		   }
		   catch(Exception e) {
				System.out.println("expection occured"+e);
			}
		 Thread.sleep(2000);
	}

	@Then("Admin validates the customer list")
	public void user_validates_the_customer_list() {
	    
	try {
			String string1 = driver.findElement(By.xpath("//input[@id='input-name']")).getAttribute("value");
			String string2 = driver.findElement(By.xpath("//form[@id='form-customer']/div/table/tbody/tr/td")).getText();
			
			
			if(string1.equals(string2))
			{
				System.out.println("customer name present in database");	
			}
			else
			{
				System.out.println(string2);
				System.out.println("Customer name is not present in database");
			}
		
		
	}
	catch(Exception e) {
		System.out.println("expection occured"+e);
		 Assert.fail();
	}
	}
	
	
	
//---------------------------------------------------------------TEST-3-------------------------------------------------------------------------------------	
	
	
	
	
	@When("Admin clicks on Edit button")
	public void user_clicks_on_Edit_button() throws InterruptedException {
	    
		try
			{
			Thread.sleep(5000);
				driver.findElement(By.xpath("//form[@id='form-customer']/div/table/tbody/tr[1]/td[8]/a")).click();
			}
		catch(Exception e)
		{
			System.out.println("expection occured"+e);
			 Assert.fail();
		}
		Thread.sleep(3000);
	}

	@Then("Admin sucessfully navigates to the Edit Customer page")
	public void user_sucessfully_navigates_to_the_Edit_Customer_page() {
		try 
		{
			String Editpage=driver.findElement(By.xpath("//div[@id='content']/div[2]/div/div[1]/h3")).getText();
			System.out.println("Edit page Title is: "+Editpage);
			Thread.sleep(3000);
		}
		catch(Exception e) {
			System.out.println("expection occured"+e);
			 Assert.fail();
		}
	}

	@When("Admin edits {string},{string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_edits(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8, String string9) {
	   
			try 
			{
				Thread.sleep(2000);
				driver.findElement(By.name("firstname")).clear();
				Thread.sleep(2000);
				driver.findElement(By.name("firstname")).clear();
				Thread.sleep(2000);
				driver.findElement(By.name("lastname")).clear();
				Thread.sleep(2000);
				driver.findElement(By.name("email")).clear();
				Thread.sleep(2000);
				driver.findElement(By.name("telephone")).clear();
				Thread.sleep(2000);
				driver.findElement(By.name("password")).clear();
				Thread.sleep(2000);
				driver.findElement(By.name("confirm")).clear();
				Thread.sleep(3000);
				
				Select cusgrp=new Select(driver.findElement(By.name("customer_group_id")));				
				cusgrp.selectByVisibleText(string);
				
				Thread.sleep(2000);
				
				driver.findElement(By.name("firstname")).sendKeys(string2);
				Thread.sleep(2000);
				driver.findElement(By.name("lastname")).sendKeys(string3);
				
				Thread.sleep(2000);
				
				driver.findElement(By.name("email")).sendKeys(string4);
				
				Thread.sleep(2000);
				driver.findElement(By.name("telephone")).sendKeys(string5); 
				
			
				
				   
			
			     for(int i=0; i < string5.length(); i++) {
			         Boolean flag = Character.isDigit(string5.charAt(i));
			         if(flag) {
			        	 System.out.println("'"+ string5.charAt(i)+"' is a number");
			         }
			         else {
			        	 System.out.println("Invalid: Alphabetic character are not allowed");
			            Assert.fail();
			         }
			      }
				
				
				Thread.sleep(2000);
				
				driver.findElement(By.name("password")).sendKeys(string6);
				Thread.sleep(2000);
				driver.findElement(By.name("confirm")).sendKeys(string7);
				
				Thread.sleep(2000);
				
				Select stat=new Select(driver.findElement(By.name("status")));
				stat.selectByVisibleText(string8);
				
				Thread.sleep(2000);
				
				Select appd=new Select(driver.findElement(By.name("approved")));
				appd.selectByVisibleText(string9);
				
				Thread.sleep(3000);
				
			}
			catch(Exception e) {
			System.out.println("expection occured"+e);
			 Assert.fail();
			}
	}
//helloooooo
	
	@When("Admin clicks on save button")
	public void user_clicks_on_save_button() throws InterruptedException {
		Thread.sleep(2000);
		try
		{
			driver.findElement(By.xpath("//div[@id='content']/div[1]/div/div/button")).click();
		}
		catch(Exception e) {
			System.out.println("expection occured"+e);
			 Assert.fail();
		}
	}

	@Then("Admin is redirected to the Customer page")
	public void user_is_redirected_to_the_Customer_page() {
		try {
			Thread.sleep(2000);
			String cust_Title=driver.getTitle();
			System.out.println("Retail dashbord Title is: "+cust_Title);
			Thread.sleep(3000);
		}
		catch(Exception e) {
			System.out.println("expection occured"+e);
			 Assert.fail();
		}
	}

	@Then("Admin gets a success message")
	public void user_gets_a_success_message() throws InterruptedException {
		Thread.sleep(2000);
		try {
			String alert=driver.findElement(By.xpath("//div[@id='content']/div[2]/div[1]")).getText();
			System.out.println("Message- "+alert);
		}
		catch(Exception e) {
			System.out.println("expection occured"+e);
			 Assert.fail();
		}
		Thread.sleep(3000);
	}

	
	
//---------------------------------------------------------------TEST-4----------------------------------------------------------------------------------	
	
	
	
	@When("Admin clicks on Add New button")
	public void user_clicks_on_Add_New_button() throws InterruptedException {
		Thread.sleep(3000);
		try
		{
			driver.findElement(By.xpath("//div[@id='content']/div[1]/div/div/a")).click();
		}
		catch(Exception e)
		{
			System.out.println("expection occured"+e);
			 Assert.fail();
		}

	}

	@Then("Admin sucessfully navigates to the Add Customer page")
	public void user_sucessfully_navigates_to_the_Add_Customer_page() {
		try 
		{
			String Addpage=driver.findElement(By.xpath("//div[@id=\'content\']/div[2]/div/div[1]/h3")).getText();
			System.out.println("Add page Title is: "+Addpage);
			Thread.sleep(3000);
		}
		catch(Exception e) {
			System.out.println("expection occured"+e);
			 Assert.fail();
		}
		
	   	}

	@When("Admin enters {string},{string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_enters(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8, String string9) {
		try 
		{
			
			Select cusgrp=new Select(driver.findElement(By.name("customer_group_id")));				
			cusgrp.selectByVisibleText(string);
			
			Thread.sleep(2000);
			
			driver.findElement(By.name("firstname")).sendKeys(string2);
			Thread.sleep(2000);
			driver.findElement(By.name("lastname")).sendKeys(string3);
			
			Thread.sleep(2000);
			
			driver.findElement(By.name("email")).sendKeys(string4);
			Thread.sleep(2000);
			driver.findElement(By.name("telephone")).sendKeys(string5);
			
			Thread.sleep(2000);
			
			driver.findElement(By.name("password")).sendKeys(string6);
			
			Thread.sleep(2000);
			
			driver.findElement(By.name("confirm")).sendKeys(string7);
			
			Thread.sleep(2000);
			
			Select stat=new Select(driver.findElement(By.name("status")));
			stat.selectByVisibleText(string8);
			
			Thread.sleep(2000);
			
			Select appd=new Select(driver.findElement(By.name("approved")));
			appd.selectByVisibleText(string9);
			
			Thread.sleep(3000);
			
		}
		catch(Exception e) {
		System.out.println("expection occured"+e);
		 Assert.fail();
		}
	}

	@When("Admin clicks on Save Button")
	public void user_clicks_on_Save_Button() {
		try
		{
			Thread.sleep(2000);
			driver.findElement(By.xpath("//div[@id='content']/div[1]/div/div/button")).click();
		}
		catch(Exception e) {
			System.out.println("expection occured"+e);
		}
	}

	@Then("Admin is redirected to the Customers page")
	public void user_is_redirected_to_the_Customers_page() {
		try {
			String cust_Title1=driver.getTitle();
			System.out.println("Retail dashbord Title is: "+cust_Title1);
			Thread.sleep(3000);
		}
		catch(Exception e) {
			System.out.println("expection occured"+e);
		}
	}

	@Then("Admin gets a successfully added message")
	public void user_gets_a_successfully_added_message() throws InterruptedException {
		try {
			String alert1=driver.findElement(By.xpath("//div[@id='content']/div[2]/div[1]")).getText();
			System.out.println("Sucessfully Added New Customer!!");
			System.out.println("Message - "+alert1);
		}
		catch(Exception e) {
			System.out.println("expection occured"+e);
			 Assert.fail();
		}
		Thread.sleep(2000);
	}
	
	
//--------------------------------------------------------------TEST-5-------------------------------------------------------------------------------------------
	
	
	@When("Admin checks the default count of the page")
	public void user_checks_the_default_count_of_the_page() throws InterruptedException {
		try {
				String Text= driver.findElement(By.xpath("//div[@id='content']/div[2]/div/div[2]/div[2]/div[2]")).getText();
				System.out.println(Text);
			}
		catch(Exception e) {
			System.out.println("expection occured"+e);
			 Assert.fail();
		}
		Thread.sleep(3000);
	}

	@Then("Admin gets the total page count")
	public void user_gets_the_total_page_count() throws InterruptedException {
		try {
				String Text= driver.findElement(By.xpath("//div[@id='content']/div[2]/div/div[2]/div[2]/div[2]")).getText();
		     
				int Total_Pages = Integer.valueOf(Text.substring(Text.indexOf("(")+1,Text.indexOf("Pages")-1 ));
				System.out.println("Total no. of Pages = "+Total_Pages);
			}
			catch(Exception e) {
				System.out.println("expection occured"+e);
			}
		Thread.sleep(3000);
	}

	@When("Admin clicks next button of pagination")
	public void user_checks_next_button_of_pagination() throws InterruptedException {
		try {
				driver.findElement(By.xpath("//div[@id='content']/div[2]/div/div[2]/div[2]/div[1]/ul/li[10]/a")).click();
	     
			}
		catch(Exception e) {
			System.out.println("expection occured"+e);
		}
		Thread.sleep(3000);
	}

	@Then("Admin is navigate to next page")
	public void user_is_navigate_to_next_page() throws InterruptedException {
		try {
				String nextpage=  driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[2]/div[2]/div[1]/ul/li[4]/span")).getText();
				System.out.println("Next Page is "+nextpage);
     
		}
	catch(Exception e) {
		System.out.println("expection occured"+e);
	}
		Thread.sleep(3000);
	}

	@When("Admin checks previous button of pagination")
	public void user_checks_previous_button_of_pagination() throws InterruptedException {
		try {
				driver.findElement(By.xpath("//div[@id='content']/div[2]/div/div[2]/div[2]/div[1]/ul/li[2]/a")).click();
			}
		catch(Exception e) {
		System.out.println("expection occured"+e);
		 Assert.fail();
		}
		Thread.sleep(3000);
	}

	@Then("Admin is navigate to previous page")
	public void user_is_navigate_to_previous_page() throws InterruptedException {
		try {
				String previousPage=  driver.findElement(By.xpath("//div[@id='content']/div[2]/div/div[2]/div[2]/div[1]/ul/li[1]/span")).getText();
				System.out.println("Previous Page is "+previousPage);
 
			}
		catch(Exception e) {
			System.out.println("expection occured"+e);
			 Assert.fail();
		}
		Thread.sleep(3000);
		driver.quit();
	}


}
