package org.example;

import org.openqa.selenium.By;

import static org.example.Utils.utils.*;

public class Discount extends Utils {

    LoadProp loadProp = new LoadProp();

    private By promotion = By.cssSelector("i[class='fa fa-tags']");
    private By clickDiscount = By.cssSelector("body > div.wrapper > div.main-sidebar > div > ul > li.treeview.menu-open > ul > li:nth-child(1) > a > span");
    private By addNew = By.cssSelector("a[class='btn bg-blue']");
    private By name = By.id("Name");
    private By usagePercentage = By.cssSelector("label[for='UsePercentage']");
    private By discountPercentage = By.cssSelector("span [class='k-icon k-i-arrow-60-up']");
    private By clickCalander=By.cssSelector("span[class='k-icon k-i-calendar']");
    private By rightArrow=By.cssSelector("span[class='k-icon k-i-arrow-60-right']");
    private By selectStartDate=By.cssSelector("a[title='Sunday, August 2, 2020']");
    private By clickEndCalander=By.cssSelector("span[class='k-picker-wrap k-state-default'] span:nth-child(2)");
    private By rightEndArrow=By.cssSelector("span[class='k-icon k-i-arrow-60-right']");
    private By selectEndtDate=By.cssSelector("a[title='Friday, August 7, 2020']");
    private By Admincomment=By.id("AdminComment");
    private By saveButton=By.cssSelector("button[class='btn bg-blue']");


    public void Promotion() {

        ClickOnElement(promotion);
    }

    public void Discount() {

        ClickOnElement(clickDiscount);
    }

    public void AddNew() {
        ClickOnElement(addNew);
    }

    public void Name() {
        waitForElementToBevisible(name, 20);
        enterText(name, "Summer Sale");
    }

    public void UsagePercentage() {
        ClickOnElement(usagePercentage);
    }

    public void DiscountPercentage() {
        waitForElementToBevisible(discountPercentage, 20);
        for (int i = 0; i < 10; i++) {
            ClickOnElement(discountPercentage);

        }
        }
        public void StartDate(){
            waitForElementToBevisible(clickCalander,20);
            ClickOnElement(clickCalander);
            waitForElementToBevisible(rightArrow,20);
            ClickOnElement(rightArrow);
            waitForElementToBevisible(selectStartDate,20);
            ClickOnElement(selectStartDate);
        }
        public void EndDate(){
        waitForElementToBevisible(clickEndCalander,20);
        ClickOnElement(clickEndCalander);
        waitForElementToBevisible(rightEndArrow,20);
        ClickOnElement(rightEndArrow);

        waitForElementToBevisible(selectEndtDate, 20);
        ClickOnElement(selectEndtDate);

        }


    public void AdminComment(){
        enterText(Admincomment,"Discount for sale");
    }
    public void Save(){
        ClickOnElement(saveButton);
    }

    }

