import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, Container, Row, Card, FormControl } from 'react-bootstrap';
import { useState } from 'react';

function SearchBar (){
const [searchInput, setSearchInput] = useState("");

return (
<>
<Container>
    <InputGroup className='mb-3' size='lg'>
        <FormControl 
        placeholder='Search'
        type='input'
        onChange={event => setSearchInput(event.target.value)}
        />
    </InputGroup>
    <Button onClick={event => console.log('clicked')}>Search</Button>
</Container>
</>
);
};

export default SearchBar;