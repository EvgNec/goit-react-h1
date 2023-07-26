import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './foto.json'

function BasicExample() {

    return (      
        <Card style={{ width: '18rem' }}>
            {data.map(foto => {
                return (
<Card.Img variant="top" src={foto.url} alt={foto.url}/>
            )}
            )
            }
    </Card>
  );
}

export default BasicExample;


    //   <Card.Img variant="top" src={data[0].url} alt={data[0].url}/>
    //   <Card.Body>
    //     <Card.Title>{data[0].Title}</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>