package org.example;

import org.openqa.selenium.By;

import static org.example.Utils.utils.ClickOnElement;

public class LoginPage extends Utils{
    private By  loginButton=By.cssSelector("input[class='button-1 login-button']");

    public void LoginButtonClick(){

        ClickOnElement(loginButton);
    }
}
