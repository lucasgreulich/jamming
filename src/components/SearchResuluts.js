import { Container, Card, CardImg, CardBody, CardText, Row, CardTitle } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchResults() {

    return(
    <>
    <Container>
        <Row className='mx-2 row row-cols-4'>
            <Card>
                <Card.Img src='#'></Card.Img>
                <Card.Body>
                    <Card.Title>Album name here</Card.Title>
                </Card.Body>
            </Card>
        </Row>
    </Container>
    </>
        
        
    );

};

export default SearchResults;