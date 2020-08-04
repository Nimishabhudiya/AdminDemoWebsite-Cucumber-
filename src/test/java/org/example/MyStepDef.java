package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class MyStepDef extends BasePage{
    LoginPage loginPage = new LoginPage();
    Discount discount=new Discount();


    @Given("^I am on the Login page$")
    public void i_am_on_the_Login_page()  {


    }

    @When("^I click on the log in button$")
    public void i_click_on_the_log_in_button()  {
        loginPage.LoginButtonClick();

    }

    @When("^I click on promotion$")
    public void i_click_on_promotion()  {
        discount.Promotion();


    }

    @When("^I select discount from promotion$")
    public void i_select_discount_from_promotion()  {
        discount.Discount();

    }

    @When("^I click on Add new button on corner of the page$")
    public void i_click_on_Add_new_button_on_corner_of_the_page()  {
        discount.AddNew();

    }

    @When("^I enter text in Name field$")
    public void I_enter_text_in_Name_field() {
        discount.Name();

    }

    @When("^I click on UserPercentage$")
    public void i_click_on_UserPercentage() {
        discount.UsagePercentage();

    }

    @When("^I enter (\\d+) percentage discount in discount percentage field$")
    public void i_enter_discount_in_discount_percentage_field(int arg1)  {
        discount.DiscountPercentage();

    }

    @When("^I select startDate$")
    public void I_select_startDate()  {
        discount.StartDate();

    }

    @When("^I select EndDate$")
    public void i_select_EndDate() {
        discount.EndDate();

    }

    @When("^I enter text in Admin comment$")
    public void i_enter_text_in_Admin_comment(){
        discount.AdminComment();

    }

    @When("^I click on save button$")
    public void i_click_on_save_button() {
        discount.Save();

    }

    @Then("^The new discount has been added successfully\\.$")
    public void the_new_discount_has_been_added_successfully()  {
    //String Iabletoaddeddiscountsuccessfully = driver.findElement(By.cssSelector("[class='alert alert-success alert-dismissable']")).getText();
       // Assert.assertEquals(Iabletoaddeddiscountsuccessfully, "The new discount has been added successfully.");
        //System.out.println("The new discount has been added successfully.");

    }


}
