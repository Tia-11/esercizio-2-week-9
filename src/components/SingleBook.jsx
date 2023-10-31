import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function SingleBook(props) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    props.changeSelectedBook(props.book.asin);
  };

  return (
    <>
      <Card
        onClick={toggleSelection}
        style={{
          border: isSelected ? '3px solid red' : 'none',
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleBook;