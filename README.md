put-network-test
================
Simple Node.js server to test Mozilla Firefox PUT networking bug [1474303](https://bugzilla.mozilla.org/show_bug.cgi?id=1474303)

Usage
-----
* Clone this repo
* Enter directory
* Start test using `node app.js`
* go to `http://localhost:5555`
* Open networking pane
* make sure that `persist logs` is active
* Press the button (without delay)
* Profit? (well the bug should present itself, try looking at the headers for the PUT request)
* Try the other button (with delay)
* The bug doesn't occur

Author
------
Emil Hemdal

Copyright/License
---------
No copyright

Unlicense/Public Domain
