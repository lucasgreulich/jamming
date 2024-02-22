import { Container, Card, CardBody, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchResults() {

    return(
         <Card style={{width: '18rem'}}>
                <Card.Body>
                    <ListGroup variant='flush'>
                        <ListGroupItem>Song</ListGroupItem>
                        <ListGroupItem>Artist</ListGroupItem>
                        <ListGroupItem>Album</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        
        
    );

};

export default SearchResults;