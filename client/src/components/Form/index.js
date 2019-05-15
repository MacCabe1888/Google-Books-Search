import React from "react";

// This Form component allows the user to search for a book from the Home page by entering the book's title and clicking the "Search" button.
// The user's query is passed down to the Form component from the Home component's state.
// The handleInputChange and handleFormSubmit functions are passed down to this component from the Home component.
function Form({ query, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Search by Title</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={query}
          placeholder="The Great Gatsby"
          name="query"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
