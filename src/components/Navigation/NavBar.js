import React from 'react';
import { Navbar, NavbarBrand }from 'react-bootstrap';

export default function NavBar() {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand href="/">Mindful App</Navbar.Brand>
            </Navbar>
        </div>
    )
}
