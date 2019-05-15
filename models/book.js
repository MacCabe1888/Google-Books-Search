const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating a bookSchema requiring all the specified info for each book except the optional subtitle
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

// creating a Book model based on the schema defined above
const Book = mongoose.model("Book", bookSchema);

// exporting the Book model
module.exports = Book;
