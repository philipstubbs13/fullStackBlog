const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const routes = require('./routes');


// Server will use port 4000.
const PORT = process.env.PORT || 4000;
// Yes, the app uses express.
const app = express();

// Serve up static assets
app.use(express.static("client/build"));

// Configure body parser for axios requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require all models
// const db = require('./models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
//app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reacthealthtracker');

// // If deployed, use the deployed database. Otherwise use the local reacthealthtracker database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reacthealthtracker";

// // Set mongoose to leverage built in JavaScript ES6 Promises
// // Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, {
//   useMongoClient: true
// });

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});