import React, { useState } from "react";


export const AuthPage = () => {
    const [form, setForm] = useState({
        user: "", email: "", password: ""
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <div className="login">
            <div className="title">
                <h1>Welcome!</h1>
            </div>
            <form method="post">
                <input
                    type="text"
                    name="user"
                    placeholder="Username..."
                    required="required"
                    className="inputAuth"
                    id="user"
                    onChange={changeHandler} />
                <input
                    type="email"
                    name="email"
                    placeholder="Email..."
                    required="required"
                    className="inputAuth"
                    id="email"
                    onChange={changeHandler} />
                <input
                    type="password"
                    name="password"
                    placeholder="Password..."
                    required="required"
                    className="inputAuth"
                    id="password"
                    onChange={changeHandler} />
                <div className="buttonsAuthContainer">
                    <button type="submit" className="buttonsAuth">Sign in</button>
                    <button type="submit" className="buttonsAuth">Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default AuthPage;