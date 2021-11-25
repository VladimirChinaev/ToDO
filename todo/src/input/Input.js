const Input = (props) => {
    const handleChange = (e) => {
        props.setText(e.target.value);
    };
    return (
        <form onSubmit={props.handleChangeTodos}>
            <div className="mainInput">
                <input
                    type="text"
                    required
                    placeholder="I want to..."
                    value={props.text}
                    onChange={handleChange}
                    className="input"
                ></input>
            </div>
        </form>
    )
}

export default Input;