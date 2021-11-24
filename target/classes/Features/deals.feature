Feature: Testing deal Page of Cogmento

Scenario: Cogmento create deal details
Given User is already on login page
When title of login page is Cogmento CRM
Then user enters username and password
	| sumitgoel1001@gmail.com | | Sumit@1234|

Then User clicks on Login
Then User is on homepage
Then User clicks on deals link
Then User clicks create button
Then user enters deal details 
	| Test Deal| | 1000| | 20 |

Then user click save
