import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import DropdownList from "../ui/DropdownList";
const draftdata = require("./draftdata.json");
function DraftGrid() {
  return (
    <>
      <Container>
        <Row>
          {draftdata.map((draft) => (
            <Col xs={12} md={6} lg={4} className="p-3" key={draft.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{draft.name}</Card.Title>
                  <Card.Text>{draft.intro}</Card.Text>
                  <div className="d-grid gap-2">
                    <DropdownList items={draft.pdfLinks} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default DraftGrid;
