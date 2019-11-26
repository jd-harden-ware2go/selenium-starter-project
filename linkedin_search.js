// import java.util.concurrent.TimeUnit;
// import org.openqa.selenium.support.ui.WebDriverWait; 

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

//launch linkedin.com and search for a term
driver.manage().window().maximize();
driver.manage().timeouts().implicitlyWait(5);
driver.get('http://www.linkedin.com')
driver.manage().timeouts().implicitlyWait(15);

//Search for a company on LinkedIn - General Motors
// driver.manage().timeouts().implicitlyWait(5);
// driver.manage().timeouts().implicitlyWait(1);
// driver.findElement(By.name("keywords")).click
driver.findElement(By.className('sign-in-card__dismiss-icon onload lazy-loaded')).click();
driver.manage().timeouts().implicitlyWait(15);
driver.findElement(By.className("dismissable-input__input")).click();
driver.manage().timeouts().implicitlyWait(15);
driver.findElement(By.className("search__button pill pill--blue etta-pill")).click();
// driver.findElement(By.className('dismissable-input__input')).sendKeys('General Motors')
// console.log('second element');
driver.manage().timeouts().implicitlyWait(1);
driver.quit();
// driver.findElement(By.css('button[data-searchbar-type="JOBS"]')).click();

//xpath //section[@class='dismissable-input search-input dismissable-input--focus']/input[@name='firstName']

///html/body/main/section[1]/section/div[2]/section[1]/form/section[1]

//html/body/main/section[1]/section/div[2]/section[2]/form/section[1]/input