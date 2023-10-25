import { Card, Col, Row } from 'react-bootstrap'
import fantasy from '../Data/fantasy.json'

const AllTheBooks = () => {
    return (
    <Row>
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} lg={2} key={book.asin}>
            <Card className="book-cover ms-4 me-4 mt-4 mb-4s">
              <Card.Img variant="top" src={book.img}  />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllTheBooks

