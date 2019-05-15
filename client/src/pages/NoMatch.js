import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

// This NoMatch component is rendered when an invalid path is specified.
// It displays a 404 error message to the user.
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404: Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face with Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
