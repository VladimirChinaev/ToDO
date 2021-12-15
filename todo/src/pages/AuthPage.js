import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useHttp } from "../hooks/http.hook";
import { useNavigate } from "react-router-dom";


export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const { loading, request } = useHttp();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "", password: "",
    })
    console.log(auth.isAuthenticated);

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
        console.log(form);
    }

    const registerHandler = async () => {
        try {
            console.log(form);
            const data = await request("api/register", "POST", form);
            console.log("Data", data);
            navigate("/app", { replace: true });
        } catch (e) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/login', 'POST', { ...form })
            console.log("Data:", data);
            auth.login(data.data.token, data.data.userId);
            navigate("/app", { replace: true });
        } catch (e) {

        }
    }

    return (
        <div className="login">
            <div className="title">
                <h1>Welcome!</h1>
            </div>
            <form method="post">
                <input
                    type="text"
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
                        onClick={loginHandler}
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