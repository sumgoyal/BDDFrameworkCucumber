$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hp/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Testing deal Page of Cogmento",
  "description": "",
  "id": "testing-deal-page-of-cogmento",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Cogmento create deal details",
  "description": "",
  "id": "testing-deal-page-of-cogmento;cogmento-create-deal-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "sumitgoel1001@gmail.com",
        "",
        "Sumit@1234"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on deals link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks create button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "Test Deal",
        "",
        "1000",
        "",
        "20"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click save",
  "keyword": "Then "
});
formatter.match({
  "location": "DealstepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 4097902800,
  "status": "passed"
});
formatter.match({
  "location": "DealstepDefination.title_login_page()"
});
formatter.result({
  "duration": 8902000,
  "status": "passed"
});
formatter.match({
  "location": "DealstepDefination.user_enters_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 17139337500,
  "status": "passed"
});
formatter.match({
  "location": "DealstepDefination.user_clicks_on_Login()"
});
formatter.result({
  "duration": 49955800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.45)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027SUMITGOYAL\u0027, ip: \u0027192.168.81.48\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [214be4ffeda73233f9e455c324d1ea54, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"ui\"]/div/div/form/div/div[3]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:53569}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53569/devtoo..., se:cdpVersion: 96.0.4664.45, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 214be4ffeda73233f9e455c324d1ea54\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat stepDefination.DealstepDefination.user_clicks_on_Login(DealstepDefination.java:56)\r\n\tat ✽.Then User clicks on Login(C:/Users/hp/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/deals.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DealstepDefination.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealstepDefination.user_clicks_on_Contacts_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealstepDefination.user_clicks_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealstepDefination.user_enters_firstname_lastname_position(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealstepDefination.user_click_save()"
});
formatter.result({
  "status": "skipped"
});
});