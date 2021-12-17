import React from "react";


const Exit = ({ Escape }) => {
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