import React from "react";


export const AuthPage = () => {
    return (
        <div className="login">
            <div className="title">
                <h1>Welcome!</h1>
            </div>
            <form method="post">
                <input type="text" name="u" placeholder="Username..." required="required" className="inputAuth" />
                <input type="text" name="u" placeholder="Email..." required="required" className="inputAuth" />
                <input type="password" name="p" placeholder="Password..." required="required" className="inputAuth" />
                <div className="buttonsAuthContainer">
                    <button type="submit" className="buttonsAuth">Sign in</button>
                    <button type="submit" className="buttonsAuth">Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default AuthPage;