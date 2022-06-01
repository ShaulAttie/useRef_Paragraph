

function Date03(props) {

    return (
        <>
            <div>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" max={props.max} value={props.value} onChange={props.onChange} />
            </div>
            <div>
                <span>The Problem occurred</span>{(props.value && props.numDays === 0) && <span className="when"> Today</span>}
                {(props.value && props.value !== props.max) && <span className="when">{props.numDays} days ago</span>}
            </div>
        </>
    );
};

export default Date03