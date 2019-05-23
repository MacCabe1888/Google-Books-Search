import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// This Home component furnishes the UI for the Home page.
class Home extends Component {
  state = {
    // The books array contains the search results to be displayed.
    books: [],
    // A string representing the user's search query, obtained from the form input.
    query: "",
    // The placeholder message to be displayed until there are search results to display.
    message: "Search for a book to begin!"
  };

  // updates the state to reflect changes in user input
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // triggers getBooks function upon form submission
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  getBooks = () => {
    // Call the API's getBooks function to perform a get request to the Google API,
    API.getBooks(this.state.query)
      // then update the state to display the book data retrieved, if any,
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      // or else update the placeholder message to let the user know that the query did not return any results.
      .catch(() =>
        this.setState({
          books: [],
          message: "No new books found. Try a different query!"
        })
      );
  };

  // This function calls the API's post request function to save a unique book (using its ID) from the search results to the database.
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    // After saving the book, call getBooks again to update the state and remove the saved book from the search results list.
    }).then(() => this.getBooks());
  };

  // Render the Home page's HTML.
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and save the books that interest you!</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="fas fa-search">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                query={this.state.query}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Books" icon="far fa-book">
              {/* If our books array is not empty (i.e., if there is at least one search result), */}
              {this.state.books.length ? (
                // display a list of book components with each book's info.
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-success ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                // Otherwise, display the placeholder message.
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
