import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer
        style={{ backgroundColor: "#f8f8f8" }}
        color="blue"
        className="font-small pt-4 mt-4"
      >
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="6">
              <h5 className="title">Open Government License</h5>
              <p>
                The source of information in this database has been developed by
                Employment and Social Development Canada (ESDC) and this site
                contains information licensed under Open Government License.
              </p>
            </Col>
            <Col md="6">
              <h5 className="title">Sources</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="http://noc.esdc.gc.ca/English/CH/Welcome.aspx?ver=16&ch=03">
                    Career Handbook (Government of Canada)
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="https://www.canada.ca/en/employment-social-development.html">
                    Employment and Social Development Canada
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            Developed with ❤️ by{" "}
            <a href="https://github.com/evmarts"> evmarts </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
