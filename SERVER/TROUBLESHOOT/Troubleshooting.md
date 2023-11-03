# SERVER TROUBLESHOOTING STEPS
-------------------------------
1. Make sure you cd into the "SERVER" folder --> then 'npm start'


# POSTMAN TROUBLESHOOTING STEPS
-------------------------------
1. Make sure the server is running (npm start)
2. Check the port number in the postman route and make sure it matches the express server port number in 'server.js'
3. Check postman route - ex: if you're trying to do shoes, make sure the route is http://localhost:3000/nike/shoes/

    - GET = nike/tableName
    - POST = nike/tableName/new
    - PUT = nike/tableName/idNumber
    - DELETE = nike/tableName/idNumber

4. If you're trying to POST or PUT check syntax in postman body (commas, quotations, colons, etc)
5. If you're trying to PUT or DELETE check if the id exists (use GET to check the database)


# POSTMAN GUIDE (PICTURE IN THIS FOLDER)
-------------------------------
# When you want to write a POST or PUT
1. Click on "body"
2. Click on "raw"
3. Change it to "JSON"
4. In the request window at the bottom change it to "JSON"
