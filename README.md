# BriTE

BriTE (Brian's Trading Environment) is a full-stack trading infrastructure implemented using modern web technologies. Clients are HTML5 documents, regardless of device, and will download and use the libs they need for the specific tasks they perform (accounting, market monitoring, etc.).

Server (Node):
* Passport
* Express
* Socket.io / cluster / net.server
* PostgreSQL
* ? ta-lib
* ? logging

Client (Chrome):
* Angular (grid controls)
* d3
* ? site tour
* ? cookies
* ? iframes
* ? websockets
* ? system health
* Font Awesome

Other:
* jasmine / testing
* auto-doc tool
* CDN stuff

What will your MVP be?
Stubbed back-end services that mock functionality to the point that the client can be demonstrated. Client will include at least two "screens", one showing "live" market data and another plotting historical price data. This will most likely be implemented via some CSS on a grid control and a for d3.

What features will you add if you have time?
in order: live data (I think I can open a brokerage account and get it free)

simulated executions

historical research and testing
