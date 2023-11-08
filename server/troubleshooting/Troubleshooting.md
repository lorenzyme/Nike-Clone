# SERVER TROUBLESHOOTING STEPS
-------------------------------
1. Make sure you cd into the "server" folder --> then 'npm start'


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

# UPDATING THE DATABASE
------------------------
- If you make any changes to the schema simply run this command...
1. CD into the server folder
2. npx prisma migrate dev --name replaceThisName
3. Replace "replaceThisName" and name your migration

# Why is the "cost" column a string?
- In the schema, or when you write a postman request you'll notice "cost" is a string type
- I've tried to do an Int, but it never includes the decimals when you send a request (8.84 will just return 8)
- After extensive research I found this post and people say that using strings for prices is acceptable - just a quick easy alternative work around. I'm sure I can figure out how to do it without using a string but it's not worth the extra hassle to achieve the same result. Using a string type works perfectly fine.

https://stackoverflow.com/questions/35709595/why-would-you-use-a-string-in-json-to-represent-a-decimal-number