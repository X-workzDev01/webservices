import React from 'react';
import './App.css';
import {Button, Form, Container,Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    
    
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light navbar-background">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    
      <input class="form-control mr-sm-2 search-right" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

  </div>
</nav>
       

      <header className="App-header">
       


        <h1 className="title">Enquiry Form</h1>
        
        <Container className='class-container'>
          <Form>
            <Row>
              <Col className='coloums'>
                <Form.Group controlId="formName">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder='Name' />
                </Form.Group>
              </Col>
              <Col className='coloums'>
                <Form.Group controlId="formEmail">
                  <Form.Label></Form.Label>
                  <Form.Control type="email" placeholder='Email' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className='coloums'>
                <Form.Group controlId="formPhonenumber">
                  <Form.Label></Form.Label>
                  <Form.Control className='class-control' type="tel" placeholder='Phone Number' />
                </Form.Group>
              </Col>
              <Col className='coloums'>
                <Form.Group controlId="formQualification">
                  <Form.Label></Form.Label>
                  <Form.Control className='class-control' type="text" placeholder='Qualification' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className='coloums'>
                <Form.Group controlId="formName">
                  <Form.Label></Form.Label>
                  <Form.Control className='class-control' type="number" placeholder='Graduation year' />
                </Form.Group>
              </Col>
              <Col className='coloums'>
                <Form.Group controlId="formPlace">
                  <Form.Label></Form.Label>
                  <Form.Control className='class-control' type="text" placeholder='Place' />
                </Form.Group>
              </Col>
            </Row>



            

          </Form>
          <br></br>


          <input type="submit" id="submit-btn" name="Submit" alt="Sumbmit" value="Submit" />
        </Container>
       



      </header>
    </div>
  );
}

export default App;
