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

//launch sogeti.com and search for a term
driver.manage().window().maximize();
driver.manage().timeouts().implicitlyWait(5);
driver.get('http://www.sogeti.com/');
driver.manage().timeouts().implicitlyWait(5);
// Thread.sleep(5000);
driver.findElement(By.css('div.navbar-search > span')).click();
driver.manage().timeouts().implicitlyWait(5);
driver.findElement(By.css('.top-search'));
driver.manage().timeouts().implicitlyWait(5);
driver.findElement(By.css('.top-search')).sendKeys('Georgia');
driver.manage().timeouts().implicitlyWait(5);
driver.findElement(By.css('.top-search')).sendKeys();
driver.manage().timeouts().implicitlyWait(5);
driver.findElement(By.css('.search-label')).click();
driver.quit();