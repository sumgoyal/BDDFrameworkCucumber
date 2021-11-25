$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hp/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/dealMap.feature");
formatter.feature({
  "line": 1,
  "name": "Testing deal Page of Cogmento",
  "description": "",
  "id": "testing-deal-page-of-cogmento",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Cogmento create deal details",
  "description": "",
  "id": "testing-deal-page-of-cogmento;cogmento-create-deal-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "sumitgoel1001@gmail.com",
        "",
        "Sumit@1234"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on deals link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks create button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "Title",
        "",
        "Amount",
        "",
        "Commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "Test Deal00",
        "",
        "1000",
        "",
        "20"
      ],
      "line": 16
    },
    {
      "cells": [
        "Test Deal1",
        "",
        "2000",
        "",
        "30"
      ],
      "line": 17
    },
    {
      "cells": [
        "Test Deal2",
        "",
        "3000",
        "",
        "40"
      ],
      "line": 18
    },
    {
      "cells": [
        "Test Deal3",
        "",
        "4000",
        "",
        "50"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dealsstepmapDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 5402224499,
  "status": "passed"
});
formatter.match({
  "location": "dealsstepmapDefination.title_login_page()"
});
formatter.result({
  "duration": 38975300,
  "status": "passed"
});
formatter.match({
  "location": "dealsstepmapDefination.user_enters_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 3370475799,
  "status": "passed"
});
formatter.match({
  "location": "dealsstepmapDefination.user_clicks_on_Login()"
});
formatter.result({
  "duration": 44851100,
  "status": "passed"
});
formatter.match({
  "location": "dealsstepmapDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 7345701,
  "status": "passed"
});
formatter.match({
  "location": "dealsstepmapDefination.user_clicks_on_deals_link()"
});
formatter.result({
  "duration": 1951310800,
  "status": "passed"
});
formatter.match({
  "location": "dealsstepmapDefination.user_clicks_create_button()"
});
formatter.result({
  "duration": 376375301,
  "status": "passed"
});
formatter.match({
  "location": "dealsstepmapDefination.user_enters_title_amount_commission(DataTable)"
});
formatter.result({
  "duration": 14663063000,
  "status": "passed"
});
});