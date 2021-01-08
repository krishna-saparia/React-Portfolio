import React from 'react';
import {BrowserRouter as Router , Route , Link } from 'react-router-dom';
import { Container, Navbar ,Nav } from 'react-bootstrap';
import './App.css';

import Footer from './components/Footer';

class App extends React.Component{
 
  constructor(props) {
    
    super(props);
    
    this.state = {
      title: 'Krishna Saparia',
      headerLinks: [
        { title: 'Home' , path: '/'},
        { title: 'About' , path: '/about'},
        { title: 'Contact' , path: '/contact'}
      ],
      home: {
        title : 'Hey there',
        subTitle: 'Projects the make a difference',
        text: 'Checkout My Project Below..'
      },
      about:{
       title : 'About Me',
      },
      contact: {
        title : 'Let\'s talk',
      }
    }
  }
  
  
  render() {
    return (
      <Router>
        <Container className = "p-0" fluid={true}>

          <Navbar className = "border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Krishna Saparia</Navbar.Brand>
            <Navbar.Toggle className="border-0"aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Footer />
        </Container>
      </Router>
    );
  }
}


export default App; 