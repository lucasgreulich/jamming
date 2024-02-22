import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import PlayList from './components/Playlist';
import SearchResults from './components/SearchResuluts';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {




  return (
    <>
    <div className="App">
      <SearchBar/>
      <PlayList/>
      <SearchResults/>
      <Button>Save to Spotify</Button>


    </div>
    </>
  );
}

export default App;
