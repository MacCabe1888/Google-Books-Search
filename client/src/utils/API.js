import axios from "axios";

export default {
  // gets books from the Google API
  getBooks: function(query) {
    return axios.get("/api/google", { params: { q: "title:" + query } });
  },
  // gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // deletes the saved book with the given ID
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
