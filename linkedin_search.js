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
driver.get('http://www.linkedin.com')
driver.manage().timeouts().implicitlyWait(5);

//Search for a company on LinkedIn - General Motors
// driver.findElement(By.css('.sign-in-card__dismiss-icon')).click();
driver.manage().timeouts().implicitlyWait(5);
driver.findElement(By.css('[data-tracking-control-name="homepage-basic_dismissable-input"][name="keywords"]')).click();
driver.manage().timeouts().implicitlyWait(1);
driver.findElement(By.css('[data-tracking-control-name="homepage-basic_dismissable-input"][name="keywords"]')).sendKeys('General Motors')
driver.manage().timeouts().implicitlyWait(1);
driver.findElement(By.css('button[data-searchbar-type="JOBS"]')).click();