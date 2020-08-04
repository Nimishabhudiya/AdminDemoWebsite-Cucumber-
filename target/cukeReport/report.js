$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Resources/Features/Discount.feature");
formatter.feature({
  "line": 2,
  "name": "User able to get discount",
  "description": "",
  "id": "user-able-to-get-discount",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Discount"
    }
  ]
});
formatter.before({
  "duration": 11282153500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User able to added discount successfully from Admin Website",
  "description": "",
  "id": "user-able-to-get-discount;user-able-to-added-discount-successfully-from-admin-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the log in button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on promotion",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I select discount from promotion",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Add new button on corner of the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter text in Name field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on UserPercentage",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter 10 percentage discount in discount percentage field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select startDate",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select EndDate",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter text in Admin comment",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The new discount has been added successfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_am_on_the_Login_page()"
});
formatter.result({
  "duration": 127216200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_the_log_in_button()"
});
formatter.result({
  "duration": 3983346900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_promotion()"
});
formatter.result({
  "duration": 159535300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_select_discount_from_promotion()"
});
formatter.result({
  "duration": 2028204100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_Add_new_button_on_corner_of_the_page()"
});
formatter.result({
  "duration": 1608845700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.I_enter_text_in_Name_field()"
});
formatter.result({
  "duration": 561407300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_UserPercentage()"
});
formatter.result({
  "duration": 97628700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    }
  ],
  "location": "MyStepDef.i_enter_discount_in_discount_percentage_field(int)"
});
formatter.result({
  "duration": 770894100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.I_select_startDate()"
});
formatter.result({
  "duration": 1702232200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_select_EndDate()"
});
formatter.result({
  "duration": 29663570600,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d84.0.4147.89)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-DELI81I\u0027, ip: \u0027192.168.8.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\rohit\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51002}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 03c87c4df535d50a1afcea3a0d0301aa\n*** Element info: {Using\u003dcss selector, value\u003dspan[class\u003d\u0027k-icon k-i-arrow-60-right\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat org.example.Utils$utils.waitForElementToBevisible(Utils.java:63)\r\n\tat org.example.Discount.EndDate(Discount.java:68)\r\n\tat org.example.MyStepDef.i_select_EndDate(MyStepDef.java:71)\r\n\tat ✽.And I select EndDate(src/Resources/Features/Discount.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDef.i_enter_text_in_Admin_comment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.i_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.the_new_discount_has_been_added_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 19300,
  "status": "passed"
});
});