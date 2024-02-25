import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import PlayList from './components/Playlist';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {



  return (
    <>
    <Container style={{textAlign:'center'}}>
      <SearchBar/>
      <PlayList/>
      <Button>Save to Spotify</Button>
      </Container>
    </>
  );
}

export default App;
