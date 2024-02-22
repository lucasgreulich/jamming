import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Card, CardBody, ListGroup, ListGroupItem } from 'react-bootstrap';

function PlayList (){

    return(
<>
        <Button>Create Playlist</Button>
            <Card 
            style={{width: '18rem'}}
            className='mb-2'
            >
                <Card.Body>
                    <ListGroup variant='flush'>
                        <ListGroupItem>Song</ListGroupItem>
                        <ListGroupItem>Artist</ListGroupItem>
                        <ListGroupItem>Album</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
</>
    );

};


export default PlayList;