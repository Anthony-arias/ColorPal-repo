import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router"

export default (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPW, setConfirmPW] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("in submit handler")
        axios.post('http://localhost:8000/api/register', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPW
        })
            .then(navigate("/"))
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>First Name:</label><br />
                    <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
                </p>
                <p>
                    <label>Last Name:</label><br />
                    <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                </p>
                <p>
                    <label>Email:</label><br />
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p>
                    <label>Confirm Password:</label><br />
                    <input type="text" onChange={(e) => setConfirmPW(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
        )
}