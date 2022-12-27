import React from "react";
import { Container, Row, Col } from "reactstrap";

function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col md={6}>{new Date().getFullYear()} WEBDECODER.</Col>
                    <Col md={6}>
                        <div className="text-sm-end d-none d-sm-block">
                            Made from Strong Girl
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;