import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export default function ChatForm(props) {
    // state hook for form input field
    const [name, setName] = useState('')

    let navigate = useNavigate();
    //handle submit function for form
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}chats`, { title: name })

            navigate(`/chat-room/${response.data._id}`)
        } catch (err) {
            console.log(err)
        }
    }

    // rendering chat form based on whether or not a user is logged in or not
    let loggedIn = <div className='field is-grouped is-grouped-centered'>
        <form onSubmit={handleSubmit}>
            <p className='title is-2'>Give Your Chat A Name</p>
            <div className='field is-grouped is-grouped-centered'>
                <input
                    autoComplete='off'
                    className='input'
                    type="text"
                    id="title"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className='field is-grouped is-grouped-centered'>
                <button className='button is-dark' type="submit">Create Chat</button>
            </div>
        </form>
    </div>
    // rendering chat form based on whether or not a user is logged in or not
    // asking user to log in 
    let notLoggedIn = <div>
        <h2>Login to create a chat room</h2>
        <Link to='/login'>
            Login Page
        </Link><br></br>
        <Link to='/register'>
            Register for an account
        </Link>
    </div>
    return (
        <section className="hero is-large">
            <section className="hero-body is-medium has-background-warning">
                {/* rendering based on status */}
                <div>
                    {props.currentUser ? loggedIn : notLoggedIn}
                </div>
            </section>
        </section>
    )
}