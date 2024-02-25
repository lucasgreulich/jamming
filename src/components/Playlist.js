import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Card, CardBody, ListGroup, ListGroupItem } from 'react-bootstrap';

function PlayList (){

    return(
<>
        
        <Container style={{height: 500, backgroundColor:'lightgray'}} className='mt-3'>
        <ListGroup>
            <ListGroupItem>Song 1</ListGroupItem>
            <ListGroupItem>Song 2</ListGroupItem>
            <ListGroupItem>Song3</ListGroupItem>
        </ListGroup>

            </Container>
            <Button className='mx-3'>Create Playlist</Button>
</>
    );

};


export default PlayList;