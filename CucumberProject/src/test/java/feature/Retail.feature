Feature: Automation Testing of Retail Website

  Background: Log In
    Given Admin is on the login page
    And Admin enters Username "admin" and Password "admin@123"
    When Admin clicks on Login button
    Then Admin should be logged in sucessfully to the Retail dashboard
    And Admin clicks on Customers icon
    And Admin clicks Customers
    Then Admin will be redirected to Customers Dashboard

  @test1
  Scenario Outline: Verify Customer List with data present in database
    Given Admin is on the Customer page of Retail Website
    And Admin enters "<CustomerName>" ,"<CustomerGroup>","<Approved>","<Date Added>","<E-Mail>","<Status>","<IP>"
    And Admin clicks filter button
    Then Admin gets the details of the required customer

    Examples: 
      | CustomerName  | CustomerGroup | Approved | Date Added | E-Mail           | Status  | IP             |
      | deepa banakar | Default       | Yes      | 2020-07-02 | abc@123.com      | Enabled | 122.172.31.243 |
      | etre ertret   | Default       | Yes      |            | trete@sfdsfd.com | Enabled | 106.202.21.41  |

  @test2
  Scenario Outline: Verify Customer List with data not present in database
    Given Admin is on the Customer page of Retail Website
    And Admin enters data in "<CustomerName>" ,"<CustomerGroup>","<Approved>","<Date Added>","<E-Mail>","<Status>","<IP>"
    And Admin clicks Filter button
    Then Admin validates the customer list

    Examples: 
      | CustomerName | CustomerGroup | Approved | Date Added | E-Mail | Status  | IP |
      | hiiiiiiiii   | Default       | Yes      |            |        | Enabled |    |

  @test3
  Scenario Outline: Verify Edit Action Button
    Given Admin is on the Customer page of Retail Website
    When Admin clicks on Edit button
    Then Admin sucessfully navigates to the Edit Customer page
    When Admin edits "<CustomerGroup>","<FirstName>","<Last Name>","<E-Mail>","<Telephone>","<Password>","<Confirm>","<Status>","<Approved>"
    And Admin clicks on save button
    Then Admin is redirected to the Customer page
    And Admin gets a success message

    Examples: 
      | CustomerGroup | FirstName | Last Name | E-Mail           | Telephone  | Password | Confirm | Status  | Approved |
      | Default       | crc       | jo        | cegc@gmail.com   | 9800088789 | is@12    | is@12   | Enabled | No       |
      | Test          | bibhu     | dfghj     | ubce64@gmail.com | abcditu    | ads@13   | ads@13  | Enabled | No       |

  @test4
  Scenario Outline: Verify Add new button
    Given Admin is on the Customer page of Retail Website
    When Admin clicks on Add New button
    Then Admin sucessfully navigates to the Add Customer page
    When Admin enters "<CustomerGroup>","<FirstName>","<Last Name>","<E-Mail>","<Telephone>","<Password>","<Confirm>","<Status>","<Approved>"
    And Admin clicks on Save Button
    Then Admin is redirected to the Customers page
    And Admin gets a successfully added message

    Examples: 
      | CustomerGroup   | FirstName | Last Name | E-Mail         | Telephone  | Password | Confirm | Status   | Approved |
      | Platinum Member | Sid       | ssddd     | ss71@gmail.com | 7899097127 | aar_12   | aar_12  | Disabled | Yes      |

  @test5
  Scenario: Verify pagination
    Given Admin is on the Customer page of Retail Website
    When Admin checks the default count of the page
    Then Admin gets the total page count
    When Admin clicks next button of pagination
    Then Admin is navigate to next page
    When Admin checks previous button of pagination
    Then Admin is navigate to previous page
