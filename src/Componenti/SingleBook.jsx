import { Card, Col, Row } from "react-bootstrap";

const SingleBook = ({ book }) => {
  return (
    <Row>
      <Col>
        <Card className="book-cover ms-4 me-4 mt-4 mb-4">
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SingleBook;
