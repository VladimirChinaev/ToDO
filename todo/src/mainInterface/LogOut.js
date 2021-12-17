import React from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const Exit = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate();
    const Escape = async () => {
        try {
            auth.logout();
            navigate("/auth", { replace: true });
        } catch (e) {
            console.log(e);
            alert(e);
        }
    }
    return (
        <button className="exit" onClick={() => {
            Escape();
        }}>
            <div className="inExit">
                Escape
            </div>
        </button>
    )
}

export default Exit;