import React from 'react';
import { Navbar }from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Menu.css'

export default function NavBar() {
    const history = useHistory();
    const navbar = {backgroundColor: "lightskyblue"}
    return (
        <div>
            <nav class="navbar navbar-light" style={navbar}>
                <a class="navbar-brand" onClick={() => history.push('/')}>Mindful Menu</a>
            </nav>
        </div>
    )
}
