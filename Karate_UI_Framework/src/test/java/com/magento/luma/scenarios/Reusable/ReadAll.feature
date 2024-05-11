@Reusable @Ignore
Feature: Read all file feature to include all
  the utility file and common file in one place. We can use this then
  in karate config file to make access to all scenarios


  Background:
    * def javaHelper = Java.type('com.magento.luma.utils.JavaHelper')


  Scenario: Call all the utility files
    * call read 'classpath:com/magento/luma/LocatorsLookup/LoginPage/LoginPage.json'
    * call read 'classpath:com/magento/luma/LocatorsLookup/CommonLocators/commonLocators.json'
    * call read 'classpath:com/magento/luma/LocatorsLookup/CommonLocators/XpathHelpers.json'
    * call read 'classpath:com/magento/luma/LocatorsLookup/HomePage/HomePage.json'
    * call read 'classpath:com/magento/luma/LocatorsLookup/HomePage/HomePage.json'
    * call read 'classpath:com/magento/luma/LocatorsLookup/CheckoutPage/CheckoutPage.json'
