import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Card, CardBody, ListGroup, ListGroupItem } from 'react-bootstrap';

function PlayList (){

    return(
<>
        
        <Container style={{height: 500, backgroundColor:'lightgray'}} className='mt-3'>
        <ListGroup>
            <ListGroupItem></ListGroupItem>
            <ListGroupItem></ListGroupItem>
            <ListGroupItem></ListGroupItem>
        </ListGroup>

            </Container>
            <Button className='mx-3'>Create Playlist</Button>
</>
    );

};


export default PlayList;