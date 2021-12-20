import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useHttp } from "../hooks/http.hook";
import { useNavigate } from "react-router-dom";
import { authPage, appPage, API_GET_TODOS, REGISTER, LOGIN } from "./EndPoints";


export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const { loading, request } = useHttp();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "", password: "",
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const registerHandler = async () => {
        try {
            await request(API_GET_TODOS + REGISTER, "POST", form);
            alert("user was created!");
            navigate(authPage, { replace: true });
        } catch (e) {
            alert(e);
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request(API_GET_TODOS + LOGIN, "POST", { ...form })
            auth.login(data.data.token, data.data.userId);
            navigate(appPage, { replace: true });
        } catch (e) {
            alert(e);
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