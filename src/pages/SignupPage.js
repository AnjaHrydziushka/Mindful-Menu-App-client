import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../store/auth/actions';

export default function SignupPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(signup(email, password));
        console.log("Email:", email, "Password:", password);
        
        setEmail("")
        setPassword("")
    }
    return (
        <div>
            <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <p>
                    <label>
                        Email:{" "}
                        <input 
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        />
                        </label>
                    </p>
                    <p>
                    <label>
                        Password:{" "}
                        <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                        </label>
                    </p>
                    <button type="submit">Sign up</button>
                </form>
        </div>
    )
}
