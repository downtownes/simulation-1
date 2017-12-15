import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet"></link>


        <header className="App-header">
          <img className='logo' src='c:\Users\towne\Desktop\devmtn\Week3\Day5\simulation1\simulation-1\simulation\src\logo.png' alt='Logo'/>
          <h1>SHELFIE</h1>
        </header>


        <section className='div-holder'>
          <div className='shelf'><h1 className='shelves'>Shelf A</h1></div>
          <div className='shelf'><h1 className='shelves'>Shelf B</h1></div>
          <div className='shelf'><h1 className='shelves'>Shelf C</h1></div>
          <div className='shelf'><h1 className='shelves'>Shelf D</h1></div>
        </section>

        
      </div>
    );
  }
}

export default App;
