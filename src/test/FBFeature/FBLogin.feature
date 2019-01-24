@two1
Feature: FbLogin Demo

  @one
  Scenario: Opening FB HomePage
    Given I'm in a Chrome Browser
    When I entered facebook
    Then open facebook HomePage
  @one
  Scenario: Opening Gmail
    Given I'm in a Chrome Browser
    When I Entered gmail
    Then open gmail

  Scenario: Opening BBC
    Given I'm in a Chrome Browser
    When I entered bbc
    Then Open bbc Homepage

  Scenario: Opening Sky
    Given I'm in a Chrome Browser
    When I Entered sky
    Then Open sky Homepage

  Scenario: Opening Cricinfo
    Given I'm in a Chrome Browser
    When I Entered cricinfo
    Then Open cricinfo




