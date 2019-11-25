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

    
// Search for the term webdriver on google.com
driver.get('http://www.google.com/');
driver.findElement(By.name('q'))
console.log('Input box found')
driver.findElement(By.name('q')).sendKeys('webdriver');
console.log('Webdriver searched')
driver.findElement(By.name('q')).sendKeys();
driver.findElement(By.name('btnK')).click();

{driver.wait(until.titleIs('webdriver - Google Search'), 10000);
let pageTitle = driver.getTitle();
console.log('Page title is ' + pageTitle)};
driver.quit();


//launch sogeti.com and search for a term

// driver.get('http://www.facebook.com')


