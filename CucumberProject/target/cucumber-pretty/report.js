$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/Retail.feature");
formatter.feature({
  "name": "Automation Testing of Retail Website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Customer List with data present in database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Customer page of Retail Website",
  "keyword": "Given "
});
formatter.step({
  "name": "Admin enters \"\u003cCustomerName\u003e\" ,\"\u003cCustomerGroup\u003e\",\"\u003cApproved\u003e\",\"\u003cDate Added\u003e\",\"\u003cE-Mail\u003e\",\"\u003cStatus\u003e\",\"\u003cIP\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks filter button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin gets the details of the required customer",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CustomerName",
        "CustomerGroup",
        "Approved",
        "Date Added",
        "E-Mail",
        "Status",
        "IP"
      ]
    },
    {
      "cells": [
        "deepa banakar",
        "Default",
        "Yes",
        "2020-07-02",
        "abc@123.com",
        "Enabled",
        "122.172.31.243"
      ]
    },
    {
      "cells": [
        "etre ertret",
        "Default",
        "Yes",
        "",
        "trete@sfdsfd.com",
        "Enabled",
        "106.202.21.41"
      ]
    }
  ]
});
formatter.background({
  "name": "Log In",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Username \"admin\" and Password \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.admin_enters_Username_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.admin_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should be logged in sucessfully to the Retail dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_should_be_logged_in_sucessfully_to_the_Retail_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Customers icon",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_Customers_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks Customers",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_Customers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will be redirected to Customers Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_will_be_redirected_to_Customers_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer List with data present in database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Customer page of Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_Customer_page_of_Retail_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters \"deepa banakar\" ,\"Default\",\"Yes\",\"2020-07-02\",\"abc@123.com\",\"Enabled\",\"122.172.31.243\"",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_enters(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks filter button",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets the details of the required customer",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_gets_the_details_of_the_required_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Log In",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Username \"admin\" and Password \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.admin_enters_Username_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.admin_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should be logged in sucessfully to the Retail dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_should_be_logged_in_sucessfully_to_the_Retail_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Customers icon",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_Customers_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks Customers",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_Customers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will be redirected to Customers Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_will_be_redirected_to_Customers_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer List with data present in database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Customer page of Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_Customer_page_of_Retail_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters \"etre ertret\" ,\"Default\",\"Yes\",\"\",\"trete@sfdsfd.com\",\"Enabled\",\"106.202.21.41\"",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_enters(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks filter button",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets the details of the required customer",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_gets_the_details_of_the_required_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Customer List with data not present in database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test2"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Customer page of Retail Website",
  "keyword": "Given "
});
formatter.step({
  "name": "Admin enters data in \"\u003cCustomerName\u003e\" ,\"\u003cCustomerGroup\u003e\",\"\u003cApproved\u003e\",\"\u003cDate Added\u003e\",\"\u003cE-Mail\u003e\",\"\u003cStatus\u003e\",\"\u003cIP\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks Filter button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin validates the customer list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CustomerName",
        "CustomerGroup",
        "Approved",
        "Date Added",
        "E-Mail",
        "Status",
        "IP"
      ]
    },
    {
      "cells": [
        "hiiiiiiiii",
        "Default",
        "Yes",
        "",
        "",
        "Enabled",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Log In",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Username \"admin\" and Password \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.admin_enters_Username_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.admin_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should be logged in sucessfully to the Retail dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_should_be_logged_in_sucessfully_to_the_Retail_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Customers icon",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_Customers_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks Customers",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_Customers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will be redirected to Customers Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_will_be_redirected_to_Customers_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer List with data not present in database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test2"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Customer page of Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_Customer_page_of_Retail_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters data in \"hiiiiiiiii\" ,\"Default\",\"Yes\",\"\",\"\",\"Enabled\",\"\"",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_enters_data_in(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks Filter button",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_Filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin validates the customer list",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_validates_the_customer_list()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Edit Action Button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Customer page of Retail Website",
  "keyword": "Given "
});
formatter.step({
  "name": "Admin clicks on Edit button",
  "keyword": "When "
});
formatter.step({
  "name": "Admin sucessfully navigates to the Edit Customer page",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin edits \"\u003cCustomerGroup\u003e\",\"\u003cFirstName\u003e\",\"\u003cLast Name\u003e\",\"\u003cE-Mail\u003e\",\"\u003cTelephone\u003e\",\"\u003cPassword\u003e\",\"\u003cConfirm\u003e\",\"\u003cStatus\u003e\",\"\u003cApproved\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin is redirected to the Customer page",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin gets a success message",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CustomerGroup",
        "FirstName",
        "Last Name",
        "E-Mail",
        "Telephone",
        "Password",
        "Confirm",
        "Status",
        "Approved"
      ]
    },
    {
      "cells": [
        "Default",
        "crc",
        "jo",
        "cegc@gmail.com",
        "9800088789",
        "is@12",
        "is@12",
        "Enabled",
        "No"
      ]
    },
    {
      "cells": [
        "Test",
        "bibhu",
        "dfghj",
        "ubce64@gmail.com",
        "abcditu",
        "ads@13",
        "ads@13",
        "Enabled",
        "No"
      ]
    }
  ]
});
formatter.background({
  "name": "Log In",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Username \"admin\" and Password \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.admin_enters_Username_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.admin_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should be logged in sucessfully to the Retail dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_should_be_logged_in_sucessfully_to_the_Retail_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Customers icon",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_Customers_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks Customers",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_Customers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will be redirected to Customers Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_will_be_redirected_to_Customers_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Edit Action Button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Customer page of Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_Customer_page_of_Retail_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Edit button",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_Edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin sucessfully navigates to the Edit Customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_sucessfully_navigates_to_the_Edit_Customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin edits \"Default\",\"crc\",\"jo\",\"cegc@gmail.com\",\"9800088789\",\"is@12\",\"is@12\",\"Enabled\",\"No\"",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.user_edits(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat stepDefination2.RetailDefination.user_edits(RetailDefination.java:415)\r\n\tat ✽.Admin edits \"Default\",\"crc\",\"jo\",\"cegc@gmail.com\",\"9800088789\",\"is@12\",\"is@12\",\"Enabled\",\"No\"(file:src/test/java/feature/Retail.feature:40)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin is redirected to the Customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_is_redirected_to_the_Customer_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets a success message",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_gets_a_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Log In",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Username \"admin\" and Password \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.admin_enters_Username_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.admin_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should be logged in sucessfully to the Retail dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_should_be_logged_in_sucessfully_to_the_Retail_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Customers icon",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_Customers_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks Customers",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_Customers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will be redirected to Customers Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_will_be_redirected_to_Customers_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Edit Action Button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Customer page of Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_Customer_page_of_Retail_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Edit button",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_Edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin sucessfully navigates to the Edit Customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_sucessfully_navigates_to_the_Edit_Customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin edits \"Test\",\"bibhu\",\"dfghj\",\"ubce64@gmail.com\",\"abcditu\",\"ads@13\",\"ads@13\",\"Enabled\",\"No\"",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.user_edits(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat stepDefination2.RetailDefination.user_edits(RetailDefination.java:389)\r\n\tat ✽.Admin edits \"Test\",\"bibhu\",\"dfghj\",\"ubce64@gmail.com\",\"abcditu\",\"ads@13\",\"ads@13\",\"Enabled\",\"No\"(file:src/test/java/feature/Retail.feature:40)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin is redirected to the Customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_is_redirected_to_the_Customer_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets a success message",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_gets_a_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Verify Add new button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test4"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Customer page of Retail Website",
  "keyword": "Given "
});
formatter.step({
  "name": "Admin clicks on Add New button",
  "keyword": "When "
});
formatter.step({
  "name": "Admin sucessfully navigates to the Add Customer page",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin enters \"\u003cCustomerGroup\u003e\",\"\u003cFirstName\u003e\",\"\u003cLast Name\u003e\",\"\u003cE-Mail\u003e\",\"\u003cTelephone\u003e\",\"\u003cPassword\u003e\",\"\u003cConfirm\u003e\",\"\u003cStatus\u003e\",\"\u003cApproved\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin clicks on Save Button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin is redirected to the Customers page",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin gets a successfully added message",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CustomerGroup",
        "FirstName",
        "Last Name",
        "E-Mail",
        "Telephone",
        "Password",
        "Confirm",
        "Status",
        "Approved"
      ]
    },
    {
      "cells": [
        "Platinum Member",
        "Sid",
        "ssddd",
        "ss71@gmail.com",
        "7899097127",
        "aar_12",
        "aar_12",
        "Disabled",
        "Yes"
      ]
    }
  ]
});
formatter.background({
  "name": "Log In",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Username \"admin\" and Password \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.admin_enters_Username_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.admin_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should be logged in sucessfully to the Retail dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_should_be_logged_in_sucessfully_to_the_Retail_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Customers icon",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_Customers_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks Customers",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_Customers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will be redirected to Customers Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_will_be_redirected_to_Customers_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Add new button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test4"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Customer page of Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_Customer_page_of_Retail_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Add New button",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_Add_New_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin sucessfully navigates to the Add Customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_sucessfully_navigates_to_the_Add_Customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters \"Platinum Member\",\"Sid\",\"ssddd\",\"ss71@gmail.com\",\"7899097127\",\"aar_12\",\"aar_12\",\"Disabled\",\"Yes\"",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.user_enters(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_Save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is redirected to the Customers page",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_is_redirected_to_the_Customers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets a successfully added message",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_gets_a_successfully_added_message()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Log In",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Username \"admin\" and Password \"admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.admin_enters_Username_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.admin_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should be logged in sucessfully to the Retail dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_should_be_logged_in_sucessfully_to_the_Retail_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on Customers icon",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_on_Customers_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks Customers",
  "keyword": "And "
});
formatter.match({
  "location": "RetailDefination.user_clicks_Customers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will be redirected to Customers Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_will_be_redirected_to_Customers_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify pagination",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test5"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Customer page of Retail Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RetailDefination.user_is_on_the_Customer_page_of_Retail_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin checks the default count of the page",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.user_checks_the_default_count_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets the total page count",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_gets_the_total_page_count()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks next button of pagination",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.user_checks_next_button_of_pagination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_is_navigate_to_next_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin checks previous button of pagination",
  "keyword": "When "
});
formatter.match({
  "location": "RetailDefination.user_checks_previous_button_of_pagination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is navigate to previous page",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailDefination.user_is_navigate_to_previous_page()"
});
formatter.result({
  "status": "passed"
});
});