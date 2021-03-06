const express = require("express");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets:
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view:
app.use(routes);

// Connect to MongoDB:
const localDB = "google_books_db";
mongoose.connect(
  // Use localDB if not connected to deployment DB:
  process.env.MONGODB_URI || `mongodb://localhost/${localDB}`,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server:
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
