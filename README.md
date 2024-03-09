This Node.js Express server utilizes regular expressions in route paths to handle multiple URL variations.

Project Setup
Clone the Repository:
git clone https://github.com/el-riber/web2.git

Navigate to the Project Directory:
cd express-regex-routing

Install Dependencies:
npm install
Running the Server

To start the server, run:
node index.js

Testing the Server
Once the server is running, you can test it by visiting different URL variations:

http://localhost:3002/user
http://localhost:3002/username

Regular Expressions in Route Paths
Regular expressions provide flexibility in defining route paths. In this project, a route is defined using the app.get() method with the path parameter '/user(name)?', where '(name)?' makes the preceding 'name' parameter optional. This allows the route to match both '/user' and '/username'.

Error Handling
The server handles undefined routes by implementing a 404 error handler, returning a plain text message: "404 - Not Found".

