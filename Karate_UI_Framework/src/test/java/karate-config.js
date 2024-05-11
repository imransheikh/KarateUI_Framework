function fn() {
  karate.configure('retry', {count:2, interval:5000});
  var productConfig = Java.type('com.magento.luma.config.ConfigLuma').getInstance()


  var LumaConfig = {
    browserName: 'chrome',
    applicationURL : 'https://magento.softwaretestingboard.com/',
    applicationUserName : productConfig.UI_USERNAME(),
    applicationPassword : productConfig.UI_PASSWORD(),
    applicationWrongPassword : productConfig.UI_WRONGPASSWORD(),
  }

  //Selecting the browser
  var browser = karate.properties['browser.name'] || LumaConfig.browserName;

    if(browser == 'chrome')
       {
         karate.configure('driver', {type: 'chromedriver', httpConfig: { readTimeout: 180000 }, executable: "src//test//resources//Drivers//chromedriver.exe", showDriverLog:true } );
         karate.log("Selected chrome browser");
         }
    else if (browser == 'edge')
        {
         karate.configure('driver', {type:'msedgedriver', webDriverSession:{capabilities: {browserName: 'edge'} }, httpConfig: {readTimeout: 180000 } } )
         karate.log("Selected chrome browser");
        }


      //calling ReadAll feature file
      var config = karate.callSingle('classpath:com/magento/luma/scenarios/Reusable/ReadAll.feature', LumaConfig);


  return config;
}