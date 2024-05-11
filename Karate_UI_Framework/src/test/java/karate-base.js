
function() {
    return {

        I_Enter_Text_On_ : function(locator,text) {
              try {
                  karate.log('KARATE-BASE: Trying to enter [ text: ' + text + ' ] into the element [ locator: ' + locator + ' ].')
                  retry().input(locator,text)
                  karate.log('KARATE-BASE: Entered the [ text: ' + text + ' ] into the element [ locator: ' + locator + ' ].')
              }
              catch(e) {
                  if(e.message.includes('Cannot read property')) {
                      karate.fail('ERROR : The element [ locator : '+locator+' ] cannot be found.')
                  } else if(e.message.includes('retries')) {
                      var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                      karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                  } else {
                      karate.fail('ERROR EXCEPTION : '+ e)
                  }
              }
        },

        I_Click_On_ : function(locator) {
              try {
                  karate.log('KARATE-BASE: Trying to click on element [ locator: ' + locator + ' ].')
                  retry().click(locator)
                  karate.log('KARATE-BASE: The element [ locator: ' + locator + ' ] has been clicked successfully.')
              }
              catch(e) {
                  if(e instanceof (java.lang.NullPointerException)) {
                     karate.fail("ERROR : Locator variable is invalid.")
                  }
                  else if(e.message.includes('Cannot read properties')) {
                      karate.fail('ERROR : The element [locator '+ locator + ' ] cannot be found.')
                  } else if(e.message.includes('retries')) {
                      var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                      karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                  } else {
                      karate.fail('ERROR EXCEPTION : '+ e)
                  }
            }
        },

        I_Scroll_To_And_Enter_Text_On_ : function(locator,text) {
              try {
                  I_Wait_Until_Element_Displayed_(locator)
                  retry().scroll(locator).input(text)
                  karate.log('KARATE-BASE: Typing [ text: ' + text + ' ] after scrolling onto the element [ locator: ' + locator + ' ].')
              }
              catch(e) {
                  if(e.message.includes('Cannot read property')) {
                      karate.fail('ERROR : The element [ locator : '+locator+' ] cannot be found.')
                  } else if(e.message.includes('retries')) {
                       var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                       karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                  } else {
                       karate.fail('ERROR EXCEPTION : '+ e)
                  }
              }
        },

        I_Maximize_Browser_ : function() {
              driver.maximize()
              karate.log("KARATE-BASE: Maximized the browser")
        },

        I_Refresh_Browser_ : function() {
              driver.refresh()
              karate.log("KARATE-BASE: Refreshed the browser")
        },

        I_Adjust_Zoom_Size_of_Browser_ : function(size) {
              driver.script("document.body.style.zoom = '"+size+"'")
              karate.log("KARATE-BASE: The browser size is adjusted to "+size)
        },

        I_Clear_The_Input_Field_ : function(locator) {
              try {
                  karate.log("KARATE-BASE: Trying to clear the field [ locator:  " + locator + " ].")
                  retry().clear(locator)
                  karate.log("KARATE-BASE: The field [ locator:  " + locator + " ] has been cleared successfully.")
              }
              catch(e) {
                  if(e.message.includes('Cannot read property')) {
                      karate.fail('ERROR : The element [ locator : '+locator+' ] cannot be found.')
                  } else if(e.message.includes('retries')) {
                      var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                      karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                  } else {
                      karate.fail('ERROR EXCEPTION : '+ e)
                  }
              }
        },

        I_Clear_And_Enter_Text_In_The_Field_ : function(locator, text) {
                      try {
                          karate.log("KARATE-BASE: Trying to clear and Enter text in the field [ locator:  " + locator + " ].")
                          retry().clear(locator)
                          retry().input(locator,text)
                          karate.log("KARATE-BASE: The field [ locator: " + locator + " ] has been cleared and the text [ " + text + " ] entered successfully.")
                      }
                      catch(e) {
                          if(e.message.includes('Cannot read property')) {
                              karate.fail('ERROR : The element [ locator : '+locator+' ] cannot be found.')
                          } else if(e.message.includes('retries')) {
                              var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                              karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                          } else {
                              karate.fail('ERROR EXCEPTION : '+ e)
                          }
                      }
                },

        I_Open_The_Application_With_URL_ : function(URL) {
              driver.url=URL
              karate.log("KARATE-BASE: Entering the "+URL+" into the browser")
              driver.maximize()
        },

        I_Select_Drop_Down_By_Displayed_Text_On_ : function(locator, displayedText) {
              try {
                   I_Wait_Until_Element_Displayed_(locator)
                   karate.log('KARATE-BASE: Trying to select the drop down [ locator: ' + locator + '] value by [ displayed text : ' + displayedText + ' ].')
                   retry().select(locator, '{}' + displayedText)
                   karate.log('KARATE-BASE: The drop down [ locator: ' + locator + '] has been selected by [ displayed text : ' + displayedText + ' ] successfully.')
              }
              catch(e) {
                   if(e.message.includes('Cannot read property')) {
                        karate.fail('ERROR : The element [ locator : '+locator+' ] cannot be found.')
                   } else if(e.message.includes('retries')) {
                        var retries = e.message.toString().replace('waitUntil (js): failed after ','').
                        karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                   } else {
                        karate.fail('ERROR EXCEPTION : '+ e)
                   }
              }
        },

        I_Select_Drop_Down_By_Partial_Displayed_Text_On_ : function(locator, partialDisplayedText) {
              try {
                   I_Wait_Until_Element_Displayed_(locator)
                   karate.log('KARATE-BASE: Trying to select the drop down [ locator: ' + locator + '] value by [ partial displayed text : ' + partialDisplayedText + ' ].')
                   driver.select(locator, '{^}' + partialDisplayedText)
                   karate.log('KARATE-BASE: The drop down [ locator: ' + locator +	 '] has been selected by [ partial displayed text : ' + partialDisplayedText + ' ] successfully.')
              }
              catch(e) {
                   if(e.message.includes('Cannot read property')) {
                        karate.fail('ERROR : The element [ locator : '+locator+' ] cannot be found.')
                   } else if(e.message.includes('retries')) {
                        var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                        karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                   } else {
                        karate.fail('ERROR EXCEPTION : '+ e)
                   }
              }
        },

        I_Select_Drop_Down_By_Value_On_ : function(locator, value) {
              try {
                   I_Wait_Until_Element_Displayed_(locator)
                   karate.log('KARATE-BASE: Trying to select the drop down [ locator: ' + locator + '] value by [ value : ' + value + ' ].')
                   retry().select(locator, value)
                   karate.log('KARATE-BASE: The drop down [ locator: ' + locator + '] has been selected by [ value : ' + value + ' ] successfully.')
              }
              catch(e) {
                   if(e.message.includes('Cannot read property')) {
                        karate.fail('ERROR : The element [ locator : '+locator+' ] cannot be found.')
                   } else if(e.message.includes('retries')) {
                        var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                        karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                   } else {
                        karate.fail('ERROR EXCEPTION : '+ e)
                   }
              }
        },

        I_Select_Drop_Down_By_Index_On_ : function(locator, index) {
              try {
                   I_Wait_Until_Element_Displayed_(locator)
                   karate.log('KARATE-BASE: Trying to select the drop down [ locator: ' + locator + '] value by [ index : ' + index + ' ].')
                   retry().select(locator, index)
                   karate.log('KARATE-BASE: The drop down [ locator: ' + locator + '] has been selected by [ index : ' + index + ' ] successfully.')
              }
              catch(e) {
                   if(e.message.includes('Cannot read property')) {
                        karate.fail('ERROR : The element [ locator : '+locator+' ] cannot be found.')
                   } else if(e.message.includes('retries')) {
                        var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                        karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                   } else {
                        karate.fail('ERROR EXCEPTION : '+ e)
                   }
              }
        },

        I_Select_Drop_Down_By_Key_Strokes_On_ : function(locator, displayedText) {
              try {
                   I_Wait_Until_Element_Displayed_(locator)
                   karate.log('KARATE-BASE: Trying to select the drop down [ locator: ' + locator + '] value by [ entering text : ' + displayedText + ' ].')
                   retry().input(locator, Key.ENTER + displayedText + Key.ENTER)
                   karate.log('KARATE-BASE:The drop down [ locator: ' + locator + '] has been selected by [ entering text : ' + displayedText + ' ] successfully.')
              }
              catch(e) {
                   if(e.message.includes('Cannot read property')) {
                        karate.fail('ERROR : The element [ locator : '+locator+' ] cannot be found.')
                   } else if(e.message.includes('retries')) {
                        var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                        karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                   } else {
                        karate.fail('ERROR EXCEPTION : '+ e)
                   }
              }
        },

        I_Switch_To_Page_Using_URL_ : function(URL) {
             try {
                driver.switchPage(URL)
                karate.log('KARATE-BASE: Switching to '+ URL )
             }
             catch(e)
             {
                if(e.message.includes('failed after 5 retries')) {
                    karate.fail('ERROR : The URL [ URL : '+URL+' ] cannot be found after 5 retries')
                } else { karate.fail('ERROR : '+ e.message) }
             }
        },

        I_Take_Screenshot_Of_The_Page_ : function() {
             try {
                robot.screenshot()
                karate.log('KARATE-BASE: Capturing Screenshot of ' + driver.title + ' page')
             }
             catch(e) { karate.fail('ERROR : ' + e) }
        },

        I_Wait_And_Enter_In_ : function(locator) {
              try {
                   I_Wait_Until_Element_Displayed_(locator)
                   karate.log('KARATE-BASE: Trying to enter [ text: ' + text + ' ] into the element [ locator: ' + locator + ' ].')
                   retry().input(locator,text)
                   karate.log('KARATE-BASE: Entered the [ text: ' + text + ' ] into the element [ locator: ' + locator + ' ].')
              }
              catch(e) {
                   if(e.message.includes('Cannot read property')) {
                        karate.fail('ERROR : The element [locator :'+locator+' ] cannot be found.')
                   } else if(e.message.includes('retries')) {
                        var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                        karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                   } else {
                        karate.fail('ERROR EXCEPTION : '+ e)
                   }
              }
        },

        I_Wait_And_Click_On_ : function(locator) {
              try {
                   karate.log('KARATE-BASE: Trying to click on element [ locator: ' + locator + ' ].')
                   retry().click(locator)
                   karate.log('KARATE-BASE: The element [ locator: ' + locator + ' ] has been clicked successfully.')
              }
              catch(e) {
                   if(e.message.includes('Cannot read property')) {
                        karate.fail('ERROR : The element [ locator  '+locator+'] cannot be found.')
                   } else if(e.message.includes('retries')) {
                        var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                        karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                   } else {
                        karate.fail('ERROR EXCEPTION : ' + e)
                   }
              }
        },

        I_Wait_Until_ : function(expression) {
              try {
                   karate.log('KARATE BASE: Waiting for the expression [ ' + expression + ' ] to be satisfied.')
                   retry().waitUntil(expression)
                   karate.log('KARATE BASE: The expression [ ' + expression + ' ] has been satisfied successfully.')
              }
              catch(e) {
                   if(e.message.includes('retries')) {
                       var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                       karate.fail('ERROR : The expression [ ' + expression + ' ] cannot be satisfied even after ' + retries)
                   } else {
                       karate.fail('ERROR EXCEPTION : ' + e)
                   }
              }
        },

        I_Wait_For_URL_ : function(URL) {
              try {
                   karate.log('KARATE-BASE: Waiting for [ URL : ' + URL + ' ] to be loaded.')
                   retry().waitForUrl(URL)
                   karate.log('KARATE-BASE: The [ URL : ' + URL + ' ] has been loaded successfully.')
              }
              catch(e) {
                   if(e.message.includes('retries')) {
                        var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                        karate.fail('ERROR : The locator [ locator : '+ locator +' ] cannot be found after ' + retries)
                   } else {
                        karate.fail('ERROR EXCEPTION : ' + e)
                   }
              }
        },

        I_Wait_And_Verify_Text_ : function(expectedLocator,actualValue) {
              try {
                   retry().waitForText(expectedLocator,actualValue)
              }
              catch(e) {
                   if(e.message.includes('retries')) {
                        var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                        karate.fail('ERROR : The locator [ locator : '+ expectedLocator +' ] cannot be found after ' + retries)
                   } else {
                        karate.fail('ERROR EXCEPTION : ' + e)
                   }
              }
        },

        I_Wait_For_ : function(timeout) {
              karate.log('KARATE-BASE: Waiting time of : ' + timeout + ' ms.')
              driver.delay(timeout)
              karate.log('KARATE-BASE: ' + timeout + ' ms of Waiting time completed.')
        },

        I_Wait_Until_Element_Disappears_ : function(locator,interval,retryValue) {
             var i=1;
             while(i<=retryValue){
                 if(driver.exists(locator)) {
                      driver.delay(interval)
                      karate.log('KARATE-BASE: The element [ locator: '+locator+' ] is still present after ' + i + ' retry. Hence repeating validation.')
                      i++
                  }
                  else { karate.log('KARATE-BASE: The element [ locator: '+locator+' ] has disappeared.')
                         break
                  }
            }
            if(retryValue<=i) { karate.fail('ERROR: The Element [ locator: ' + locator + ' ] is not Disappear from the screen after ' + retryValue + ' retries.') }
        },

        I_Wait_Until_Element_Displayed_ : function(locator) {
             try {
                  retry().waitFor(locator)
                  karate.log('KARATE-BASE: The element [ locator: ' + locator + ' ] is displayed.')
             }
             catch(e) {
                  if(e.message.includes('retries')) {
                      var retries = e.message.toString().replace('waitUntil (js): failed after ','')
                      karate.fail('ERROR : The locator [ locator : '+locator+' ] cannot be found after '+ retries)
                  } else {
                      karate.fail('ERROR EXCEPTION : ' + e)
                  }
             }
        },

        I_Verify_Element_Present_:function(locator) {
           retry().waitFor(locator)
           if(driver.exists(locator) == true) {
               karate.log('KARATE-BASE:The element [ locator: '+locator+' ] is found')
            } else { karate.fail('ERROR : The element [ locator : '+locator+' ] cannot be found') }
        },

        I_Verify_Element_is_Not_Present_ : function(locator) {
         if(driver.exists(locator) == false) {
             karate.log('KARATE-BASE: The element [ locator: '+locator+' ] is not present')
         } else {   karate.fail('ERROR : The element [ locator: '+locator+' ] is present') }
         },

         I_Verify_Element_Is_Enabled_ : function(locator) {
            try {
                  retry().waitFor(locator)
                  if(driver.enabled(locator) == true) {
                        karate.log("KARATE-BASE: The element [ locator: "+locator+" ] is enabled")
                  } else { karate.fail("ERROR : The element [ locator: "+locator+" ] is not enabled") }
            }
            catch(e) {
              if(e.message.includes('Cannot read property')) {
                  karate.fail('ERROR : The element [ locator : '+locator+' ] cannot be found') }
            }
         },
         I_Verify_Element_Is_Not_Enabled_ : function(locator) {
             try {
                    retry().waitFor(locator)
                    if(driver.enabled(locator) == false) {
                         karate.log("KARATE-BASE: The element [ locator: "+locator+" ] is not enabled")
                     } else { karate.fail("ERROR : The element [ locator: "+locator+" ] is enabled ") }
                  }
                  catch(e) {
                     if(e.message.includes('Cannot read property')) {
                            karate.fail('ERROR : The element [ locator : '+locator+' ] cannot be found') }
                  }
         },

        I_Verify_Text_Of_ : function(expectedLocatorValue,actualValue) {
              try {
                  retry().waitFor(expectedLocatorValue)
                  if(driver.text(expectedLocatorValue).trim() == actualValue)
                  { karate.log("KARATE-BASE: The text of the "+expectedLocatorValue+" matches with the " +actualValue) }
                  else
                  { karate.fail('ERROR : The value of '+expectedLocatorValue+' --> '+driver.text(expectedLocatorValue).trim()+' does not match with the '+actualValue) }
              }
              catch(e) {
                   if(e.message.includes('Cannot read property')) {
                        karate.fail('ERROR :The element [locator: '+locator+' ] cannot be found')
                   } else { karate.fail(e.message) }
              }
        },

        I_Verify_Text_Contains_ : function(expectedLocator,actualValue) {
              try {
                   retry().waitFor(expectedLocator)
                  if(driver.text(expectedLocator).contains(actualValue))
                    {
                       karate.log("KARATE-BASE: The value of "+expectedLocator + " contains "+ actualValue)
                    }
                    else
                    {
                      karate.fail('ERROR : The value of '+expectedLocator+' does not contain the '+actualValue)
                    }
              }
              catch(e) {
                   if(e.message.includes('Cannot read property')) {
                        karate.fail('ERROR :The element [locator :'+ expectedLocator + '] cannot be found')
                   } else if(e.message.includes('ReferenceError')) { karate.fail('ERROR : '+actualValue+' is not defined') }
                   else
                   {
                        karate.fail(e.message)
                   }
              }
        },

        I_Verify_Title_Of_: function(actualValue){
                try{
                     karate.match(driver.title,actualValue)
                     karate.log("KARATE-BASE: Matching page title" + driver.title + " with "+ actualValue)
                 }
                catch(e)
                {
                     if(e.message.includes('Cannot read property'))
                      { karate.fail('ERROR : The element [ locator: '+locator+' ] cannot be found') }
                      else
                      { karate.fail(e.message) }
                }
        },

        I_Verify_Text_With_JS_ : function(locator,actualValue) {
              var result = karate.match(script(locator,'_.innerText'),actualValue)
              if(result.pass == true)
              { karate.log('KARATE-BASE: The value of '+locator+' matches with the '+actualValue) }
              else
              { karate.fail(result.message) }
        },

        I_Verify_Text_Of_All_Elements_With_JS_ : function(locator,expectedValue) {
              try {
                   list = driver.locateAll(locator)
                   size = karate.sizeOf(list)
                   value = expectedValue
                   fun = function(i) { return list[i].script('_.innerText')}
                   karate.match("each karate.repeat(size,fun) contains value")
              }
              catch(e) {
                   if(e.message.includes('Cannot read property'))
                      { karate.fail('ERROR : The element [locator :'+ expectedLocator + '] cannot be found') }
              }
        },

        I_Verify_Attribute_Value_With_ : function(locator,attributeName,attributeValue) {
            try {
                retry().waitFor(locator)
                var attributeValueFromApplication = driver.attribute(locator,attributeName)
                if(attributeValueFromApplication != attributeValue) {delay(1500)}
                if(attributeValueFromApplication == attributeValue) {
                     karate.log('KARATE-BASE: The value of the [ attribute : ' + attributeName + '; attribute value : ' + attributeValueFromApplication + ' ] of element [ locator : ' + locator + ' ] is matching [ value : ' + attributeValue + ' ].')
                } else {
                     karate.fail('ERROR : The value of the [ attribute : ' + attributeName + '; attribute value : ' + attributeValueFromApplication + ' ] of element [ locator : ' + locator + ' ] is not matching [ value : ' + attributeValue + ' ].')
                }
            }
            catch(e) {
                if(e.message.includes('Cannot read property')) {
                     karate.fail('ERROR : The element [locator :'+ locator + '] cannot be found.')
                } else { karate.fail('ERROR : ' + e) }
            }
        },

        I_Verify_Attribute_Value_Does_Not_Match_With_ : function(locator,attributeName,attributeValue) {
            try {
                var attributeValueFromApplication = driver.attribute(locator,attributeName)
                if(!attributeValueFromApplication.includes(attributeValue)) {
                     karate.log('KARATE-BASE: The value of the [ attribute : ' + attributeName + '; attribute value : ' + attributeValueFromApplication + ' ] of element [ locator : ' + locator + ' ] does not contains [ value : ' + attributeValue + ' ].')
                } else {
                     karate.fail('ERROR : The value of the [ attribute : ' + attributeName + '; attribute value : ' + attributeValueFromApplication + ' ] of element [ locator : ' + locator + ' ] includes [ value : ' + attributeValue + ' ].')
                }
            }
            catch(e) {
                if(e.message.includes('Cannot read property')) {
                     karate.fail('ERROR : The element [locator :'+ locator + '] cannot be found.')
                } else { karate.fail('ERROR : ' + e) }
            }
        },

        I_Verify_Background_color_of_element : function(locator,actualHexvalue)
            {
                rgbvalue = script(locator,"function(e){ return getComputedStyle(e)['background-color'] }")
                removedrgb=rgbvalue.replace('rgb(','').replace(')','').replace(' ','')
                karate.log("KARATE-BASE: The replaced string is "+removedrgb)
                rgblist=getList(removedrgb,',')
                expectedhexvalue=hexcode(rgblist[0],rgblist[1],rgblist[2])
                I_Match_With(expectedhexvalue,actualHexvalue)

        },

        I_Match_With :function (expectedValue,actualValue)
        {
            I_Wait_For_(2000)
            var result = karate.match(expectedValue,actualValue)
            if(result.pass == true)
            { karate.log('KARATE-BASE: The '+expectedValue+' matches with the '+actualValue) }
            else
            { karate.fail(result.message) }
        },

        getURL : function() { return driver.url },
        getTitle : function() { return driver.title  },

        getList : function(string,separator) {
              list=string.split(separator)
              return list
        },

         getText:function(locator)
                { return driver.text(locator).trim() },

        getTextAndPrintValue : function(locator, text){
            I_Wait_Until_Element_Displayed_(locator)
            var string = driver.text(locator).trim()
            karate.log('KARATE-BASE: '+ text +' '+ string)
            return string;
        },

        rgbToHex : function (rgb)
        {
          var hex = Number(rgb).toString(16);
          if (hex.length < 2) {
                hex = "0" + hex;
          }
          return hex;
        },

        hexcode:function(r,g,b)
        {
          var red = rgbToHex(r)
          var green = rgbToHex(g)
          var blue = rgbToHex(b)
          return red+green+blue
       },
       I_Locate_All_Elements_Of_Dropdown_:function(locator)
       {
            lst=driver.locateAll(locator)
            size=karate.sizeOf(lst)
            fun = function(i) { return lst[i].script('_.innerText')}
            new_lst = karate.repeat(size,fun)
            return new_lst
       },
       getAttributeValue : function (locator,attributeName)
       { return driver.attribute(locator,attributeName) }

    }
}