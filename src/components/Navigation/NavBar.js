import React from 'react';
import { Navbar }from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
    const history = useHistory();
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand onClick={() => history.push('/')}>Mindful App</Navbar.Brand>
            </Navbar>
        </div>
    )
}
