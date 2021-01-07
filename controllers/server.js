const express = require("express");
// Sets an initial port.
const PORT = process.env.PORT || 8080;
// Tells node that we are creating an "express" server
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burger_controller.js");

app.use(routes);

// LISTENER

app.listen(PORT, function () {
  console.log("App listening on: http://localhost:" + PORT);
});
