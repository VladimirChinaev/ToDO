const Input = (props) => {
    const handleCreate = (e, name) => {
        props.handleCreateTodos(e, name);
    };
    return (
        <form onSubmit={(e) => handleCreate(e, props.text)}>
            <div className="mainInput">
                <input
                    type="text"
                    required
                    placeholder="I want to..."
                    value={props.text}
                    onChange={(e) => props.setText(e.target.value)}
                    className="input"
                ></input>
            </div>
        </form>
    );
};

export default Input;
