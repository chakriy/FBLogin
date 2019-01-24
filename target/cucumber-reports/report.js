$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Examples.feature");
formatter.feature({
  "line": 1,
  "name": "FbLogin Demo",
  "description": "",
  "id": "fblogin-demo",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Opening Multi HomePages",
  "description": "",
  "id": "fblogin-demo;opening-multi-homepages",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m in Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I entered \"\u003cSiteName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "open \"\u003cWebSite\u003e\" HomePage",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "fblogin-demo;opening-multi-homepages;",
  "rows": [
    {
      "cells": [
        "SiteName",
        "WebSite"
      ],
      "line": 8,
      "id": "fblogin-demo;opening-multi-homepages;;1"
    },
    {
      "cells": [
        "https://www.facebook.com/",
        "Facebook"
      ],
      "line": 9,
      "id": "fblogin-demo;opening-multi-homepages;;2"
    },
    {
      "cells": [
        "https://www.google.com/intl/en-GB/gmail/about/#/",
        "Gmail"
      ],
      "line": 10,
      "id": "fblogin-demo;opening-multi-homepages;;3"
    },
    {
      "cells": [
        "https://www.bbc.co.uk/",
        "BBC"
      ],
      "line": 11,
      "id": "fblogin-demo;opening-multi-homepages;;4"
    },
    {
      "cells": [
        "https://www.sky.com/",
        "Sky"
      ],
      "line": 12,
      "id": "fblogin-demo;opening-multi-homepages;;5"
    },
    {
      "cells": [
        "https://www.cricinfo.com/",
        "cricinfo"
      ],
      "line": 13,
      "id": "fblogin-demo;opening-multi-homepages;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Opening Multi HomePages",
  "description": "",
  "id": "fblogin-demo;opening-multi-homepages;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m in Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I entered \"https://www.facebook.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "open \"Facebook\" HomePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ExamplesStepDefs.step1()"
});
formatter.result({
  "duration": 12267399101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 11
    }
  ],
  "location": "ExamplesStepDefs.step2(String)"
});
formatter.result({
  "duration": 3801381073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 6
    }
  ],
  "location": "ExamplesStepDefs.step3(String)"
});
formatter.result({
  "duration": 787386810,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Opening Multi HomePages",
  "description": "",
  "id": "fblogin-demo;opening-multi-homepages;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m in Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I entered \"https://www.google.com/intl/en-GB/gmail/about/#/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "open \"Gmail\" HomePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ExamplesStepDefs.step1()"
});
formatter.result({
  "duration": 2362878254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/intl/en-GB/gmail/about/#/",
      "offset": 11
    }
  ],
  "location": "ExamplesStepDefs.step2(String)"
});
formatter.result({
  "duration": 5815235273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 6
    }
  ],
  "location": "ExamplesStepDefs.step3(String)"
});
formatter.result({
  "duration": 739048040,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Opening Multi HomePages",
  "description": "",
  "id": "fblogin-demo;opening-multi-homepages;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m in Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I entered \"https://www.bbc.co.uk/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "open \"BBC\" HomePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ExamplesStepDefs.step1()"
});
formatter.result({
  "duration": 3051087514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bbc.co.uk/",
      "offset": 11
    }
  ],
  "location": "ExamplesStepDefs.step2(String)"
});
formatter.result({
  "duration": 3579378203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BBC",
      "offset": 6
    }
  ],
  "location": "ExamplesStepDefs.step3(String)"
});
formatter.result({
  "duration": 731302294,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Opening Multi HomePages",
  "description": "",
  "id": "fblogin-demo;opening-multi-homepages;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m in Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I entered \"https://www.sky.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "open \"Sky\" HomePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ExamplesStepDefs.step1()"
});
formatter.result({
  "duration": 2612039534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.sky.com/",
      "offset": 11
    }
  ],
  "location": "ExamplesStepDefs.step2(String)"
});
formatter.result({
  "duration": 12863549894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sky",
      "offset": 6
    }
  ],
  "location": "ExamplesStepDefs.step3(String)"
});
formatter.result({
  "duration": 1220619744,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Opening Multi HomePages",
  "description": "",
  "id": "fblogin-demo;opening-multi-homepages;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m in Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I entered \"https://www.cricinfo.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "open \"cricinfo\" HomePage",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ExamplesStepDefs.step1()"
});
formatter.result({
  "duration": 3913173987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.cricinfo.com/",
      "offset": 11
    }
  ],
  "location": "ExamplesStepDefs.step2(String)"
});
formatter.result({
  "duration": 26682022926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cricinfo",
      "offset": 6
    }
  ],
  "location": "ExamplesStepDefs.step3(String)"
});
formatter.result({
  "duration": 890377465,
  "status": "passed"
});
formatter.uri("FBLogin.feature");
formatter.feature({
  "line": 1,
  "name": "FbLogin Demo",
  "description": "",
  "id": "fblogin-demo",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Opening FB HomePage",
  "description": "",
  "id": "fblogin-demo;opening-fb-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m in a Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I entered facebook",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "open facebook HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginStepDefs.step()"
});
formatter.result({
  "duration": 3664143111,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginStepDefs.facebookWhen()"
});
formatter.result({
  "duration": 3331309055,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginStepDefs.facebookThen()"
});
formatter.result({
  "duration": 694052076,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Opening Gmail",
  "description": "",
  "id": "fblogin-demo;opening-gmail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I\u0027m in a Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I Entered gmail",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "open gmail",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginStepDefs.step()"
});
formatter.result({
  "duration": 2271286463,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginStepDefs.gmailWhen()"
});
formatter.result({
  "duration": 3112823467,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginStepDefs.gmailThen()"
});
formatter.result({
  "duration": 735549474,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Opening BBC",
  "description": "",
  "id": "fblogin-demo;opening-bbc",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I\u0027m in a Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I entered bbc",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Open bbc Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginStepDefs.step()"
});
formatter.result({
  "duration": 2699384748,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginStepDefs.bbcWhen()"
});
formatter.result({
  "duration": 3330409510,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginStepDefs.bbcThen()"
});
formatter.result({
  "duration": 744336640,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Opening Sky",
  "description": "",
  "id": "fblogin-demo;opening-sky",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I\u0027m in a Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Entered sky",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Open sky Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginStepDefs.step()"
});
formatter.result({
  "duration": 2459677142,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginStepDefs.skyWhen()"
});
formatter.result({
  "duration": 5145159995,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginStepDefs.skyThen()"
});
formatter.result({
  "duration": 841099304,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Opening Cricinfo",
  "description": "",
  "id": "fblogin-demo;opening-cricinfo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I\u0027m in a Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I Entered cricinfo",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Open cricinfo",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginStepDefs.step()"
});
formatter.result({
  "duration": 2525633108,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginStepDefs.cricinfoWhen()"
});
formatter.result({
  "duration": 6363108272,
  "status": "passed"
});
formatter.match({
  "location": "FBLoginStepDefs.cricinfoThen()"
});
formatter.result({
  "duration": 1020378618,
  "status": "passed"
});
});