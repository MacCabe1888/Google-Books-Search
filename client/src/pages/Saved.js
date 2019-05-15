import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// This Saved component furnishes the UI for the Saved page.
class Saved extends Component {
  state = {
    // The books array contains all the saved books to be displayed.
    books: []
  };

  // If the component successfully mounts, trigger the getSavedBooks function.
  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    // Call the API's getSavedBooks function to perform a get request to the app's database,
    API.getSavedBooks()
      // then update the state to display the book data retrieved, if any,
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      // or else log the error in the console.
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    // Call the API's deleteBook function to perform a delete request to the app's database and delete the unique book matching the selected ID.
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  // Render the Saved page's HTML.
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
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {/* If our books array is not empty (i.e., if there is at least one saved book), */}
              {this.state.books.length ? (
                // display a list of book components with each saved book's info.
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                // Otherwise, display this placeholder message.
                <h2 className="text-center">Once you save some books, they will appear here.</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
