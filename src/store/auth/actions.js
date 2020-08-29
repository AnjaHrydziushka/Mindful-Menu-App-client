import axios from 'axios';

export const login = (email, password) => async (dispatch, getState) => {
    try {
        const response = await axios.post(`http://localhost:4000/login`, {
            email,
            password
        });
        console.log("Response:", response)
    } catch (e) {
        console.log('Error:', e)
    }
}

export const signup = (email, password) => async (dispatch, getState) => {
    try {
        const response = await axios.post(`http://localhost:4000/signup`, {
            email,
            password
        });
        console.log("Response:", response)
    } catch (e) {
        console.log('Error:', e)
    }
}