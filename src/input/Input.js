import { useState } from "react";
const Input = (props) => {
    const [inputText, setinputText] = useState('')
    const handleCreate = (e, name) => {
        props.handleChangeTodos(e, name)
        setinputText('')
    }
    return (
        <form onSubmit={(e) => handleCreate(e, inputText)}>
            <div className="mainInput">
                <input
                    type="text"
                    required
                    placeholder="I want to..."
                    value={inputText}
                    onChange={(e) => setinputText(e.target.value)}
                    className="input"
                ></input>
            </div>
        </form>
    )
}

export default Input;