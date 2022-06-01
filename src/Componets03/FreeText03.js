function FreeText03(props) {
    return (
        <>
            <label htmlFor="textarea">Free Text:</label>
            <div>
                <textarea id="textArea"
                    minLength="20"
                    maxLength="200"
                    dirname="description.dir"
                    cols="50"
                    rows="5"
                    onChange={props.onChange} />
            </div>
            <span>{props.tlength} letters</span>
        </>
    );
};

export default FreeText03