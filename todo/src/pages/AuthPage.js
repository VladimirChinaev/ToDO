import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook"


export const AuthPage = () => {
    const { loading, error, request } = useHttp();
    const [form, setForm] = useState({
        email: "", password: "",
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request("api/auth/register", "POST", { ...form });
            console.log("Data", data);
        } catch (e) { }
    }

    return (
        <div className="login">
            <div className="title">
                <h1>Welcome!</h1>
            </div>
            <form method="post">
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
                    <button
                        type="submit"
                        className="buttonsAuth"
                        disabled={loading}
                    >
                        Sign in</button>
                    <button
                        type="submit"
                        className="buttonsAuth"
                        disabled={loading}
                        onClick={registerHandler}
                    >Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default AuthPage;