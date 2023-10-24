import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <div>
      <Alert variant="success">
        Benvenuti nel nostro negozio online!
      </Alert>
      <h2>Scopri le nostre offerte speciali</h2>
    </div>
  );
}

export default Welcome;