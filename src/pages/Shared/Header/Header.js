import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{position: 'sticky', top: '0', backgroundColor: 'rgba(255, 255, 255, 0.6)', zIndex: '2'}} >
            <Navbar style={{backgroundColor: 'rgba(94, 73, 53, 0.3)', zIndex: '2'}} className="py-3" collapseOnSelect expand="md">
                <Container>
                <Navbar.Brand as={NavLink} exact to="/">Davasko</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} exact to="/orders">Orders</Nav.Link>
                            <Nav.Link as={NavLink} exact to="/manage">Manage</Nav.Link>
                            <Nav.Link as={NavLink} exact to="/add">Add</Nav.Link>
                            <Nav.Link as={NavLink} exact to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;