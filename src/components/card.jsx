import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './foto.json';

function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      {data.map(foto => {
        return (
          <div key={foto.id}>
            <Card.Img variant="top" src={foto.url} alt={foto.url} />
            <Card.Body>
              <Card.Title>{foto.Title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </div>
        );
      })}
    </Card>
  );
}

export default Cards;
