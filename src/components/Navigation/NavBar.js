import React from 'react';
import { useHistory } from 'react-router-dom';
import { selectToken } from '../../store/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/auth/actions';

export default function NavBar() {

    const history = useHistory();
    const navbar = {backgroundColor: "lightskyblue"}
    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    return (
        <div>
            <nav className="navbar navbar-light" style={navbar}>
                <a 
                className="navbar-brand" 
                onClick={() => history.push('/')}>
                    Mindful Menu
                </a>
                
                { token ? <button 
                className="btn btn-sm btn-outline-secondary"
                type="button"
                onClick={() => dispatch(logOut())}
                >
                    Logout
                </button> : null }
            </nav>
        </div>
    )
}
