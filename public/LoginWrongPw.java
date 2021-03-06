package com.example.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginWrongPw {

    static String myUserName = "tian_wang@mymail.sutd.edu.sg";
    static String myPassword = "wrongpassword";

    public static void main(String[] args) throws InterruptedException {

        //System.setProperty("webdriver.gecko.driver","/Users/apple/Desktop/chromedriver");
        //WebDriver driver = new FirefoxDriver();
        System.setProperty("webdriver.chrome.driver","/Users/apple/Desktop/chromedriver");
        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:8887/");

        // get the user name field of the account page
        WebElement username = driver.findElement(By.id("username"));

        Thread.sleep(2000);

        // send my user name to fill up the box
        username.sendKeys(myUserName);

        Thread.sleep(2000);

        // locate the "Next" button in the account page
        WebElement password = driver.findElement(By.id("password"));

        //write password
        password.sendKeys(myPassword);

        Thread.sleep(2000);

        // login and :)
        WebElement nextButton = driver.findElement(By.id("loginbutton"));
        nextButton.click();

        Thread.sleep(2000);

        try {
            WebDriverWait wait = new WebDriverWait(driver, 10);
            // wait only until the project front page loads
            wait.until(ExpectedConditions.elementToBeClickable(By.id("typeBar")));
        } catch (Exception NoSuchElementException) {
            System.out.println("login/password name invalid");
        }
    }
}
