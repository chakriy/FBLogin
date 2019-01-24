@two
Feature: FbLogin

  Scenario Outline: Opening Multi HomePages
    Given I'm in Chrome Browser
    When I entered "<SiteName>"
    Then open "<WebSite>" HomePage
    Examples:
      | SiteName                                         | WebSite  |
      | https://www.facebook.com/                        | Facebook |
      | https://www.google.com/intl/en-GB/gmail/about/#/ | Gmail    |
    @one1
    Examples:
      |SiteName|Website|
      | https://www.bbc.co.uk/                           | BBC      |
      | https://www.sky.com/                             | Sky      |
      | https://www.cricinfo.com/                        | cricinfo |