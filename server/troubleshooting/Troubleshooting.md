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

# ADD YOUR .ENV FILE
--------------------
1. Create a file called .env and put it inside the server folder
2. Add the data below into it with your information...

                                 ↓        ↓                ↓        ↓
DATABASE_URL = "postgresql://username:password@localhost:8008/databaseName?schemapublic"

JWT_SECRET_KEY = "functionhero"

# UPDATING THE DATABASE (MIGRATION)
----------------------------------
- If you make any changes to the schema simply run this command...
1. CD into the server folder
2. Make sure your .env folder is in your server folder (see L29)
3. npx prisma migrate dev --name replaceThisName
4. Replace "replaceThisName" and name your migration
- This is for updating tables/names/columns

# ERROR WITH .ENV AND MIGRATION
--------------------------------
- If you can't migrate the schema to your database because it says there's a port error...
1. Delete the .env
2. Make a new .env
3. Input all the new information and try migration again
4. If that fails, delete all files in the migration folder and repeat steps 1-3

# SEEDING THE DATABASE
------------------------
1. CD into the server folder
2. Make sure your .env folder is in your server folder (see L29)
3. npx prisma db seed

# RESETTING THE DATABASE (REMOVE ALL DATA)
------------------------------------------
1. CD into the server folder
2. Make sure your .env folder is in your server folder (see L29)
3. run 'npm run dbreset' in the terminal
4. Check database to confirm data is gone (query tool -> select * from "tableName"; -> f5 key)

# Why is the "cost" column a string?
- In the schema, or when you write a postman request you'll notice "cost" is a string type
- I've tried to do an Int, but it never includes the decimals when you send a request (8.84 will just return 8)
- After extensive research I found this post and people say that using strings for prices is acceptable - just a quick easy alternative work around. I'm sure I can figure out how to do it without using a string but it's not worth the extra hassle to achieve the same result. Using a string type works perfectly fine.

https://stackoverflow.com/questions/35709595/why-would-you-use-a-string-in-json-to-represent-a-decimal-number