Feature: Verify Register and Login functionality
  I want to use this template for my feature file

  Background: Verify Real Estate Site functionalities
    Given User is on the Real Estate Website

  @register
  Scenario Outline: Verify Register functionality
    When User goes to the Register tab
    And User enters "<email>" , "<firstName>" , "<lastName>" in the fields
    And User clicks on Register button
    Then User gets a "<registration>" conformation message

    Examples: 
      | email                | firstName | lastName | registration                                                                                                     |
      | sanchi2502@gmail.com  | Sanchi    | Gupta    | You have successfully registered to Real Estate. We have emailed your password to the email address you entered. |
      | sanchi2502@gmail.com | Sanchi    | Gupta    | An account exists with this email address.                                                                       |
      | sanchi25@gmail.com   | !@$%^     | !@$%^    | The first and last name you entered is not valid.                                                                |
      | sanchi225@gmail.com  | San123    | Gup123   | The first and last name you entered is not valid.                                                                |
      | sanchi522@gmail.com  |     12365 |   344456 | The first and last name you entered is not valid.                                                                |
      | fgadghsda            | Sanchi    | Gupta    | The email address you entered is not valid.                                                                      |
      | $^&(^&               | Sanchi    | Gupta    | The email address you entered is not valid.                                                                      |
      | blank                | blank     | blank    | The email address you entered is not valid.                                                                      |
      |              6845834 | Sanchi    | Gupta    | The email address you entered is not valid.                                                                      |

  @login
  Scenario Outline: Verify Login functionality
    When User enters "<userName>" , "<password>" in the fields
    And User clicks on Login button
    Then User "<login>" confirmation message is displayed

    Examples: 
      | userName | password  | login                                                                                            |
      | admin    | admin@123 | Dashboard                                                                                        |
      | !@$%^    | hdgfh     | We don't have any users with that email address. Maybe you used a different one when signing up? |
      |    12345 | hdgfh     | We don't have any users with that email address. Maybe you used a different one when signing up? |
      | blank    | hdgfh     | You do have an email address, right?                                                             |
      | admin    | !$^&      | The password you entered wasn't quite right. Did you forget your password?                       |
      | admin    |      1234 | The password you entered wasn't quite right. Did you forget your password?                       |
      | admin    | blank     | You need to enter a password to login.                                                           |

  @logout
  Scenario Outline: Verify Logout functionality
    When User enters "<userName>" , "<password>" to login
    And User clicks the Login button
    When User hovers on Profile icon
    And User clicks on Log Out option
    Then User gets back to the Login page

    Examples: 
      | userName | password  |
      | admin    | admin@123 |

  @forgetpassword
  Scenario Outline: Verify Forget Password functionality
    When User clicks on Lost Your Password link
    Then User gets to a Lost Password page
    When User enters "<email>" in the field
    And User clicks on Reset Password button
    Then User gets a "<conformation>" message

    Examples: 
      | email            | conformation                                       |
      | sanchi@gmail.com | Password reset link has been sent to your mail id. |
      | sanchi           | Invalid password reset link.                       |
      | !@$^&&           | Invalid password reset link.                       |
      |           123456 | Invalid password reset link.                       |
      | blank            | Invalid password reset link.                       |

  @realestate
  Scenario: Verify Real Estate link on top of website
    When User clicks on the Real Estate link
    Then User sees a Search bar
    Then User sees Featured Properties
    Then User sees Realty, Home Loan, Interiors and Legal icons
    Then User sees Listings For Sale, Clients, Builders and Conversion information
    Then User sees Comments of clients
    And User clicks on Arrow
    Then User sees next comments
    When User sees Realty News and Articles
    And User clicks on Arrow in that section
    Then User sees next articles

  @relinks
  Scenario: Verify links in Real Estate link on top of website
    When User goes to Real Estate page
    And User clicks on Realty icon
    Then User gets to Realty Website
    When User gets back to Real Estate website
    And User clicks on Home Loan icon
    Then User gets to Home Loan Website
    When User gets back to Real Estate website
    And User clicks on Interiors icon
    Then User gets to Interiors Website
    When User gets back to Real Estate website
    And User clicks on Legal icon
    Then User gets to Legal Website
    When User gets back to Real Estate website
    And User clicks on Browse Properties link
    Then User gets a list of properties
    When User gets back to main website
    And User hovers to the Property Management picture
    And User clicks on the Share Details link
    Then User gets to a Contact Us Page

  @contactus
  Scenario: Verify Contact Us functionality
    When User clicks on Contact Us link
    Then User finds an office address with a map
    Then User finds phone number, web and email address
    When User clicks on Web link
    Then User gets more information
    And User gets back to contact page
    When User clicks on email address link
    Then User is able to send an email

  @contactform
  Scenario Outline: Verify Contact Us functionality
    When User clicks on Contact Us link
    Then User enters "<name>" , "<email>" , "<subject>" , "<message>" in the contact form
    Then User clicks on Send button
    And User gets a "<conformation>" for sending message

    Examples: 
      | name    | email            | subject                 | message                  | conformation                                                  |
      | Sanchi  | sanchi@gmail.com | More Information Needed | I want more information. | Your message has been sent successfully.                      |
      | blank   | sanchi@gmail.com | More Information Needed | I want more information. | One or more fields have an error. Please check and try again. |
      | !@$%&   | sanchi@gmail.com | More Information Needed | I want more information. | Some field has an error. Please check and try again.          |
      | Sanc123 | sanchi@gmail.com | More Information Needed | I want more information. | Some field has an error. Please check and try again.          |
      | Sanchi  | blank            | More Information Needed | I want more information. | One or more fields have an error. Please check and try again. |
      | Sanchi  | sanchi123        | More Information Needed | I want more information. | One or more fields have an error. Please check and try again. |
      | Sanchi  | !@$%&^           | More Information Needed | I want more information. | One or more fields have an error. Please check and try again. |
      | Sanchi  | sanchi@gmail.com | blank                   | I want more information. | One or more fields have an error. Please check and try again. |
      | Sanchi  | sanchi@gmail.com | !@$%^                   | I want more information. | Some field has an error. Please check and try again.          |
      | Sanchi  | sanchi@gmail.com | More Information Needed | !@%^&                    | Some field has an error. Please check and try again.          |
      | Sanchi  | sanchi@gmail.com | More Information Needed | blank                    | One or more fields have an error. Please check and try again. |

  @toplinks
  Scenario: Verify links located at top of the website
    Then User finds a phone number and email address
    And User clicks on Facebook icon
    Then User gets to Facebook login page
    When User gets back to main website
    And User clicks on Twitter icon
    Then User gets to Twitter login page
    When User gets back to main website
    And User clicks on Google+ icon
    Then User gets to Google+ login page
    And User clicks on Wifi icon
    Then User gets to Wifi login page
    When User gets back to main website
    And User clicks on Invest In Overseas link
    Then User gets to Invest In Overseas page
    When User gets back to Real Estate website
    And User clicks on Blogs link
    Then User gets to Blogs page
    And User finds latest news and blogs
    
  @bottomlinks
  Scenario: Verify links located at bottom of the website
    Then User finds address, phone number and email address
    And User clicks on About Us link
    Then User gets to About Us page
    When User gets back to main website
    And User clicks on Contact Us link
    Then User gets to Contact Us page
    When User gets back to main website
    And User clicks on Blogs link
    Then User gets to Blogs page
    When User gets back to main website
    And User clicks on Compare Properties link
    Then User gets to Compare Properties page
    When User gets back to main website
    And User clicks on Facebook icon at page's bottom
    Then User gets to Facebook login page
    When User gets back to Real Estate website
    And User clicks on Twitter icon at page's bottom
    Then User gets to Twitter login page
    When User gets back to Real Estate website
    And User clicks on Google+ icon at page's bottom
    Then User gets to Google+ login page
    When User gets back to Real Estate website
    And User clicks on Wifi icon at page's bottom
    Then User gets to that page
    
   