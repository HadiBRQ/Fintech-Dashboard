import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © FobeWork - Fintech Dashboard.</Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
