import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Navigation.module.css';
import './Search.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import ToggleButton from '../UI/ToggleButton/ToggleButton';
import { MDBIcon } from "mdbreact";




const navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Brand href="#home"><Logo />The Cinephiles</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{ fontSize: '22px' }}>
                    <Nav className={classes.Menu}>
                        
                        <Nav.Link href="/menu"><ToggleButton /></Nav.Link>
                        <Nav.Link href="/menu" style={{ marginLeft: '-15px', color: 'white' }}> Menu</Nav.Link>
                    </Nav>
                    <Nav className={classes.All}>
                        <NavDropdown title="All" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    
                </Nav>
                <Form inline style={{ width: '100%' }} className='input-icons'>
                    <FormControl type="text" placeholder="Search Cinephiles" className='input-field' style={{ width: '95%' }}>
                    </FormControl>
                    <div className='icon'><MDBIcon icon="search" size="2x"/></div>
                   
                </Form>
                <div className={classes.Line}>
                </div>
                <Nav  style={{ fontSize: '22px' }}>
                    <Nav.Link href="#menu" > SignIn</Nav.Link>
                </Nav>
               
            </Navbar.Collapse>
        </Navbar>

        
    )
}

export default navigation;