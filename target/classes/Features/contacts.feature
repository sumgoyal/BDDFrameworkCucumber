Feature: Testing contacts Page of Cogmento

Scenario Outline: Cogmento create contacts details
Given User is already on login page
When title of login page is Cogmento CRM
Then user enters "<username>" and "<password>"
Then User clicks on Login
Then User is on homepage
Then User clicks on Contacts link
Then User clicks create button
Then user enters contacts details "<firstname>" and "<lastname>" and "<position>"
Then user click save
Then user is on contact detail page

Examples: 

	| username | | password | |firstname| | lastname| | position|
	| sumitgoel1001@gmail.com| |Sumit@1234| |RaviKumar| |Banda| |Associate|
	| sumitgoel1001@gmail.com| |Sumit@1234| |Poonam| |Bhatia| |Lead|
	| sumitgoel1001@gmail.com| |Sumit@1234| |ArunKumar| |Chandrasekran| |Team Lead|

	