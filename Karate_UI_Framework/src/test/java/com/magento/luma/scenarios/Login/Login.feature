Feature: As a User I want to check
  login functionality including positive and negative scenarios


    @Login
    Scenario: Verify that user is able to login into application with valid credential
      Given driver {}
      When I_Open_The_Application_With_URL_(applicationURL)
      And I_Click_On_(LoginScreen.SignInLink)
      And I_Clear_And_Enter_Text_In_The_Field_(LoginScreen.EmailAddress,applicationUserName)
      And I_Clear_And_Enter_Text_In_The_Field_(LoginScreen.Password,applicationPassword)
      And I_Click_On_(LoginScreen.SignInButton)
      And I_Wait_And_Verify_Text_(LoginScreen.WelcomeLinkAfterLogin, 'Welcome')

#  @InvalidLogin
#  Scenario: Verify that user is not able to login into application with invalid credential
#    Given driver {}
#    When I_Open_The_Application_With_URL_(applicationURL)
#    And I_Click_On_(LoginScreen.SignInLink)
#    And I_Clear_And_Enter_Text_In_The_Field_(LoginScreen.EmailAddress,applicationUserName)
#    And I_Clear_And_Enter_Text_In_The_Field_(LoginScreen.Password,applicationWrongPassword)
#    And I_Click_On_(LoginScreen.SignInButton)
#    And I_Wait_And_Verify_Text_(LoginScreen.LoginErrorMessage, 'The account sign-in was incorrect or your account is disabled temporarily')
#

