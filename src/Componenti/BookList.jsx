import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook"; 

const BookList = ({ books }) => { 
  return (
    <Row>
      {books.map((book, index) => (
        <Col className="col-2" key={index}>
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
