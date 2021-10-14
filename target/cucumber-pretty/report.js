$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegisterLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Register and Login functionality",
  "description": "I want to use this template for my feature file",
  "id": "verify-register-and-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify Register functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-register-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User goes to the Register tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"\u003cemail\u003e\" , \"\u003cfirstName\u003e\" , \"\u003clastName\u003e\" in the fields",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User gets a \"\u003cregistration\u003e\" conformation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-register-functionality;",
  "rows": [
    {
      "cells": [
        "email",
        "firstName",
        "lastName",
        "registration"
      ],
      "line": 15,
      "id": "verify-register-and-login-functionality;verify-register-functionality;;1"
    },
    {
      "cells": [
        "sanchi0225@gmail.com",
        "Sanchi",
        "Gupta",
        "You have successfully registered to Real Estate. We have emailed your password to the email address you entered."
      ],
      "line": 16,
      "id": "verify-register-and-login-functionality;verify-register-functionality;;2"
    },
    {
      "cells": [
        "sanchi0225@gmail.com",
        "Sanchi",
        "Gupta",
        "An account exists with this email address."
      ],
      "line": 17,
      "id": "verify-register-and-login-functionality;verify-register-functionality;;3"
    },
    {
      "cells": [
        "sanchi25@gmail.com",
        "!@$%^",
        "!@$%^",
        "The first and last name you entered is not valid."
      ],
      "line": 18,
      "id": "verify-register-and-login-functionality;verify-register-functionality;;4"
    },
    {
      "cells": [
        "sanchi225@gmail.com",
        "San123",
        "Gup123",
        "The first and last name you entered is not valid."
      ],
      "line": 19,
      "id": "verify-register-and-login-functionality;verify-register-functionality;;5"
    },
    {
      "cells": [
        "sanchi522@gmail.com",
        "12365",
        "344456",
        "The first and last name you entered is not valid."
      ],
      "line": 20,
      "id": "verify-register-and-login-functionality;verify-register-functionality;;6"
    },
    {
      "cells": [
        "fgadghsda",
        "Sanchi",
        "Gupta",
        "The email address you entered is not valid."
      ],
      "line": 21,
      "id": "verify-register-and-login-functionality;verify-register-functionality;;7"
    },
    {
      "cells": [
        "$^\u0026(^\u0026",
        "Sanchi",
        "Gupta",
        "The email address you entered is not valid."
      ],
      "line": 22,
      "id": "verify-register-and-login-functionality;verify-register-functionality;;8"
    },
    {
      "cells": [
        "blank",
        "blank",
        "blank",
        "The email address you entered is not valid."
      ],
      "line": 23,
      "id": "verify-register-and-login-functionality;verify-register-functionality;;9"
    },
    {
      "cells": [
        "6845834",
        "Sanchi",
        "Gupta",
        "The email address you entered is not valid."
      ],
      "line": 24,
      "id": "verify-register-and-login-functionality;verify-register-functionality;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13916349800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1134020100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Register functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-register-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User goes to the Register tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"sanchi0225@gmail.com\" , \"Sanchi\" , \"Gupta\" in the fields",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User gets a \"You have successfully registered to Real Estate. We have emailed your password to the email address you entered.\" conformation message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_goes_to_the_Register_tab()"
});
formatter.result({
  "duration": 1149956900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanchi0225@gmail.com",
      "offset": 13
    },
    {
      "val": "Sanchi",
      "offset": 38
    },
    {
      "val": "Gupta",
      "offset": 49
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String,String)"
});
formatter.result({
  "duration": 1436627600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4722487800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have successfully registered to Real Estate. We have emailed your password to the email address you entered.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_conformation_message(String)"
});
formatter.result({
  "duration": 1067586100,
  "status": "passed"
});
formatter.after({
  "duration": 901428700,
  "status": "passed"
});
formatter.before({
  "duration": 15234166100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1016655500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Register functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-register-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User goes to the Register tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"sanchi0225@gmail.com\" , \"Sanchi\" , \"Gupta\" in the fields",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User gets a \"An account exists with this email address.\" conformation message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_goes_to_the_Register_tab()"
});
formatter.result({
  "duration": 1090630800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanchi0225@gmail.com",
      "offset": 13
    },
    {
      "val": "Sanchi",
      "offset": 38
    },
    {
      "val": "Gupta",
      "offset": 49
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String,String)"
});
formatter.result({
  "duration": 1382826600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 3723268300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An account exists with this email address.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_conformation_message(String)"
});
formatter.result({
  "duration": 1096213700,
  "status": "passed"
});
formatter.after({
  "duration": 778317700,
  "status": "passed"
});
formatter.before({
  "duration": 12467703200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1011676000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify Register functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-register-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User goes to the Register tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"sanchi25@gmail.com\" , \"!@$%^\" , \"!@$%^\" in the fields",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User gets a \"The first and last name you entered is not valid.\" conformation message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_goes_to_the_Register_tab()"
});
formatter.result({
  "duration": 1127253100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanchi25@gmail.com",
      "offset": 13
    },
    {
      "val": "!@$%^",
      "offset": 36
    },
    {
      "val": "!@$%^",
      "offset": 46
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String,String)"
});
formatter.result({
  "duration": 1449026400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4242451300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The first and last name you entered is not valid.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_conformation_message(String)"
});
formatter.result({
  "duration": 60831300,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [The first and last name you entered is not valid.] but found [You have successfully registered to Real Estate. We have emailed your password to the email address you entered.]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_a_conformation_message(RegisterLoginClass.java:107)\r\n\tat ✽.Then User gets a \"The first and last name you entered is not valid.\" conformation message(RegisterLogin.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 771362300,
  "status": "passed"
});
formatter.before({
  "duration": 15503031200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1008965700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify Register functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-register-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User goes to the Register tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"sanchi225@gmail.com\" , \"San123\" , \"Gup123\" in the fields",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User gets a \"The first and last name you entered is not valid.\" conformation message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_goes_to_the_Register_tab()"
});
formatter.result({
  "duration": 1130324100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanchi225@gmail.com",
      "offset": 13
    },
    {
      "val": "San123",
      "offset": 37
    },
    {
      "val": "Gup123",
      "offset": 48
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String,String)"
});
formatter.result({
  "duration": 1378571700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 3604180900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The first and last name you entered is not valid.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_conformation_message(String)"
});
formatter.result({
  "duration": 73181500,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [The first and last name you entered is not valid.] but found [You have successfully registered to Real Estate. We have emailed your password to the email address you entered.]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_a_conformation_message(RegisterLoginClass.java:107)\r\n\tat ✽.Then User gets a \"The first and last name you entered is not valid.\" conformation message(RegisterLogin.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 760233600,
  "status": "passed"
});
formatter.before({
  "duration": 13929436500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1005910600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify Register functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-register-functionality;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User goes to the Register tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"sanchi522@gmail.com\" , \"12365\" , \"344456\" in the fields",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User gets a \"The first and last name you entered is not valid.\" conformation message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_goes_to_the_Register_tab()"
});
formatter.result({
  "duration": 1102267000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanchi522@gmail.com",
      "offset": 13
    },
    {
      "val": "12365",
      "offset": 37
    },
    {
      "val": "344456",
      "offset": 47
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String,String)"
});
formatter.result({
  "duration": 1482018500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 3217367900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The first and last name you entered is not valid.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_conformation_message(String)"
});
formatter.result({
  "duration": 56951600,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [The first and last name you entered is not valid.] but found [You have successfully registered to Real Estate. We have emailed your password to the email address you entered.]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_a_conformation_message(RegisterLoginClass.java:107)\r\n\tat ✽.Then User gets a \"The first and last name you entered is not valid.\" conformation message(RegisterLogin.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 748910200,
  "status": "passed"
});
formatter.before({
  "duration": 12237656700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1018677500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify Register functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-register-functionality;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User goes to the Register tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"fgadghsda\" , \"Sanchi\" , \"Gupta\" in the fields",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User gets a \"The email address you entered is not valid.\" conformation message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_goes_to_the_Register_tab()"
});
formatter.result({
  "duration": 1129265500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fgadghsda",
      "offset": 13
    },
    {
      "val": "Sanchi",
      "offset": 27
    },
    {
      "val": "Gupta",
      "offset": 38
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String,String)"
});
formatter.result({
  "duration": 1327798100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 2821523000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The email address you entered is not valid.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_conformation_message(String)"
});
formatter.result({
  "duration": 1050448000,
  "status": "passed"
});
formatter.after({
  "duration": 775664600,
  "status": "passed"
});
formatter.before({
  "duration": 13392562300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1012590700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify Register functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-register-functionality;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User goes to the Register tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"$^\u0026(^\u0026\" , \"Sanchi\" , \"Gupta\" in the fields",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User gets a \"The email address you entered is not valid.\" conformation message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_goes_to_the_Register_tab()"
});
formatter.result({
  "duration": 1100269000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$^\u0026(^\u0026",
      "offset": 13
    },
    {
      "val": "Sanchi",
      "offset": 24
    },
    {
      "val": "Gupta",
      "offset": 35
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String,String)"
});
formatter.result({
  "duration": 1392582500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 2765398900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The email address you entered is not valid.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_conformation_message(String)"
});
formatter.result({
  "duration": 1046666200,
  "status": "passed"
});
formatter.after({
  "duration": 782613700,
  "status": "passed"
});
formatter.before({
  "duration": 12284131100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1015898500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify Register functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-register-functionality;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User goes to the Register tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"blank\" , \"blank\" , \"blank\" in the fields",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User gets a \"The email address you entered is not valid.\" conformation message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_goes_to_the_Register_tab()"
});
formatter.result({
  "duration": 1112075600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blank",
      "offset": 13
    },
    {
      "val": "blank",
      "offset": 23
    },
    {
      "val": "blank",
      "offset": 33
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String,String)"
});
formatter.result({
  "duration": 1409505800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 3996664900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The email address you entered is not valid.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_conformation_message(String)"
});
formatter.result({
  "duration": 1049750700,
  "status": "passed"
});
formatter.after({
  "duration": 778866700,
  "status": "passed"
});
formatter.before({
  "duration": 12662780700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1005392500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify Register functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-register-functionality;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User goes to the Register tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters \"6845834\" , \"Sanchi\" , \"Gupta\" in the fields",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User gets a \"The email address you entered is not valid.\" conformation message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_goes_to_the_Register_tab()"
});
formatter.result({
  "duration": 1132546900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6845834",
      "offset": 13
    },
    {
      "val": "Sanchi",
      "offset": 25
    },
    {
      "val": "Gupta",
      "offset": 36
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String,String)"
});
formatter.result({
  "duration": 1408735000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 3714930900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The email address you entered is not valid.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_conformation_message(String)"
});
formatter.result({
  "duration": 1052616700,
  "status": "passed"
});
formatter.after({
  "duration": 906714100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Verify Login functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User enters \"\u003cuserName\u003e\" , \"\u003cpassword\u003e\" in the fields",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User \"\u003clogin\u003e\" confirmation message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-login-functionality;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "login"
      ],
      "line": 33,
      "id": "verify-register-and-login-functionality;verify-login-functionality;;1"
    },
    {
      "cells": [
        "admin",
        "admin@123",
        "Dashboard"
      ],
      "line": 34,
      "id": "verify-register-and-login-functionality;verify-login-functionality;;2"
    },
    {
      "cells": [
        "!@$%^",
        "hdgfh",
        "We don\u0027t have any users with that email address. Maybe you used a different one when signing up?"
      ],
      "line": 35,
      "id": "verify-register-and-login-functionality;verify-login-functionality;;3"
    },
    {
      "cells": [
        "12345",
        "hdgfh",
        "We don\u0027t have any users with that email address. Maybe you used a different one when signing up?"
      ],
      "line": 36,
      "id": "verify-register-and-login-functionality;verify-login-functionality;;4"
    },
    {
      "cells": [
        "blank",
        "hdgfh",
        "You do have an email address, right?"
      ],
      "line": 37,
      "id": "verify-register-and-login-functionality;verify-login-functionality;;5"
    },
    {
      "cells": [
        "admin",
        "!$^\u0026",
        "The password you entered wasn\u0027t quite right. Did you forget your password?"
      ],
      "line": 38,
      "id": "verify-register-and-login-functionality;verify-login-functionality;;6"
    },
    {
      "cells": [
        "admin",
        "1234",
        "The password you entered wasn\u0027t quite right. Did you forget your password?"
      ],
      "line": 39,
      "id": "verify-register-and-login-functionality;verify-login-functionality;;7"
    },
    {
      "cells": [
        "admin",
        "blank",
        "You need to enter a password to login."
      ],
      "line": 40,
      "id": "verify-register-and-login-functionality;verify-login-functionality;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12437337000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1006570200,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify Login functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User enters \"admin\" , \"admin@123\" in the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User \"Dashboard\" confirmation message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "admin@123",
      "offset": 23
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String)"
});
formatter.result({
  "duration": 1283638300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 9918093000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 6
    }
  ],
  "location": "RegisterLoginClass.user_confirmation_message_is_displayed(String)"
});
formatter.result({
  "duration": 1084709100,
  "status": "passed"
});
formatter.after({
  "duration": 794411300,
  "status": "passed"
});
formatter.before({
  "duration": 13675218700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1002458000,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify Login functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User enters \"!@$%^\" , \"hdgfh\" in the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User \"We don\u0027t have any users with that email address. Maybe you used a different one when signing up?\" confirmation message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "!@$%^",
      "offset": 13
    },
    {
      "val": "hdgfh",
      "offset": 23
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String)"
});
formatter.result({
  "duration": 1280426000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3913692500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We don\u0027t have any users with that email address. Maybe you used a different one when signing up?",
      "offset": 6
    }
  ],
  "location": "RegisterLoginClass.user_confirmation_message_is_displayed(String)"
});
formatter.result({
  "duration": 1043543500,
  "status": "passed"
});
formatter.after({
  "duration": 800141000,
  "status": "passed"
});
formatter.before({
  "duration": 11817577000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1014485100,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify Login functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User enters \"12345\" , \"hdgfh\" in the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User \"We don\u0027t have any users with that email address. Maybe you used a different one when signing up?\" confirmation message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 13
    },
    {
      "val": "hdgfh",
      "offset": 23
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String)"
});
formatter.result({
  "duration": 1229611400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 2742432100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We don\u0027t have any users with that email address. Maybe you used a different one when signing up?",
      "offset": 6
    }
  ],
  "location": "RegisterLoginClass.user_confirmation_message_is_displayed(String)"
});
formatter.result({
  "duration": 1049146100,
  "status": "passed"
});
formatter.after({
  "duration": 748345500,
  "status": "passed"
});
formatter.before({
  "duration": 12972819700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1004264300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify Login functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-login-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User enters \"blank\" , \"hdgfh\" in the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User \"You do have an email address, right?\" confirmation message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "blank",
      "offset": 13
    },
    {
      "val": "hdgfh",
      "offset": 23
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String)"
});
formatter.result({
  "duration": 1268309800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3787598400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You do have an email address, right?",
      "offset": 6
    }
  ],
  "location": "RegisterLoginClass.user_confirmation_message_is_displayed(String)"
});
formatter.result({
  "duration": 1046500700,
  "status": "passed"
});
formatter.after({
  "duration": 824549700,
  "status": "passed"
});
formatter.before({
  "duration": 11332080300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1017421500,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify Login functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-login-functionality;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User enters \"admin\" , \"!$^\u0026\" in the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User \"The password you entered wasn\u0027t quite right. Did you forget your password?\" confirmation message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "!$^\u0026",
      "offset": 23
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String)"
});
formatter.result({
  "duration": 1221668500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3752951300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The password you entered wasn\u0027t quite right. Did you forget your password?",
      "offset": 6
    }
  ],
  "location": "RegisterLoginClass.user_confirmation_message_is_displayed(String)"
});
formatter.result({
  "duration": 1054546800,
  "status": "passed"
});
formatter.after({
  "duration": 763821700,
  "status": "passed"
});
formatter.before({
  "duration": 13994874100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1016334000,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify Login functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-login-functionality;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User enters \"admin\" , \"1234\" in the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User \"The password you entered wasn\u0027t quite right. Did you forget your password?\" confirmation message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "1234",
      "offset": 23
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String)"
});
formatter.result({
  "duration": 1262387700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3901616900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The password you entered wasn\u0027t quite right. Did you forget your password?",
      "offset": 6
    }
  ],
  "location": "RegisterLoginClass.user_confirmation_message_is_displayed(String)"
});
formatter.result({
  "duration": 1040488800,
  "status": "passed"
});
formatter.after({
  "duration": 869815100,
  "status": "passed"
});
formatter.before({
  "duration": 12604972400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1003473900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verify Login functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-login-functionality;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User enters \"admin\" , \"blank\" in the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User \"You need to enter a password to login.\" confirmation message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "blank",
      "offset": 23
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_fields(String,String)"
});
formatter.result({
  "duration": 1283318300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 2815216500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need to enter a password to login.",
      "offset": 6
    }
  ],
  "location": "RegisterLoginClass.user_confirmation_message_is_displayed(String)"
});
formatter.result({
  "duration": 1045491000,
  "status": "passed"
});
formatter.after({
  "duration": 749103300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Verify Logout functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-logout-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@logout"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "User enters \"\u003cuserName\u003e\" , \"\u003cpassword\u003e\" to login",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User hovers on Profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User clicks on Log Out option",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User gets back to the Login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-logout-functionality;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 51,
      "id": "verify-register-and-login-functionality;verify-logout-functionality;;1"
    },
    {
      "cells": [
        "admin",
        "admin@123"
      ],
      "line": 52,
      "id": "verify-register-and-login-functionality;verify-logout-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12489760100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1006079400,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Verify Logout functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-logout-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@logout"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "User enters \"admin\" , \"admin@123\" to login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User hovers on Profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User clicks on Log Out option",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User gets back to the Login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "admin@123",
      "offset": 23
    }
  ],
  "location": "RegisterLoginClass.user_enters_to_login(String,String)"
});
formatter.result({
  "duration": 1272506700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 10049792800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_hovers_on_Profile_icon()"
});
formatter.result({
  "duration": 1082586800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Log_Out_option()"
});
formatter.result({
  "duration": 4747082800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_the_Login_page()"
});
formatter.result({
  "duration": 1019076500,
  "status": "passed"
});
formatter.after({
  "duration": 746736100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "Verify Forget Password functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-forget-password-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@forgetpassword"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "User clicks on Lost Your Password link",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "User gets to a Lost Password page",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User enters \"\u003cemail\u003e\" in the field",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User clicks on Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User gets a \"\u003cconformation\u003e\" message",
  "keyword": "Then "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-forget-password-functionality;",
  "rows": [
    {
      "cells": [
        "email",
        "conformation"
      ],
      "line": 63,
      "id": "verify-register-and-login-functionality;verify-forget-password-functionality;;1"
    },
    {
      "cells": [
        "sanchi@gmail.com",
        "Password reset link has been sent to your mail id."
      ],
      "line": 64,
      "id": "verify-register-and-login-functionality;verify-forget-password-functionality;;2"
    },
    {
      "cells": [
        "sanchi",
        "Invalid password reset link."
      ],
      "line": 65,
      "id": "verify-register-and-login-functionality;verify-forget-password-functionality;;3"
    },
    {
      "cells": [
        "!@$^\u0026\u0026",
        "Invalid password reset link."
      ],
      "line": 66,
      "id": "verify-register-and-login-functionality;verify-forget-password-functionality;;4"
    },
    {
      "cells": [
        "123456",
        "Invalid password reset link."
      ],
      "line": 67,
      "id": "verify-register-and-login-functionality;verify-forget-password-functionality;;5"
    },
    {
      "cells": [
        "blank",
        "Invalid password reset link."
      ],
      "line": 68,
      "id": "verify-register-and-login-functionality;verify-forget-password-functionality;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12526180900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1016992200,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Verify Forget Password functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-forget-password-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@forgetpassword"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "User clicks on Lost Your Password link",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "User gets to a Lost Password page",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User enters \"sanchi@gmail.com\" in the field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User clicks on Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User gets a \"Password reset link has been sent to your mail id.\" message",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Lost_Your_Password_link()"
});
formatter.result({
  "duration": 2710645700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_a_Lost_Password_page()"
});
formatter.result({
  "duration": 1110571000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanchi@gmail.com",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_field(String)"
});
formatter.result({
  "duration": 1107766900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Reset_Password_button()"
});
formatter.result({
  "duration": 1931665100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password reset link has been sent to your mail id.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_message(String)"
});
formatter.result({
  "duration": 75413900,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Password reset link has been sent to your mail id.] but found [The email could not be sent.\nPossible reason: your host may have disabled the mail() function.]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_a_message(RegisterLoginClass.java:325)\r\n\tat ✽.Then User gets a \"Password reset link has been sent to your mail id.\" message(RegisterLogin.feature:60)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 762983300,
  "status": "passed"
});
formatter.before({
  "duration": 14143602300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1014644200,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Verify Forget Password functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-forget-password-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@forgetpassword"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "User clicks on Lost Your Password link",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "User gets to a Lost Password page",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User enters \"sanchi\" in the field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User clicks on Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User gets a \"Invalid password reset link.\" message",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Lost_Your_Password_link()"
});
formatter.result({
  "duration": 3257197700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_a_Lost_Password_page()"
});
formatter.result({
  "duration": 1075583600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanchi",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_field(String)"
});
formatter.result({
  "duration": 1105774300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Reset_Password_button()"
});
formatter.result({
  "duration": 3905901300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid password reset link.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_message(String)"
});
formatter.result({
  "duration": 1083879700,
  "status": "passed"
});
formatter.after({
  "duration": 782049600,
  "status": "passed"
});
formatter.before({
  "duration": 15106378100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1014477200,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Verify Forget Password functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-forget-password-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@forgetpassword"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "User clicks on Lost Your Password link",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "User gets to a Lost Password page",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User enters \"!@$^\u0026\u0026\" in the field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User clicks on Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User gets a \"Invalid password reset link.\" message",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Lost_Your_Password_link()"
});
formatter.result({
  "duration": 3897046500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_a_Lost_Password_page()"
});
formatter.result({
  "duration": 1062214300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "!@$^\u0026\u0026",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_field(String)"
});
formatter.result({
  "duration": 1122719900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Reset_Password_button()"
});
formatter.result({
  "duration": 2571031700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid password reset link.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_message(String)"
});
formatter.result({
  "duration": 1079996300,
  "status": "passed"
});
formatter.after({
  "duration": 793076800,
  "status": "passed"
});
formatter.before({
  "duration": 11412937900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1002860100,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Verify Forget Password functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-forget-password-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@forgetpassword"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "User clicks on Lost Your Password link",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "User gets to a Lost Password page",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User enters \"123456\" in the field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User clicks on Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User gets a \"Invalid password reset link.\" message",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Lost_Your_Password_link()"
});
formatter.result({
  "duration": 4028657100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_a_Lost_Password_page()"
});
formatter.result({
  "duration": 1074171000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_field(String)"
});
formatter.result({
  "duration": 1118474000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Reset_Password_button()"
});
formatter.result({
  "duration": 2588718800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid password reset link.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_message(String)"
});
formatter.result({
  "duration": 1053861200,
  "status": "passed"
});
formatter.after({
  "duration": 774050800,
  "status": "passed"
});
formatter.before({
  "duration": 13018747900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1004440400,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Verify Forget Password functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-forget-password-functionality;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@forgetpassword"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "User clicks on Lost Your Password link",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "User gets to a Lost Password page",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User enters \"blank\" in the field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User clicks on Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User gets a \"Invalid password reset link.\" message",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Lost_Your_Password_link()"
});
formatter.result({
  "duration": 2834330900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_a_Lost_Password_page()"
});
formatter.result({
  "duration": 1074601500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blank",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_field(String)"
});
formatter.result({
  "duration": 1101607800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Reset_Password_button()"
});
formatter.result({
  "duration": 2557575700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid password reset link.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_message(String)"
});
formatter.result({
  "duration": 1084962800,
  "status": "passed"
});
formatter.after({
  "duration": 796110100,
  "status": "passed"
});
formatter.before({
  "duration": 14057394600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1009667600,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Verify Real Estate link on top of website",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-real-estate-link-on-top-of-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 70,
      "name": "@realestate"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "User clicks on the Real Estate link",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "User sees a Search bar",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "User sees Featured Properties",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "User sees Realty, Home Loan, Interiors and Legal icons",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "User sees Listings For Sale, Clients, Builders and Conversion information",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User sees Comments of clients",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "User clicks on Arrow",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User sees next comments",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "User sees Realty News and Articles",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "User clicks on Arrow in that section",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User sees next articles",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_the_Real_Estate_link()"
});
formatter.result({
  "duration": 5645538400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_sees_a_Search_bar()"
});
formatter.result({
  "duration": 1074942400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_sees_Featured_Properties()"
});
formatter.result({
  "duration": 1059572200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_sees_Realty_Home_Loan_Interiors_and_Legal_icons()"
});
formatter.result({
  "duration": 1204635200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_sees_Listings_For_Sale_Clients_Builders_and_Conversion_information()"
});
formatter.result({
  "duration": 1206550300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_sees_Comments_of_clients()"
});
formatter.result({
  "duration": 1064953700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Arrow()"
});
formatter.result({
  "duration": 1141981100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_sees_next_comments()"
});
formatter.result({
  "duration": 1091257600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_sees_Realty_News_and_Articles()"
});
formatter.result({
  "duration": 1072727700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Arrow_in_that_section()"
});
formatter.result({
  "duration": 1135864900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_sees_next_articles()"
});
formatter.result({
  "duration": 86356800,
  "status": "passed"
});
formatter.after({
  "duration": 788913700,
  "status": "passed"
});
formatter.before({
  "duration": 14631133400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1008041400,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Verify links in Real Estate link on top of website",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-links-in-real-estate-link-on-top-of-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@relinks"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "User goes to Real Estate page",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "User clicks on Realty icon",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User gets to Realty Website",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "User gets back to Real Estate website",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "User clicks on Home Loan icon",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "User gets to Home Loan Website",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "User gets back to Real Estate website",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "User clicks on Interiors icon",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User gets to Interiors Website",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "User gets back to Real Estate website",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "User clicks on Legal icon",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User gets to Legal Website",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "User gets back to Real Estate website",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "User clicks on Browse Properties link",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User gets a list of properties",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "User gets back to main website",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "User hovers to the Property Management picture",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "User clicks on the Share Details link",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "User gets to a Contact Us Page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_goes_to_Real_Estate_page()"
});
formatter.result({
  "duration": 5696754400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Realty_icon()"
});
formatter.result({
  "duration": 1408273300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Realty_Website()"
});
formatter.result({
  "duration": 3851246500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_Real_Estate_website()"
});
formatter.result({
  "duration": 1069848000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Home_Loan_icon()"
});
formatter.result({
  "duration": 1379146700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Home_Loan_Website()"
});
formatter.result({
  "duration": 1559531300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_Real_Estate_website()"
});
formatter.result({
  "duration": 1053257400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Interiors_icon()"
});
formatter.result({
  "duration": 1364218200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Interiors_Website()"
});
formatter.result({
  "duration": 2953584900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_Real_Estate_website()"
});
formatter.result({
  "duration": 1073917500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Legal_icon()"
});
formatter.result({
  "duration": 1360852500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Legal_Website()"
});
formatter.result({
  "duration": 1052715100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_Real_Estate_website()"
});
formatter.result({
  "duration": 1043709200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Browse_Properties_link()"
});
formatter.result({
  "duration": 2130724500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_a_list_of_properties()"
});
formatter.result({
  "duration": 1012101700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_main_website()"
});
formatter.result({
  "duration": 3342173200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_hovers_to_the_Property_Management_picture()"
});
formatter.result({
  "duration": 1043392200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_the_Share_Details_link()"
});
formatter.result({
  "duration": 3908663000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_a_Contact_Us_Page()"
});
formatter.result({
  "duration": 11090800,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Browse Properties – Real Estate] but found [Page not found – Real Estate]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_to_a_Contact_Us_Page(RegisterLoginClass.java:755)\r\n\tat ✽.Then User gets to a Contact Us Page(RegisterLogin.feature:104)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 828374900,
  "status": "passed"
});
formatter.before({
  "duration": 12405306000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1003381500,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 106,
      "name": "@contactus"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "User finds an office address with a map",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "User finds phone number, web and email address",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "User clicks on Web link",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "User gets more information",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "User gets back to contact page",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "User clicks on email address link",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "User is able to send an email",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "duration": 3016673800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_finds_an_office_address_with_a_map()"
});
formatter.result({
  "duration": 1134528000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_finds_phone_number_web_and_email_address()"
});
formatter.result({
  "duration": 1211517600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Web_link()"
});
formatter.result({
  "duration": 1574338900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_more_information()"
});
formatter.result({
  "duration": 1009695600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_contact_page()"
});
formatter.result({
  "duration": 2991649600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_email_address_link()"
});
formatter.result({
  "duration": 1449644700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_is_able_to_send_an_email()"
});
formatter.result({
  "duration": 13727600,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Web Link – Real Estate] but found [realestate.ohbreaks.com],\n\texpected [Email – Real Estate] but found [realestate.ohbreaks.com]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_is_able_to_send_an_email(RegisterLoginClass.java:865)\r\n\tat ✽.Then User is able to send an email(RegisterLogin.feature:115)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 869042900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 118,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@contactform"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "User enters \"\u003cname\u003e\" , \"\u003cemail\u003e\" , \"\u003csubject\u003e\" , \"\u003cmessage\u003e\" in the contact form",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "User clicks on Send button",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User gets a \"\u003cconformation\u003e\" for sending message",
  "keyword": "And "
});
formatter.examples({
  "line": 124,
  "name": "",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "subject",
        "message",
        "conformation"
      ],
      "line": 125,
      "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;1"
    },
    {
      "cells": [
        "Sanchi",
        "sanchi@gmail.com",
        "More Information Needed",
        "I want more information.",
        "Your message has been sent successfully."
      ],
      "line": 126,
      "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;2"
    },
    {
      "cells": [
        "blank",
        "sanchi@gmail.com",
        "More Information Needed",
        "I want more information.",
        "One or more fields have an error. Please check and try again."
      ],
      "line": 127,
      "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;3"
    },
    {
      "cells": [
        "!@$%\u0026",
        "sanchi@gmail.com",
        "More Information Needed",
        "I want more information.",
        "Some field has an error. Please check and try again."
      ],
      "line": 128,
      "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;4"
    },
    {
      "cells": [
        "Sanc123",
        "sanchi@gmail.com",
        "More Information Needed",
        "I want more information.",
        "Some field has an error. Please check and try again."
      ],
      "line": 129,
      "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;5"
    },
    {
      "cells": [
        "Sanchi",
        "blank",
        "More Information Needed",
        "I want more information.",
        "One or more fields have an error. Please check and try again."
      ],
      "line": 130,
      "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;6"
    },
    {
      "cells": [
        "Sanchi",
        "sanchi123",
        "More Information Needed",
        "I want more information.",
        "One or more fields have an error. Please check and try again."
      ],
      "line": 131,
      "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;7"
    },
    {
      "cells": [
        "Sanchi",
        "!@$%\u0026^",
        "More Information Needed",
        "I want more information.",
        "One or more fields have an error. Please check and try again."
      ],
      "line": 132,
      "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;8"
    },
    {
      "cells": [
        "Sanchi",
        "sanchi@gmail.com",
        "blank",
        "I want more information.",
        "One or more fields have an error. Please check and try again."
      ],
      "line": 133,
      "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;9"
    },
    {
      "cells": [
        "Sanchi",
        "sanchi@gmail.com",
        "!@$%^",
        "I want more information.",
        "Some field has an error. Please check and try again."
      ],
      "line": 134,
      "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;10"
    },
    {
      "cells": [
        "Sanchi",
        "sanchi@gmail.com",
        "More Information Needed",
        "!@%^\u0026",
        "Some field has an error. Please check and try again."
      ],
      "line": 135,
      "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;11"
    },
    {
      "cells": [
        "Sanchi",
        "sanchi@gmail.com",
        "More Information Needed",
        "blank",
        "One or more fields have an error. Please check and try again."
      ],
      "line": 136,
      "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;12"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11855336000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1002261300,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@contactform"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "User enters \"Sanchi\" , \"sanchi@gmail.com\" , \"More Information Needed\" , \"I want more information.\" in the contact form",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "User clicks on Send button",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User gets a \"Your message has been sent successfully.\" for sending message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "duration": 3472243400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanchi",
      "offset": 13
    },
    {
      "val": "sanchi@gmail.com",
      "offset": 24
    },
    {
      "val": "More Information Needed",
      "offset": 45
    },
    {
      "val": "I want more information.",
      "offset": 73
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_contact_form(String,String,String,String)"
});
formatter.result({
  "duration": 1668898900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Send_button()"
});
formatter.result({
  "duration": 1109486400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your message has been sent successfully.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_for_sending_message(String)"
});
formatter.result({
  "duration": 38466100,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Your message has been sent successfully.] but found []\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_a_for_sending_message(RegisterLoginClass.java:935)\r\n\tat ✽.And User gets a \"Your message has been sent successfully.\" for sending message(RegisterLogin.feature:122)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1004401900,
  "status": "passed"
});
formatter.before({
  "duration": 301497732900,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 296.760\n  (Session info: chrome\u003d94.0.4606.81)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-UC8HMKC\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.81, chrome: {chromedriverVersion: 94.0.4606.41 (333e85df3c9b6..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63687}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 332801fdf8c4f8e8f57573c846c27adb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat hooks.Hooks.initialization(Hooks.java:15)\r\n\tat sun.reflect.GeneratedMethodAccessor14.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 127,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@contactform"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "User enters \"blank\" , \"sanchi@gmail.com\" , \"More Information Needed\" , \"I want more information.\" in the contact form",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "User clicks on Send button",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User gets a \"One or more fields have an error. Please check and try again.\" for sending message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "blank",
      "offset": 13
    },
    {
      "val": "sanchi@gmail.com",
      "offset": 23
    },
    {
      "val": "More Information Needed",
      "offset": 44
    },
    {
      "val": "I want more information.",
      "offset": 72
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_contact_form(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Send_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more fields have an error. Please check and try again.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_for_sending_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 764265900,
  "status": "passed"
});
formatter.before({
  "duration": 19928412700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1013298700,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@contactform"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "User enters \"!@$%\u0026\" , \"sanchi@gmail.com\" , \"More Information Needed\" , \"I want more information.\" in the contact form",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "User clicks on Send button",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User gets a \"Some field has an error. Please check and try again.\" for sending message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "duration": 4000961700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "!@$%\u0026",
      "offset": 13
    },
    {
      "val": "sanchi@gmail.com",
      "offset": 23
    },
    {
      "val": "More Information Needed",
      "offset": 44
    },
    {
      "val": "I want more information.",
      "offset": 72
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_contact_form(String,String,String,String)"
});
formatter.result({
  "duration": 1789987800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Send_button()"
});
formatter.result({
  "duration": 1141428800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some field has an error. Please check and try again.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_for_sending_message(String)"
});
formatter.result({
  "duration": 64485000,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Some field has an error. Please check and try again.] but found [There was an error trying to send your message. Please try again later.]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_a_for_sending_message(RegisterLoginClass.java:935)\r\n\tat ✽.And User gets a \"Some field has an error. Please check and try again.\" for sending message(RegisterLogin.feature:122)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3020381000,
  "status": "passed"
});
formatter.before({
  "duration": 19601996600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1004763000,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@contactform"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "User enters \"Sanc123\" , \"sanchi@gmail.com\" , \"More Information Needed\" , \"I want more information.\" in the contact form",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "User clicks on Send button",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User gets a \"Some field has an error. Please check and try again.\" for sending message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "duration": 11215721400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanc123",
      "offset": 13
    },
    {
      "val": "sanchi@gmail.com",
      "offset": 25
    },
    {
      "val": "More Information Needed",
      "offset": 46
    },
    {
      "val": "I want more information.",
      "offset": 74
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_contact_form(String,String,String,String)"
});
formatter.result({
  "duration": 1557298800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Send_button()"
});
formatter.result({
  "duration": 1156016400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some field has an error. Please check and try again.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_for_sending_message(String)"
});
formatter.result({
  "duration": 42218800,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Some field has an error. Please check and try again.] but found []\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_a_for_sending_message(RegisterLoginClass.java:935)\r\n\tat ✽.And User gets a \"Some field has an error. Please check and try again.\" for sending message(RegisterLogin.feature:122)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4051075000,
  "status": "passed"
});
formatter.before({
  "duration": 24186495400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1015494900,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@contactform"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "User enters \"Sanchi\" , \"blank\" , \"More Information Needed\" , \"I want more information.\" in the contact form",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "User clicks on Send button",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User gets a \"One or more fields have an error. Please check and try again.\" for sending message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "duration": 3688928900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanchi",
      "offset": 13
    },
    {
      "val": "blank",
      "offset": 24
    },
    {
      "val": "More Information Needed",
      "offset": 34
    },
    {
      "val": "I want more information.",
      "offset": 62
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_contact_form(String,String,String,String)"
});
formatter.result({
  "duration": 1495268600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Send_button()"
});
formatter.result({
  "duration": 1248518700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more fields have an error. Please check and try again.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_for_sending_message(String)"
});
formatter.result({
  "duration": 75500300,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [One or more fields have an error. Please check and try again.] but found []\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_a_for_sending_message(RegisterLoginClass.java:935)\r\n\tat ✽.And User gets a \"One or more fields have an error. Please check and try again.\" for sending message(RegisterLogin.feature:122)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5571750200,
  "status": "passed"
});
formatter.before({
  "duration": 24723405200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1005869400,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@contactform"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "User enters \"Sanchi\" , \"sanchi123\" , \"More Information Needed\" , \"I want more information.\" in the contact form",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "User clicks on Send button",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User gets a \"One or more fields have an error. Please check and try again.\" for sending message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "duration": 3536647800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanchi",
      "offset": 13
    },
    {
      "val": "sanchi123",
      "offset": 24
    },
    {
      "val": "More Information Needed",
      "offset": 38
    },
    {
      "val": "I want more information.",
      "offset": 66
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_contact_form(String,String,String,String)"
});
formatter.result({
  "duration": 1453773900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Send_button()"
});
formatter.result({
  "duration": 1136941000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more fields have an error. Please check and try again.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_for_sending_message(String)"
});
formatter.result({
  "duration": 1066309300,
  "status": "passed"
});
formatter.after({
  "duration": 4853095600,
  "status": "passed"
});
formatter.before({
  "duration": 17927948400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1015477500,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@contactform"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "User enters \"Sanchi\" , \"!@$%\u0026^\" , \"More Information Needed\" , \"I want more information.\" in the contact form",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "User clicks on Send button",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User gets a \"One or more fields have an error. Please check and try again.\" for sending message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "duration": 3442976500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanchi",
      "offset": 13
    },
    {
      "val": "!@$%\u0026^",
      "offset": 24
    },
    {
      "val": "More Information Needed",
      "offset": 35
    },
    {
      "val": "I want more information.",
      "offset": 63
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_contact_form(String,String,String,String)"
});
formatter.result({
  "duration": 1629196900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Send_button()"
});
formatter.result({
  "duration": 1136441000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more fields have an error. Please check and try again.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_for_sending_message(String)"
});
formatter.result({
  "duration": 79086300,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [One or more fields have an error. Please check and try again.] but found []\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_a_for_sending_message(RegisterLoginClass.java:935)\r\n\tat ✽.And User gets a \"One or more fields have an error. Please check and try again.\" for sending message(RegisterLogin.feature:122)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 929841800,
  "status": "passed"
});
formatter.before({
  "duration": 15102165300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1011999100,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@contactform"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "User enters \"Sanchi\" , \"sanchi@gmail.com\" , \"blank\" , \"I want more information.\" in the contact form",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "User clicks on Send button",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User gets a \"One or more fields have an error. Please check and try again.\" for sending message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "duration": 3455384500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanchi",
      "offset": 13
    },
    {
      "val": "sanchi@gmail.com",
      "offset": 24
    },
    {
      "val": "blank",
      "offset": 45
    },
    {
      "val": "I want more information.",
      "offset": 55
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_contact_form(String,String,String,String)"
});
formatter.result({
  "duration": 1553932200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Send_button()"
});
formatter.result({
  "duration": 1131978000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more fields have an error. Please check and try again.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_for_sending_message(String)"
});
formatter.result({
  "duration": 1071107200,
  "status": "passed"
});
formatter.after({
  "duration": 3294624900,
  "status": "passed"
});
formatter.before({
  "duration": 17670607500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1009665400,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@contactform"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "User enters \"Sanchi\" , \"sanchi@gmail.com\" , \"!@$%^\" , \"I want more information.\" in the contact form",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "User clicks on Send button",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User gets a \"Some field has an error. Please check and try again.\" for sending message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "duration": 3906670600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanchi",
      "offset": 13
    },
    {
      "val": "sanchi@gmail.com",
      "offset": 24
    },
    {
      "val": "!@$%^",
      "offset": 45
    },
    {
      "val": "I want more information.",
      "offset": 55
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_contact_form(String,String,String,String)"
});
formatter.result({
  "duration": 1580388700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Send_button()"
});
formatter.result({
  "duration": 1151440400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some field has an error. Please check and try again.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_for_sending_message(String)"
});
formatter.result({
  "duration": 55653700,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Some field has an error. Please check and try again.] but found [There was an error trying to send your message. Please try again later.]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_a_for_sending_message(RegisterLoginClass.java:935)\r\n\tat ✽.And User gets a \"Some field has an error. Please check and try again.\" for sending message(RegisterLogin.feature:122)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3672962200,
  "status": "passed"
});
formatter.before({
  "duration": 15768469900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1007710000,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@contactform"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "User enters \"Sanchi\" , \"sanchi@gmail.com\" , \"More Information Needed\" , \"!@%^\u0026\" in the contact form",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "User clicks on Send button",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User gets a \"Some field has an error. Please check and try again.\" for sending message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "duration": 4439997800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanchi",
      "offset": 13
    },
    {
      "val": "sanchi@gmail.com",
      "offset": 24
    },
    {
      "val": "More Information Needed",
      "offset": 45
    },
    {
      "val": "!@%^\u0026",
      "offset": 73
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_contact_form(String,String,String,String)"
});
formatter.result({
  "duration": 1624058100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Send_button()"
});
formatter.result({
  "duration": 1152137400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some field has an error. Please check and try again.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_for_sending_message(String)"
});
formatter.result({
  "duration": 57054000,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Some field has an error. Please check and try again.] but found [There was an error trying to send your message. Please try again later.]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_a_for_sending_message(RegisterLoginClass.java:935)\r\n\tat ✽.And User gets a \"Some field has an error. Please check and try again.\" for sending message(RegisterLogin.feature:122)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1821656800,
  "status": "passed"
});
formatter.before({
  "duration": 14316679300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1008050300,
  "status": "passed"
});
formatter.scenario({
  "line": 136,
  "name": "Verify Contact Us functionality",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-contact-us-functionality;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@contactform"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "User clicks on Contact Us link",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "User enters \"Sanchi\" , \"sanchi@gmail.com\" , \"More Information Needed\" , \"blank\" in the contact form",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "User clicks on Send button",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "User gets a \"One or more fields have an error. Please check and try again.\" for sending message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "duration": 3331197900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanchi",
      "offset": 13
    },
    {
      "val": "sanchi@gmail.com",
      "offset": 24
    },
    {
      "val": "More Information Needed",
      "offset": 45
    },
    {
      "val": "blank",
      "offset": 73
    }
  ],
  "location": "RegisterLoginClass.user_enters_in_the_contact_form(String,String,String,String)"
});
formatter.result({
  "duration": 1753718300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Send_button()"
});
formatter.result({
  "duration": 1116859400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One or more fields have an error. Please check and try again.",
      "offset": 13
    }
  ],
  "location": "RegisterLoginClass.user_gets_a_for_sending_message(String)"
});
formatter.result({
  "duration": 50808500,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [One or more fields have an error. Please check and try again.] but found [There was an error trying to send your message. Please try again later.]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_a_for_sending_message(RegisterLoginClass.java:935)\r\n\tat ✽.And User gets a \"One or more fields have an error. Please check and try again.\" for sending message(RegisterLogin.feature:122)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1869631500,
  "status": "passed"
});
formatter.before({
  "duration": 17765953400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1013464000,
  "status": "passed"
});
formatter.scenario({
  "line": 139,
  "name": "Verify links located at top of the website",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-links-located-at-top-of-the-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 138,
      "name": "@toplinks"
    }
  ]
});
formatter.step({
  "line": 140,
  "name": "User finds a phone number and email address",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "User clicks on Facebook icon",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "User gets to Facebook login page",
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "User gets back to main website",
  "keyword": "When "
});
formatter.step({
  "line": 144,
  "name": "User clicks on Twitter icon",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "User gets to Twitter login page",
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "User gets back to main website",
  "keyword": "When "
});
formatter.step({
  "line": 147,
  "name": "User clicks on Google+ icon",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "User gets to Google+ login page",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "User clicks on Wifi icon",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "User gets to Wifi login page",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "User gets back to main website",
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "User clicks on Invest In Overseas link",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "User gets to Invest In Overseas page",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "User gets back to Real Estate website",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "User clicks on Blogs link",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "User gets to Blogs page",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "User finds latest news and blogs",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLoginClass.user_finds_a_phone_number_and_email_address()"
});
formatter.result({
  "duration": 1139709700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Facebook_icon()"
});
formatter.result({
  "duration": 4469008700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Facebook_login_page()"
});
formatter.result({
  "duration": 1011208400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_main_website()"
});
formatter.result({
  "duration": 2548673100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Twitter_icon()"
});
formatter.result({
  "duration": 2890078400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Twitter_login_page()"
});
formatter.result({
  "duration": 1006498900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_main_website()"
});
formatter.result({
  "duration": 5820003000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Google_icon()"
});
formatter.result({
  "duration": 2723975200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Google_login_page()"
});
formatter.result({
  "duration": 1015719200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Wifi_icon()"
});
formatter.result({
  "duration": 4450343600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Wifi_login_page()"
});
formatter.result({
  "duration": 1025335100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_main_website()"
});
formatter.result({
  "duration": 5496733600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Invest_In_Overseas_link()"
});
formatter.result({
  "duration": 3541274000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Invest_In_Overseas_page()"
});
formatter.result({
  "duration": 1023127900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_Real_Estate_website()"
});
formatter.result({
  "duration": 1233359500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Blogs_link()"
});
formatter.result({
  "duration": 3582814800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Blogs_page()"
});
formatter.result({
  "duration": 1023558800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_finds_latest_news_and_blogs()"
});
formatter.result({
  "duration": 1152054200,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Google+] but found [My Profile – Real Estate],\n\texpected [Real Estate] but found [realestate.ohbreaks.com]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_finds_latest_news_and_blogs(RegisterLoginClass.java:1127)\r\n\tat ✽.And User finds latest news and blogs(RegisterLogin.feature:157)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4096007800,
  "status": "passed"
});
formatter.before({
  "duration": 17389052200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Verify Real Estate Site functionalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Real Estate Website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterLoginClass.user_is_on_the_Real_Estate_Website()"
});
formatter.result({
  "duration": 1006474700,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "Verify links located at bottom of the website",
  "description": "",
  "id": "verify-register-and-login-functionality;verify-links-located-at-bottom-of-the-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 159,
      "name": "@bottomlinks"
    }
  ]
});
formatter.step({
  "line": 161,
  "name": "User finds address, phone number and email address",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "User clicks on About Us link",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User gets to About Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 164,
  "name": "User gets back to main website",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "User clicks on Contact Us link",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "User gets to Contact Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "User gets back to main website",
  "keyword": "When "
});
formatter.step({
  "line": 168,
  "name": "User clicks on Blogs link",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "User gets to Blogs page",
  "keyword": "Then "
});
formatter.step({
  "line": 170,
  "name": "User gets back to main website",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "User clicks on Compare Properties link",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "User gets to Compare Properties page",
  "keyword": "Then "
});
formatter.step({
  "line": 173,
  "name": "User gets back to main website",
  "keyword": "When "
});
formatter.step({
  "line": 174,
  "name": "User clicks on Facebook icon at page\u0027s bottom",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "User gets to Facebook login page",
  "keyword": "Then "
});
formatter.step({
  "line": 176,
  "name": "User gets back to Real Estate website",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "User clicks on Twitter icon at page\u0027s bottom",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "User gets to Twitter login page",
  "keyword": "Then "
});
formatter.step({
  "line": 179,
  "name": "User gets back to Real Estate website",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "User clicks on Google+ icon at page\u0027s bottom",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "User gets to Google+ login page",
  "keyword": "Then "
});
formatter.step({
  "line": 182,
  "name": "User gets back to Real Estate website",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "User clicks on Wifi icon at page\u0027s bottom",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "User gets to that page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterLoginClass.user_finds_address_phone_number_and_email_address()"
});
formatter.result({
  "duration": 1186562300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_About_Us_link()"
});
formatter.result({
  "duration": 3717813700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_About_Us_page()"
});
formatter.result({
  "duration": 1024653000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_main_website()"
});
formatter.result({
  "duration": 1293559600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Contact_Us_link()"
});
formatter.result({
  "duration": 2713408900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Contact_Us_page()"
});
formatter.result({
  "duration": 1016239600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_main_website()"
});
formatter.result({
  "duration": 1348391200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Blogs_link()"
});
formatter.result({
  "duration": 2259070400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Blogs_page()"
});
formatter.result({
  "duration": 1009005300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_main_website()"
});
formatter.result({
  "duration": 1228904400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Compare_Properties_link()"
});
formatter.result({
  "duration": 4122796900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Compare_Properties_page()"
});
formatter.result({
  "duration": 1024061200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_main_website()"
});
formatter.result({
  "duration": 1254184600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Facebook_icon_at_page_s_bottom()"
});
formatter.result({
  "duration": 1113755000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Facebook_login_page()"
});
formatter.result({
  "duration": 1008180700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_Real_Estate_website()"
});
formatter.result({
  "duration": 1045827600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Twitter_icon_at_page_s_bottom()"
});
formatter.result({
  "duration": 1081619700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Twitter_login_page()"
});
formatter.result({
  "duration": 1011155300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_Real_Estate_website()"
});
formatter.result({
  "duration": 1071024300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Google_icon_at_page_s_bottom()"
});
formatter.result({
  "duration": 1317774000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_Google_login_page()"
});
formatter.result({
  "duration": 1009432400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_back_to_Real_Estate_website()"
});
formatter.result({
  "duration": 1035648500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_clicks_on_Wifi_icon_at_page_s_bottom()"
});
formatter.result({
  "duration": 1094094700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLoginClass.user_gets_to_that_page()"
});
formatter.result({
  "duration": 1025413600,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Facebook – log in or sign up] but found [My Profile – Real Estate],\n\texpected [Twitter] but found [My Profile – Real Estate],\n\texpected [Google+] but found [My Profile – Real Estate],\n\texpected [More Information] but found [My Profile – Real Estate]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat stepdefinitionpackage.RegisterLoginClass.user_gets_to_that_page(RegisterLoginClass.java:1275)\r\n\tat ✽.Then User gets to that page(RegisterLogin.feature:184)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4308245800,
  "status": "passed"
});
});